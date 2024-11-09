"use client"

import { ChevronRight } from "lucide-react"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar"
import { NavItem } from "@/lib/functions/types"
import { usePathname } from "next/navigation"

export function NavMain({
  items,
}: {
  items: NavItem[]
}) {


  const pathname = usePathname()
  const formatUrl = (url: string) => {
    return `/dashboard/${url.toLowerCase().replace('.aspx', '')}`
  }

  const isItemExpanded = (item: NavItem) => {
    if (!item.items) return false
    return item.items.some(subItem =>
      pathname === formatUrl(subItem.url)
    )
  }

  return (
    <SidebarGroup>
      <SidebarGroupLabel>Platform</SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item, index) => (
          <SidebarMenuItem key={index}>
            {item.items && item.items.length > 0 ? (
              // Si el elemento tiene hijos, renderizamos el colapsable
              <Collapsible asChild defaultOpen={isItemExpanded(item)}>
                <div>
                  <SidebarMenuButton asChild tooltip={item.title}>
                    <span>{item.title}</span>
                  </SidebarMenuButton>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuAction className="data-[state=open]:rotate-90">
                      <ChevronRight />
                      <span className="sr-only">Toggle</span>
                    </SidebarMenuAction>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      {item.items.map((subItem: NavItem, subIndex: number) => (
                        <SidebarMenuSubItem key={subIndex}>
                          <SidebarMenuSubButton asChild className={pathname === formatUrl(subItem.url) ? 'font-semibold' : ''}>
                            <a href={formatUrl(subItem.url)}>
                              <span>{subItem.title}</span>
                            </a>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </div>
              </Collapsible>
            ) : (
              // Si el elemento no tiene hijos, lo hacemos clickeable
              <SidebarMenuButton asChild tooltip={item.title}>
                <a href={item.url}>
                  <span>{item.title}</span>
                </a>
              </SidebarMenuButton>
            )}
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  )
}
