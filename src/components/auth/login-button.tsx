"use client"
import { useFormStatus } from "react-dom"
import { Button } from "../ui/button"

export default function LoginButton() {

  const { pending, data, method, action } = useFormStatus();

  const handleLogin = async () => {
    setTimeout(() => {
    }, 4000)


  }

  return (
    <Button onClick={handleLogin} type="submit" className="w-full" disabled={pending}>
      {pending ? "Loading..." : "Login"}
    </Button>
  )
}