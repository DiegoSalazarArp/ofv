import { SelectProfile } from "@/components/auth/select-profile";

export default function Page({ searchParams }: { searchParams: { idSession: string } }) {

  return (
    <div className="flex h-screen w-full items-center justify-center px-4">
      <SelectProfile searchParams={searchParams} />
    </div>
  )
}