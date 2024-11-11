import { MenuItem, NavItem } from "./types";


/**
 * Transforma un submenu en un menú de navegación jerárquico
 * @param submenu - Objeto que contiene un array de elementos MenuItem
 * @returns Array de elementos NavItem organizados jerárquicamente
 * 
 * @example
 * const submenu = {
 *   data: [
 *     { MenuItemCod: 1, ItemDescripcion: "Home", ItemLink: "/", ItemPadre: 0 },
 *     { MenuItemCod: 2, ItemDescripcion: "About", ItemLink: "/about", ItemPadre: 1 }
 *   ]
 * };
 * const navItems = transformMenu(submenu);
 */
export function transformMenu(submenu: { data: MenuItem[] }): NavItem[] {
    const data = submenu.data;

    // Map to hold menu items by their IDs
    const menuMap = new Map<number, NavItem>();

    // First, create NavItem objects for all menu items
    data.forEach((item) => {
        menuMap.set(item.MenuItemCod, {
            title: item.ItemDescripcion,
            url: item.ItemLink || '#', // Default to '#' if no link is provided
            items: [], // Initialize items as empty array
        });
    });

    const navMain: NavItem[] = [];

    // Build the hierarchy
    data.forEach((item) => {
        const navItem = menuMap.get(item.MenuItemCod)!;
        if (item.ItemPadre === 0) {
            // Root item
            navMain.push(navItem);
        } else {
            // Child item
            const parentNavItem = menuMap.get(item.ItemPadre);
            if (parentNavItem) {
                parentNavItem.items = parentNavItem.items || [];
                parentNavItem.items.push(navItem);
            }
        }
    });

    return navMain;
}
