import { SelectProfile } from "@/components/auth/select-profile";

export default function Page({ searchParams }: { searchParams: { id: string } }) {

  return (
    <div className="flex h-screen w-full items-center justify-center px-4">
      <SelectProfile id={searchParams.id} />
    </div>
  )
}