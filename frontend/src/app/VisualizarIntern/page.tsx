'use client'
import React from "react";
import {Navbar, NavbarBrand,  Image, Card, CardBody } from "@nextui-org/react";
import { useRouter } from "next/navigation";

export default function EstatisticaInternacao() {
    
    const router = useRouter();

    return (

    /* Tela principal + imagem de fundo */
    <div className="relative flex min-h-screen items-center justify-center bg-[#FFFFFF] ">
    
    {/* Div para imagem de fundo que toma toda a tela e é fixa */}
        <div className="absolute inset-0 z-0 bg-fixed bg-cover bg-center"
            style={{ backgroundImage: "url('/imagens/Background.png')" }}>
        </div>
        {/* Navbar fixa no topo */}
        <Navbar  className="fixed top-0 left-0 w-full z-10" style={{ backgroundColor: '#29814C' }}>
            <NavbarBrand>
            <div className="flex items-center gap-4 ml-6">
                <Image 
                    alt="Logo" 
                    src="/imagens/imageavatar.svg"  
                    width={40}  
                    height={40} 
                />
                <div className="font-medium dark:text-white">
                </div>
                </div>
            </NavbarBrand>
            <NavbarBrand className="chidden sm:flex gap-4" justify-center>
                <Image 
                    alt="Logo" 
                    src="/imagens/Logo Healthboard (1).png"  
                    width={200}  
                    height={140} 
                />
            </NavbarBrand>
            <NavbarBrand className="ml-auto mr-4"> 
                <button type="button" className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 
                font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-green-600 dark:hover:bg-green-700 
                dark:focus:ring-green-800"
                onClick={() =>router.push("/Home")}>
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
                <span className="sr-only">Icon description</span>
                </button>
            </NavbarBrand>
        </Navbar>
                
          {/* Card centralizado */}
          <div className="relative z-10 flex flex-col flex-grow items-center justify-center px-4">
          <Card className="w-full max-w-6xl p-8 shadow-lg bg-[#29814C]/80 rounded-lg">
            <h1 className="font-serif:poppins text-center text-2xl font-semibold mb-4 text-white">
          UNIDADE DE INTERNAÇÃO
            </h1>
            <p className="text-center text-white mb-6">Quantidade de Pacientes (Entradas e Saídas)</p>

            {/* Card Body */}
            <CardBody className="flex flex-col justify-center items-center p-8 w-full bg-white rounded-lg">
              {/* Conteúdo do Card Body */}
            </CardBody>
          </Card>
        </div>
      </div>
  );
}