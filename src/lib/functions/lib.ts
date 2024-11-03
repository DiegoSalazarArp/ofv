// Define interfaces for type safety

import { MenuItem, NavItem } from "./types";

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
