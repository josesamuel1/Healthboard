'use client'
import React from "react";
import {Navbar, NavbarBrand, Image, Card, Textarea, Button} from "@nextui-org/react";
import {today, getLocalTimeZone} from "@internationalized/date";
import { useRouter } from "next/navigation";

export default function TelaFormsBlco() {

  let defaultDate = today(getLocalTimeZone());
  let [focusedDate, setFocusedDate] = React.useState(defaultDate);
      
  const router = useRouter();

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-[#FFFFFF]">
    
      {/* Imagem de fundo */}
      <div className="absolute inset-0 z-0 bg-fixed bg-cover bg-center"
        style={{ backgroundImage: "url('/imagens/Background.png')" }}>
      </div>
      
      {/* Navbar fixa */}
      <Navbar className="fixed top-0 left-0 w-full z-10" style={{ backgroundColor: '#29814C' }}>
        <NavbarBrand>
          <div className="flex items-center gap-4 ml-6">
            <Image alt="Logo" src="/imagens/imageavatar.svg" width={40} height={40} />
            <div className="font-medium text-white">
              <div>JANY</div>
              <div className="text-sm text-gray-400">Joined in October 2024</div>
            </div>
          </div>
        </NavbarBrand>
        <NavbarBrand className="hidden sm:flex gap-4 justify-center">
          <Image alt="Logo" src="/imagens/Logo Healthboard (1).png" width={200} height={140} />
          </NavbarBrand>
            <NavbarBrand>
               <div className="ml-auto mr-4"> {/* Usei `ml-auto` para empurrar o botão para a borda direita */}
                    <button type="button" className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 
                    font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center dark:bg-green-600 dark:hover:bg-green-700 
                    dark:focus:ring-green-800"
                    onClick={() =>router.push("/Bloco")}>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                    <span className="sr-only">Icon description</span>
                    </button>
                </div>
            </NavbarBrand>
        </Navbar>

      {/* Card principal */}
      <div className="relative z-10 w-full max-w-6xl p-16 mt-28"> {/* Adicionei mt-20 aqui para espaçamento */}
        <Card className="w-full shadow-lg bg-[#29814C]/80 rounded-lg p-10">
          
          {/* Layout de conteúdo */}
          <div className="flex items-center justify-between w-full">
            
            {/* Imagem à esquerda */}
            <div className="w-1/2 flex flex-col justify-start">
              <h3 className="text-3xl font-bold text-white mb-6">
                Adicionar novo formulário em Bloco Cirúrgico
              </h3>
              <Image
                alt="imagem forms"
                src="/imagens/imgaddforms.svg"
                width={800}
                height={300}
              />
            </div>

            {/* Formulário à direita */}
            <div className="w-1/2 flex flex-col items-start space-y-8">
            <h3 className="text-lg font-bold text-white mb-2">
            Quantidade de Cirurgias:
              </h3>
              {/* Primeira linha com três inputs (eletivas, suspensas, urgencias) */}
              <div className="flex w-full space-x-4">
                <div className="w-1/3">
                  <label htmlFor="cirurgias-eletivas" className="text-white mb-2 block">Eletivas</label>
                  <input 
                    type="number"
                    id="cirurgias-eletivas"
                    className="w-full h-12 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-green-800 bg-white/80"
                    placeholder="0000"
                  />
                </div>

                <div className="w-1/3">
                  <label htmlFor="cirurgias-suspensas" className="text-white mb-2 block">Suspensas</label>
                  <input 
                    type="number"
                    id="cirurgias-suspensas"
                    className="w-full h-12 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-green-800 bg-white/80"
                    placeholder="0000"
                  />
                </div>

                <div className="w-1/3">
                  <label htmlFor="cirurgias-Urgencia" className="text-white mb-2 block">Urgências</label>
                  <input 
                    type="number"
                    id="cirurgias-urgencia"
                    className="w-full h-12 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-green-800 bg-white/80"
                    placeholder="0000"
                  />
                </div>
              </div>

              <Textarea
                variant="faded"
                label="Obervação"
                placeholder="Ex.: ....."
                description="Enter a concise description of your project."
                className="max-w-xs bg-white/80 text-green-800"
              />


            {/* Input de Data e Botão (sem alterações) */}
              <div className="w-full">
                <label htmlFor="data-nascimento" className="text-white mb-2 block">Data deste formulário</label>
                <input
                  type="date"
                  id="data-nascimento"
                  className="w-full h-12 bg-white/80 text-green-800 rounded-md p-3 shadow-sm border border-gray-300"
                />
              </div>

              <Button
                type="submit"
                className="w-full h-12 bg-white text-green-800 p-3 rounded-md hover:bg-green-700 hover:text-white transition duration-200">
                Salvar Dados
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}