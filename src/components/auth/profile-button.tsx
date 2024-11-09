'use client'

import React from "react"
import { useFormStatus } from "react-dom"
import { Button } from "../ui/button"

export function SubmitButton({ children, value }: { children: React.ReactNode, value: string }) {
  const { pending } = useFormStatus()
  return (
    <Button
      name='idSesion'
      value={value}
      type="submit"
      disabled={pending}
      className="w-full"
    >
      {
        pending ? (
          <div className="w-full flex items-center justify-center">
            <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-b-transparent" />
            Cargando... por favor espere
          </div>
        ) : (
          children
        )
      }

    </Button>
  )
}