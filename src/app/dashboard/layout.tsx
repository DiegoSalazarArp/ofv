import { auth } from "@/auth"
import { AppSidebar } from "@/components/app-sidebar"
import { ModeToggle } from "@/components/mode-toggle"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

export default async function Layout({ children }: { children: React.ReactNode }) {
  const session = await auth()

  return (
    <SidebarProvider>
      <AppSidebar menu={session?.user} />
      <SidebarInset>

        <div className="flex  h-16 items-center justify-between gap-2 px-4">
          <SidebarTrigger className="-ml-1" />
          <ModeToggle />
        </div>

        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          {children}
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
