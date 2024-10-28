import { LoginForm } from "@/components/auth/login-form"

export default function Page({ searchParams }: { searchParams: { message: string } }) {
  return (
    <div className="flex h-screen w-full items-center justify-center px-4">
      <LoginForm searchParams={searchParams} />
    </div>
  )
}
