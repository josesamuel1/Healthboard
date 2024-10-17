'use client'
import React from "react";
import {Navbar, NavbarBrand,  Image, Card, Button, DatePicker} from "@nextui-org/react";
import {today, getLocalTimeZone} from "@internationalized/date";



export default function TelaFormsCirurgica() {

  let defaultDate = today(getLocalTimeZone());
  let [focusedDate, setFocusedDate] = React.useState(defaultDate);
  
    return (

    /* Tela principal + imagem de fundo */
    <div className="relative flex min-h-screen items-center justify-center bg-[#FFFFFF]">
    
      {/* Div para imagem de fundo que toma toda a tela e é fixa */}
      <div className="absolute inset-0 z-0 bg-fixed bg-cover bg-center"
        style={{ backgroundImage: "url('/imagens/Background.png')" }}>
      </div>
      
      {/* Navbar fixa no topo */}
      <Navbar className="fixed top-0 left-0 w-full z-10" style={{ backgroundColor: '#154B19' }}>
        <NavbarBrand>
          <div className="flex items-center gap-4 ">
            <Image 
              alt="Logo" 
              src="/imagens/imageavatar.svg"  
              width={40}  
              height={40} 
            />
            <div className="font-medium dark:text-white">
              <div>JANY</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Joined in October 2024</div>
            </div>
          </div>
        </NavbarBrand>
        <NavbarBrand className="hidden sm:flex gap-4 justify-center">
          <Image 
            alt="Logo" 
            src="/imagens/Logo Healthboard (1).png"  
            width={200}  
            height={140} 
          />
        </NavbarBrand>
        <NavbarBrand>
          <Image 
            alt="Botão Desconecta" 
            src="/imagens/Botão Desconectar.svg"  
            width={100}  
            height={40} 
          />
        </NavbarBrand>
      </Navbar>

      {/* Card */}
      <div className="relative z-10 w-full max-w-6xl p-16">
        <Card className="w-full shadow-lg bg-[#29814C]/80 rounded-lg p-10">
          
          {/* Layout com Flexbox */}
          <div className="flex items-center justify-between w-full">
            
            {/* Imagem à esquerda */}
            <div className="w-1/2 flex flex-col justify-start">
              <h3 className="font-serif:poppins flex items-start mt-2 text-justify-center text-2xl text-white-400">
              Adicionar novo formulário em Clínica Cirúrgica
              </h3>
              <Image
                alt="imagem forms"
                src="/imagens/imgaddforms.svg"
                width={800}
                height={300}
              />
            </div>

            {/* Formulário à direita */}

            <div className="py-2 px-3 bg-white border border-gray-200 rounded-lg dark:bg-neutral-900 dark:border-neutral-700" 
            data-hs-input-number="">
              <div className="w-full flex justify-between items-center gap-x-3">
                <input className="w-full p-0 bg-transparent border-0 text-gray-800 focus:ring-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none dark:text-white"
                style={{
                  appearance: "textfield", // Compatível com a maioria dos navegadores
                  MozAppearance: "textfield", // Compatível com Firefox
                }}
                type="number" aria-roledescription="Number field" value="10" data-hs-input-number-input="" disabled={true}/>
                <div className="flex justify-end items-center gap-x-1.5">
                  <button type="button" className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-full border 
                  border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 
                  disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 
                  dark:focus:bg-neutral-800" tabIndex={-1} aria-label="Decrease" data-hs-input-number-decrement="">
                    <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M5 12h14"></path>
                    </svg>
                  </button>
                  <button type="button" className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-full border
                  border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 
                  disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800
                    dark:focus:bg-neutral-800" tabIndex={-1} aria-label="Increase" data-hs-input-number-increment="">
                    <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" 
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M5 12h14"></path>
                      <path d="M12 5v14"></path>
                    </svg>
                  </button>
                </div>
              
              </div>
            </div>

            <div className="w-1/2 flex flex-col items-start">
              <div className="mb-8 w-full">
              <label htmlFor="data-nascimento">Data deste formulário</label>
                <input
                  type="date"
                  id="data-nascimento"
                  className="w-full bg-white text-green-800 rounded-md p-3 shadow-sm border border-gray-300"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-white text-green-800 p-3 rounded-md hover:bg-green-700 hover:text-white transition duration-200">
                Salvar Dados
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}