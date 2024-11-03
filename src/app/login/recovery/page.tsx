import { PasswordRecoveryForm } from "@/components/auth/password-recovery";

export default function Page({ searchParams }: { searchParams: { message: string } }) {
    return (
        <div className="flex h-screen w-full items-center justify-center px-4">
            <PasswordRecoveryForm searchParams={searchParams} />
        </div>
    )

}