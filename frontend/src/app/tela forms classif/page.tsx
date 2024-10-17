'use client'
import React from "react";
import {Navbar, NavbarBrand, Image, Card, Button} from "@nextui-org/react";
import {today, getLocalTimeZone} from "@internationalized/date";

export default function TelaFormsClassificacao() {
  let defaultDate = today(getLocalTimeZone());
  let [focusedDate, setFocusedDate] = React.useState(defaultDate);
  
  return (
    <div className="relative flex min-h-screen items-center justify-center bg-[#FFFFFF]">
    
      {/* Imagem de fundo */}
      <div className="absolute inset-0 z-0 bg-fixed bg-cover bg-center"
        style={{ backgroundImage: "url('/imagens/Background.png')" }}>
      </div>
      
      {/* Navbar fixa */}
      <Navbar className="fixed top-0 left-0 w-full z-10" style={{ backgroundColor: '#154B19' }}>
        <NavbarBrand>
          <div className="flex items-center gap-4">
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
          <Image alt="Botão Desconecta" src="/imagens/Botão Desconectar.svg" width={100} height={40} />
        </NavbarBrand>
      </Navbar>

      {/* Card principal */}
      <div className="relative z-10 w-full max-w-6xl p-16 mt-20"> {/* Adicionei mt-20 aqui para espaçamento */}
        <Card className="w-full shadow-lg bg-[#29814C]/80 rounded-lg p-10">
          
          {/* Layout de conteúdo */}
          <div className="flex items-center justify-between w-full">
            
            {/* Imagem à esquerda */}
            <div className="w-1/2 flex flex-col justify-start">
              <h3 className="text-3xl font-bold text-white mb-6">
                Adicionar novo formulário em Classificação de Risco
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
            Quantidade de Pacientes
            classificados com o risco:
              </h3>
              {/* Primeira linha com três inputs (Vermelho, Laranja, Amarelo) */}
              <div className="flex w-full space-x-4">
                <div className="w-1/3">
                  <label htmlFor="risco-vermelho" className="text-white mb-2 block">Risco Vermelho</label>
                  <input 
                    type="number"
                    id="risco-vermelho"
                    className="w-full h-12 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-green-800 bg-white/80"
                    placeholder="0000"
                  />
                </div>

                <div className="w-1/3">
                  <label htmlFor="risco-laranja" className="text-white mb-2 block">Risco Laranja</label>
                  <input 
                    type="number"
                    id="risco-laranja"
                    className="w-full h-12 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-green-800 bg-white/80"
                    placeholder="0000"
                  />
                </div>

                <div className="w-1/3">
                  <label htmlFor="risco-amarelo" className="text-white mb-2 block">Risco Amarelo</label>
                  <input 
                    type="number"
                    id="risco-amarelo"
                    className="w-full h-12 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-green-800 bg-white/80"
                    placeholder="0000"
                  />
                </div>
              </div>

              {/* Segunda linha com dois inputs (Verde, Azul) */}
              <div className="flex w-full space-x-4">
                <div className="w-1/2">
                  <label htmlFor="risco-verde" className="text-white mb-2 block">Risco Verde</label>
                  <input 
                    type="number"
                    id="risco-verde"
                    className="w-full h-12 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-green-800 bg-white/80"
                    placeholder="0000"
                  />
                </div>

                <div className="w-1/2">
                  <label htmlFor="risco-azul" className="text-white mb-2 block">Risco Azul</label>
                  <input 
                    type="number"
                    id="risco-azul"
                    className="w-full h-12 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-green-800 bg-white/80"
                    placeholder="0000"
                  />
                </div>
              </div>

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