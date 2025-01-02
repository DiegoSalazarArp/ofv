"use client"

import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import CorredorComponent from "../../../nominaasegurados/listadonominas/crearnomina/(components)/corredor-component";
import PoolComponent from "../../../nominaasegurados/listadonominas/crearnomina/(components)/pool-component";
import ContratanteComponent from "../../../nominaasegurados/listadonominas/crearnomina/(components)/contratante-component";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Search } from "lucide-react";

export default function Buscador() {
  const [selectedType, setSelectedType] = useState("")

  const handleCorredorSubmit = (data: { broker: string, policy: string }) => {
    console.log("Datos del corredor recibidos:", data)
  }

  return (
    <div>
      <Card>
        <CardHeader>
        <RadioGroup 
            name="tipo" 
            className="flex justify-center items-center"
            onValueChange={(value) => setSelectedType(value)}
          >
            <div className="flex items-center gap-2">
              <RadioGroupItem value="corredor" id="corredor" />
              <Label htmlFor="corredor">Corredor</Label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="pool" id="pool" />
              <Label htmlFor="pool">Pool</Label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="contratante" id="contratante" />
              <Label htmlFor="contratante">Contratante</Label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="tipo-administracion" id="tipo-administracion" />
              <Label htmlFor="tipo-administracion">Tipo administración</Label>
            </div>
          </RadioGroup>
        </CardHeader>
        <CardContent>
        {selectedType === "corredor" && (
          <CorredorComponent onSubmit={handleCorredorSubmit} />
        )}
        {selectedType === "pool" && (
          <PoolComponent />
        )}
        {selectedType === "contratante" && (
          <ContratanteComponent />
        )}
        {selectedType === "tipo-administracion" && (
          <div>Componente para Tipo Administración</div>
        )}


{selectedType && (
          <form>
            <section>
              <Separator className="mb-4" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex gap-2">
                    <div className="flex-1">
                      <Label htmlFor="rutTitular">Rut Titular</Label>
                      <div className="flex gap-2">
                        <Input 
                          id="rutTitular" 
                          name="rutTitular" 
                          className="flex-1"
                          
                        />
                        <Button 
                          size="icon" 
                          variant="secondary" 
                          type="button"
                        >
                          <Search className="h-4 w-4" />
                          <span className="sr-only">Buscar</span>
                        </Button>
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="nombreTitular">Nombre</Label>
                      <Input 
                        id="nombreTitular" 
                        name="nombreTitular"
                       
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="grupoTitular">Grupo</Label>
                    <Input 
                      id="grupoTitular" 
                      name="grupoTitular"
                      
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="fechaIncorporacionTitular">Fecha Incorporación</Label>
                    <Input 
                      id="fechaIncorporacionTitular" 
                      name="fechaIncorporacionTitular" 
                      type="date"
                      
                    />
                  </div>
                  <div>
                    <Label htmlFor="inicioVigenciaTitular">Inicio Vigencia</Label>
                    <Input 
                      id="inicioVigenciaTitular" 
                      name="inicioVigenciaTitular" 
                      type="date"
                      
                    />
                  </div>
                  <div>
                    <Label htmlFor="tipoAseguradoTitular">Tipo Asegurado</Label>
                    <Input 
                      id="tipoAseguradoTitular" 
                      name="tipoAseguradoTitular"
                      
                    />
                  </div>
                  <div>
                    <Label htmlFor="terminoVigenciaTitular">Término Vigencia</Label>
                    <Input 
                      id="terminoVigenciaTitular" 
                      name="terminoVigenciaTitular" 
                      type="date"
                      
                    />
                  </div>
                </div>
              </div>
            </section>
            <Separator className="my-4" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="rutBeneficiario">Rut Beneficiario</Label>
                  <div className="flex gap-2">
                    <Input id="rutBeneficiario" name="rutBeneficiario" className="flex-1" />
                    <Input name="dvBeneficiario" className="w-16" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="nombreBeneficiario">Nombre</Label>
                  <Input id="nombreBeneficiario" name="nombreBeneficiario" />
                </div>
                <div>
                  <Label htmlFor="formaPago">Forma de Pago</Label>
                  <Select name="formaPago">
                    <SelectTrigger>
                      <SelectValue placeholder="VALE VISTA" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="vale-vista">VALE VISTA</SelectItem>
                      <SelectItem value="transferencia">TRANSFERENCIA</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="fechaNacimiento">Fecha Nacimiento</Label>
                  <Input type="date" id="fechaNacimiento" name="fechaNacimiento" />
                </div>
                <div>
                  <Label htmlFor="inicioVigenciaBeneficiario">Inicio Vigencia</Label>
                  <Input type="date" id="inicioVigenciaBeneficiario" name="inicioVigenciaBeneficiario" />
                </div>
                <div>
                  <Label htmlFor="telefono">Teléfono</Label>
                  <Input id="telefono" name="telefono" />
                </div>
                <div>
                  <Label htmlFor="centroCosto">Centro de Costo</Label>
                  <Input id="centroCosto" name="centroCosto" />
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="apellidoPaterno">Apellido Paterno</Label>
                  <Input id="apellidoPaterno" name="apellidoPaterno" />
                </div>
                <div>
                  <Label htmlFor="banco">Banco</Label>
                  <Select name="banco">
                    <SelectTrigger>
                      <SelectValue placeholder="BANCO DE CHILE" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="chile">BANCO DE CHILE</SelectItem>
                      <SelectItem value="estado">BANCO ESTADO</SelectItem>
                      <SelectItem value="santander">BANCO SANTANDER</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="sexo">Sexo</Label>
                  <Select name="sexo">
                    <SelectTrigger>
                      <SelectValue placeholder="Seleccionar" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="m">Masculino</SelectItem>
                      <SelectItem value="f">Femenino</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="terminoVigenciaBeneficiario">Término Vigencia</Label>
                  <Input type="date" id="terminoVigenciaBeneficiario" name="terminoVigenciaBeneficiario" />
                </div>
                <div>
                  <Label htmlFor="celular">Celular</Label>
                  <Input id="celular" name="celular" />
                </div>
                <div>
                  <Label htmlFor="grupoBeneficiario">Grupo</Label>
                  <Select name="grupoBeneficiario">
                    <SelectTrigger>
                      <SelectValue placeholder="Seleccionar" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="grupo1">Grupo 1</SelectItem>
                      <SelectItem value="grupo2">Grupo 2</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="apellidoMaterno">Apellido Materno</Label>
                  <Input id="apellidoMaterno" name="apellidoMaterno" />
                </div>
                <div>
                  <Label htmlFor="numeroCuenta">N° de Cuenta</Label>
                  <Input id="numeroCuenta" name="numeroCuenta" />
                </div>
                <div>
                  <Label htmlFor="relacion">Relación</Label>
                  <Select name="relacion">
                    <SelectTrigger>
                      <SelectValue placeholder="CÓNYUGE" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="conyuge">CÓNYUGE</SelectItem>
                      <SelectItem value="hijo">HIJO/A</SelectItem>
                      <SelectItem value="otro">OTRO</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="fechaIncorporacionBeneficiario">Fecha Incorporación</Label>
                  <Input type="date" id="fechaIncorporacionBeneficiario" name="fechaIncorporacionBeneficiario" />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" />
                </div>
                <div>
                  <Label htmlFor="tipoAseguradoBeneficiario">Tipo Asegurado</Label>
                  <Select name="tipoAseguradoBeneficiario">
                    <SelectTrigger>
                      <SelectValue placeholder="CRÍTICO" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="critico">CRÍTICO</SelectItem>
                      <SelectItem value="normal">NORMAL</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
            <div className="flex justify-center gap-4 pt-4">
              <Button type="submit">Guardar</Button>
              <Button type="reset" variant="outline">Limpiar</Button>
              <Button type="button" variant="secondary">Cerrar</Button>
            </div>
          </form>
        )}
        </CardContent>
      </Card>
    </div>
  )
}