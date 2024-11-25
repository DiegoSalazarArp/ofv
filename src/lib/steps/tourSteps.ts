import { DriveStep } from "driver.js";

export const stepsConsultaDocDuplicados = [
  {
    element: '#titulo',
    popover: {
      title: 'Bienvenido',
      description: 'Esta es la sección de consulta de documentos duplicados',
      side: 'bottom',
      
    }
  },
  {
    element: '#seleccion',
    popover: {
      title: 'Formulario de búsqueda',
      description: 'Aquí puedes ingresar los criterios de búsqueda',
      side: 'bottom',
    }
  },
  {
    element: '#resultados',
    popover: {
      title: 'Resultados',
      description: 'Aquí se mostrarán los documentos duplicados encontrados',
      side: 'top',
    }
  }
]; 