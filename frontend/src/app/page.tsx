/** import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">src/app/page.tsx</code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Docs{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Learn{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Templates{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Explore starter templates for Next.js.
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Deploy{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-balance text-sm opacity-50">
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main>
  );
}<a href="https://storyset.com/medical">Medical illustrations by Storyset</a>
<a href="https://storyset.com/medical">Medical illustrations by Storyset</a>
*/


/* From Uiverse.io by Smit-Prajapati */ 

'use client'
import React from "react";
import {Navbar, NavbarBrand, Image, Card, Button} from "@nextui-org/react";
import {today, getLocalTimeZone} from "@internationalized/date";

export default function TelaFormsCirurgica() {

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
               <div className="ml-auto mr-4"> {/* Usei `ml-auto` para empurrar o botão para a borda direita */}
                    <button type="button" className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 
                    font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center dark:bg-green-600 dark:hover:bg-green-700 
                    dark:focus:ring-green-800">
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                    <span className="sr-only">Icon description</span>
                    </button>
                </div>
            </NavbarBrand>
        </Navbar>

      {/* Card principal */}
      <div className="relative z-10 w-full max-w-6xl p-16 mt-20"> {/* Adicionei mt-20 aqui para espaçamento */}
        <Card className="w-full shadow-lg bg-[#29814C]/80 rounded-lg p-10">
          
          {/* Layout de conteúdo */}
          <div className="flex items-center justify-between w-full">
            
            {/* Imagem à esquerda */}
            <div className="w-1/2 flex flex-col justify-start">
              <h3 className="text-3xl font-bold text-white mb-6 text-center whitespace-pre-line">
                Adicionar novo formulário 
                em Clínica Cirúrgica
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
              <h3 className="text-lg font-bold text-white mb-1">
              Leitos:
              </h3>
              {/* Primeira linha com três inputs (fixos, Bloqueados, extras) */}
              <div className="flex w-full space-x-4">
                <div className="w-1/3">
                  <label htmlFor="Fixos" className="text-white text-xs mb-2 block">Fixos</label>
                  <input 
                    type="number"
                    id="Fixos"
                    className="w-full h-12 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 
                    focus:ring-green-500 focus:border-transparent text-green-800 bg-white/80"
                    placeholder="0000"
                  />
                </div>

                <div className="w-1/3">
                  <label htmlFor="Bloqueados" className="text-white text-xs mb-2 block">Bloqueados</label>
                  <input 
                    type="number"
                    id="Bloqueados"
                    className="w-full h-12 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 
                    focus:ring-green-500 focus:border-transparent text-green-800 bg-white/80"
                    placeholder="0000"
                  />
                </div>

                <div className="w-1/3">
                  <label htmlFor="extas" className="text-white text-xs mb-2 block">Extras</label>
                  <input 
                    type="number"
                    id="extras"
                    className="w-full h-12 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 
                    focus:ring-green-500 focus:border-transparent text-green-800 bg-white/80"
                    placeholder="0000"
                  />
                </div>
              </div>

              {/* Segunda linha com dois inputs (entradas, saidas) */}
        
                <h3 className="text-lg font-bold text-white">
                Entradas:
                </h3>
                <div className="flex w-full space-x-4"> 
                  <div className="w-1/3">
                    <label htmlFor="Pelo Censo da meia noite" className="text-white text-xs mb-2 block">Pelo Censo da meia noite</label>
                    <input 
                      type="number"
                      id="Pelo Censo da meia noite"
                      className="w-full h-12 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2
                      focus:ring-green-500 focus:border-transparent text-green-800 bg-white/80"
                      placeholder="0000"
                    />
                  </div>
                  
                <div className="w-1/3">
                  <label htmlFor="Novas" className="text-white text-xs mb-2 block">Novas</label>
                  <input 
                    type="number"
                    id="Novas"
                    className="w-full h-12 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2
                    focus:ring-green-500 focus:border-transparent text-green-800 bg-white/80"
                    placeholder="0000"
                  />
                </div>

                <div className="w-1/3">
                  <label htmlFor="Transf. Interna" className="text-white text-xs mb-2 block">Transf. Interna</label>
                  <input 
                    type="number"
                    id="Transf. Interna"
                    className="w-full h-12 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 
                    focus:ring-green-500 focus:border-transparent text-green-800 bg-white/80"
                    placeholder="0000"
                  />
                </div>
              </div>


              {/* terceira linha com dois inputs (entradas, saidas) */}

                <h3 className="text-lg font-bold text-white mb-1">
                Saídas:
                </h3>
                <div className="flex w-full space-x-4">
                  <div className="w-1/3">
                    <label htmlFor="Pelo Censo da meia noite" className="text-white text-xs mb-2 block">Altas</label>
                    <input 
                      type="number"
                      id="Pelo Censo da meia noite"
                      className="w-full h-12 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2
                      focus:ring-green-500 focus:border-transparent text-green-800 bg-white/80"
                      placeholder="0000"
                    />
                  </div>

                <div className="w-1/3">
                  <label htmlFor="Novas" className="text-white text-xs mb-2 block">Transf. Interna</label>
                  <input 
                    type="number"
                    id="Novas"
                    className="w-full h-12 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 
                    focus:ring-green-500 focus:border-transparent text-green-800 bg-white/80"
                    placeholder="0000"
                  />
                </div>

                <div className="w-1/3">
                  <label htmlFor="Transf. Interna" className="text-white text-xs mb-2 block">Transf. Externa</label>
                  <input 
                    type="number"
                    id="Transf. Interna"
                    className="w-full h-12 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2
                    focus:ring-green-500 focus:border-transparent text-green-800 bg-white/80"
                    placeholder="0000"
                  />
                </div>
              </div>
              
              {/* quarta linha com dois inputs (entradas, saidas) */}
            
              <div className="flex w-full space-x-4">
                <div className="w-1/3">
                  <label htmlFor="obitos-mais-24h" className="text-white text-xs mb-2 block">Óbitos MAIS de 24h</label>
                  <input 
                    type="number"
                    id="obitos-mais-24h"
                    className="w-full h-12 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 
                    focus:ring-green-500 focus:border-transparent text-green-800 bg-white/80"
                    placeholder="0000"
                  />
                </div>

                <div className="w-1/3">
                  <label htmlFor="obitos-menos-24h" className="text-white text-xs mb-2 block">Óbitos MENOS de 24h</label>
                  <input 
                    type="number"
                    id="obitos-menos-24h"
                    className="w-full h-12 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 
                    focus:ring-green-500 focus:border-transparent text-green-800 bg-white/80"
                    placeholder="0000"
                  />
                </div>

                <div className="w-1/3">
                  <label htmlFor="desistencias" className="text-white text-xs mb-2 block">Desistêncicas</label>
                  <input 
                    type="number"
                    id="desistencias"
                    className="w-full h-12 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 
                    focus:ring-green-500 focus:border-transparent text-green-800 bg-white/80"
                    placeholder="0000"
                  />
                </div>
              </div>

              {/* Input de Data e Botão */}
              <div className="w-full mt-4">
                <label htmlFor="data-formulario" className="text-white mb-2 block">Data deste formulário</label>
                <input
                  type="date"
                  id="data-formulario"
                  className="w-full h-12 bg-white/80 text-green-800 rounded-md p-3 shadow-sm border border-gray-300"
                />
              </div>

              <Button
                type="submit"
                className="w-full h-12 bg-white text-green-800 p-3 rounded-md hover:bg-green-700 hover:text-white transition duration-200 mt-2">
                Salvar Dados
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}