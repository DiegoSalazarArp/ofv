import { auth } from "@/auth"
import { AppSidebar } from "@/components/app-sidebar"
import { ModeToggle } from "@/components/mode-toggle"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { redirect } from "next/navigation"

export default async function Layout({ children }: { children: React.ReactNode }) {
  const session = await auth()

  if (!session) {
    redirect('/')
  }

  return (
    <SidebarProvider>
      <AppSidebar dataUser={session?.user} />
      <SidebarInset>

        <div className="flex  h-16 items-center justify-between gap-2 px-4">
          <SidebarTrigger className="-ml-1" />
          <ModeToggle />
        </div>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0 mx-12">
          {children}
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
