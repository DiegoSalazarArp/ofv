import { LoginForm } from "@/components/auth/login-form";


export default function Home() {
  return (
    <div className="h-screen flex items-center justify-center p-2 font-[family-name:var(--font-geist-sans)]">
      <LoginForm />
    </div>
  );
}
