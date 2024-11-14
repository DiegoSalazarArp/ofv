import oracledb from 'oracledb';

// Interfaces para tipado
interface DbConnection {
    user: string;
    password: string;
    connectString: string;
}

interface DbConnections {
    [key: string]: DbConnection;
}

// Validación de variables de entorno
function getEnvVariable(name: string): string {
    const value = process.env[name];
    if (!value) {
        throw new Error(`Variable de entorno ${name} no está definida`);
    }
    return value;
}

// Configuración de conexiones por compañía
const dbConnections: DbConnections = {
    '1': {
        user: getEnvVariable('ORACLE_USER_1'),
        password: getEnvVariable('ORACLE_PASSWORD_1'),
        connectString: `${getEnvVariable('ORACLE_HOST_1')}:${getEnvVariable('ORACLE_PORT_1')}/${getEnvVariable('ORACLE_SERVICE_NAME_1')}`,
    },
    '7': {
        user: getEnvVariable('ORACLE_USER_7'),
        password: getEnvVariable('ORACLE_PASSWORD_7'),
        connectString: `${getEnvVariable('ORACLE_HOST_7')}:${getEnvVariable('ORACLE_PORT_7')}/${getEnvVariable('ORACLE_SERVICE_NAME_7')}`,
    },
    '10': {
        user: getEnvVariable('ORACLE_USER_10'),
        password: getEnvVariable('ORACLE_PASSWORD_10'),
        connectString: `${getEnvVariable('ORACLE_HOST_10')}:${getEnvVariable('ORACLE_PORT_10')}/${getEnvVariable('ORACLE_SERVICE_NAME_10')}`,
    },
    '20': {
        user: getEnvVariable('ORACLE_USER_20'),
        password: getEnvVariable('ORACLE_PASSWORD_20'),
        connectString: `${getEnvVariable('ORACLE_HOST_20')}:${getEnvVariable('ORACLE_PORT_20')}/${getEnvVariable('ORACLE_SERVICE_NAME_20')}`,
    },
};

// Mapa de pools de conexiones
const pools: Map<string, oracledb.Pool> = new Map();

/**
 * Inicializa el pool de conexiones para una compañía específica
 */
async function initializePool(numeroCia: string): Promise<oracledb.Pool> {
    try {
        const config = dbConnections[numeroCia];
        if (!config) {
            throw new Error(`No existe configuración para la compañía ${numeroCia}`);
        }

        const pool = await oracledb.createPool({
            ...config,
            poolMin: 2,
            poolMax: 10,
            poolIncrement: 2,
            poolTimeout: 60
        });

        pools.set(numeroCia, pool);
        console.log(`Pool de conexiones Oracle inicializado para compañía ${numeroCia}`);
        return pool;
    } catch (error) {
        console.error(`Error al inicializar el pool para compañía ${numeroCia}:`, error);
        throw error;
    }
}

/**
 * Obtiene una conexión del pool para una compañía específica
 */
export async function getConnection(numeroCia: string): Promise<oracledb.Connection> {
    let pool = pools.get(numeroCia);

    if (!pool) {
        pool = await initializePool(numeroCia);
    }

    return await pool.getConnection();
}

/**
 * Ejecuta una consulta SQL
 */
export async function executeQuery<T>(
    numeroCia: string,
    sql: string,
    params: any[] = [],
    options: {
        outFormat?: number;
        fetchInfo?: any; // Cambiado de oracledb.FetchInfo a any para resolver el error
        resultSet?: boolean;
    } = {}
): Promise<T[]> {
    let connection;
    try {
        connection = await getConnection(numeroCia);

        const defaultOptions = {
            outFormat: oracledb.OUT_FORMAT_OBJECT,
            ...options
        };

        const result = await connection.execute(sql, params, defaultOptions);

        if (options.resultSet && result.resultSet) {
            const rows = await result.resultSet.getRows();
            await result.resultSet.close();
            return rows as T[];
        }

        return result.rows as T[];
    } catch (error) {
        console.error('Error al ejecutar la consulta:', error);
        throw error;
    } finally {
        if (connection) {
            try {
                await connection.close();
            } catch (error) {
                console.error('Error al cerrar la conexión:', error);
            }
        }
    }
}

/**
 * Ejecuta un procedimiento almacenado
 */
export async function executeProcedure(
    numeroCia: string,
    procedureName: string,
    params: any[],
    outputParams: number = 0
): Promise<any> {
    let connection;
    try {
        connection = await getConnection(numeroCia);

        const bindParams = params.map((_, index) => `:${index + 1}`).join(',');
        const outParams = Array(outputParams).fill('?')
            .map((_, index) => `:out${index + 1}`).join(',');

        const finalParams = [bindParams, outParams].filter(Boolean).join(',');
        const sql = `BEGIN ${procedureName}(${finalParams}); END;`;

        const bindVars: any = {};
        params.forEach((value, index) => {
            bindVars[`${index + 1}`] = value;
        });

        for (let i = 0; i < outputParams; i++) {
            bindVars[`out${i + 1}`] = { dir: oracledb.BIND_OUT };
        }

        const result = await connection.execute(sql, bindVars);
        return result.outBinds;

    } catch (error) {
        console.error('Error al ejecutar el procedimiento:', error);
        throw error;
    } finally {
        if (connection) {
            try {
                await connection.close();
            } catch (error) {
                console.error('Error al cerrar la conexión:', error);
            }
        }
    }
}

// Queries predefinidas
export const queries = {
    /**
     * Obtiene usuarios por rol
     */
    getUsersByRole: async <T>(numeroCia: string, roleId: number) => {
        const sql = `
      SELECT u.* 
      FROM USUARIOS u 
      JOIN USUARIOS_ROLES ur ON u.ID = ur.USUARIO_ID 
      WHERE ur.ROL_ID = :1
    `;
        return executeQuery<T>(numeroCia, sql, [roleId]);
    },

    /**
     * Busca usuarios por nombre o email
     */
    searchUsers: async <T>(numeroCia: string, searchTerm: string) => {
        const sql = `
      SELECT * 
      FROM USUARIOS 
      WHERE UPPER(NOMBRE) LIKE UPPER(:1) 
      OR UPPER(EMAIL) LIKE UPPER(:2)
    `;
        const term = `%${searchTerm}%`;
        return executeQuery<T>(numeroCia, sql, [term, term]);
    },
};

// Procedimientos almacenados específicos
export const procedures = {
    getUserById: async (numeroCia: string, userId: number) => {
        return executeProcedure(numeroCia, 'SP_GET_USER_BY_ID', [userId], 1);
    },

    authenticateUser: async (numeroCia: string, username: string, password: string) => {
        return executeProcedure(numeroCia, 'SP_AUTHENTICATE_USER', [username, password], 2);
    },

    getUserMenu: async (numeroCia: string, userId: number) => {
        return executeProcedure(numeroCia, 'SP_GET_USER_MENU', [userId], 1);
    }
}; 