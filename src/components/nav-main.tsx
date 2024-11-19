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
  SidebarMenuSubItem
} from "@/components/ui/sidebar"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { NavItem } from "@/lib/functions/types"
import { cn } from "@/lib/utils"
import Link from "next/link"
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
    <SidebarGroup className="overflow-y-auto scrollbar-hide">
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
                          <SidebarMenuSubButton asChild>
                            <TooltipProvider>
                              <Tooltip >
                                <div className="flex items-center ">

                                  <TooltipTrigger asChild>
                                    <Link
                                      href={formatUrl(subItem.url)}
                                      className={cn(
                                        "flex w-full text-sm truncate py-1 px-2 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground rounded-sm",
                                        pathname === formatUrl(subItem.url) ? 'font-semibold underline' : ''
                                      )}
                                    >
                                      <span className="truncate">{subItem.title}</span>
                                    </Link>
                                  </TooltipTrigger>
                                  <TooltipContent side="right" align="center">
                                    <p>{subItem.title}</p>
                                  </TooltipContent>
                                </div>
                              </Tooltip>
                            </TooltipProvider>
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
