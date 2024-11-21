'use client'

import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"

export default function NotFound() {
  const router = useRouter()

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background">
      <h1 className="text-4xl font-bold mb-4">404</h1>
      <h2 className="text-2xl mb-4">Página no encontrada</h2>
      <p className="text-muted-foreground mb-8">Lo sentimos, la página que estás buscando no existe.</p>
      <Button 
        variant="default" 
        onClick={() => router.back()}
      >
        Volver
      </Button>
    </div>
  )
}

