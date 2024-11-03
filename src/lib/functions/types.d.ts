export interface MenuItem {
    MenuCod: number;
    MenuItemCod: number;
    ItemPadre: number;
    ItemDescripcion: string;
    ItemTexto: string;
    ItemLink: string;
    ItemLinkDesarrollo: string;
    ItemCssClase: string;
    ItemImg: string;
    Orden: number;
    ItemExpandido: boolean;
    ItemTarget: string;
    ItemComun: boolean;
}

export interface NavItem {
    title: string;
    url: string;
    isActive?: boolean;
    items?: NavItem[];
}
