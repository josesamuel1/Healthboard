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
import { Image, Card, Input, Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";

export default function Login() {

  const router = useRouter()

  return (
    /* Tela principal + imagem de fundo */
    <div className="relative flex flex-col min-h-screen items-center justify-center bg-[#FFFFFF] ">
      {/* Div para imagem de fundo que toma toda a tela e é fixa */}
      <div className="absolute inset-0 z-0 bg-fixed bg-cover bg-center"
        style={{ backgroundImage: "url('/imagens/Background.png')" }}>
      </div>
           {/* Div para posicionar o botão no canto direito */}
      <div className="absolute top-0 right-0 m-4"></div>
        <Button type="button" className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 
              font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-green-600 dark:hover:bg-green-700 
              dark:focus:ring-green-800"
              onClick={() =>router.push("/Login")}>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
              </svg>
              <span className="sr-only">Icon description</span>
              </Button>
      
      {/* Card de Login */}
      <div className="relative z-10 flex-grow flex items-center justify-center">
        <Card className="w-full max-w-6xl p-16 shadow-lg bg-[#29814C]/80 rounded-lg">
          <div className="flex justify-center items-center h-full">
            {/*Formulário */}
            <div className="flex items-center justify-between w-full">
              <div className="w-full p-4">
                <form className="max-w-sm mx-auto">
                  
                <div className="w-full max-w-lg flex flex-col space-y-4 mb-4">
                <p className="font-serif font-poppins flex justify-center items-center text-2xl text-white">
                   RECUPERAÇÃO DE SENHA
                </p> 
                  </div>
                  <div className="space-y-10"> {/* Adiciona espaçamento entre os inputs */}
                    <div className="w-full max-w-sm min-w-[200px]">
                      <div className="relative">
                        <input 
                        type="text" 
                        id="Username" 
                        name="Username"
                        className="w-full pl-3 pr-3 py-2 bg-white placeholder:text-gray-400 text-gray-600 text-sm border border-gray-200 rounded-md 
                        transition duration-300 ease focus:outline-none focus:border-teal-500 hover:border-teal-300 shadow-sm focus:shadow placeholder:text-xs"
                        placeholder="Usuário" required /> 
                      </div>

                      
                    <div className="w-full max-w-sm min-w-[200px]">
                      <div className="relative">
                        <input type="password" 
                        id="password" 
                        name="password"
                        className="w-full pl-3 pr-3 py-2 bg-gray placeholder:text-gray-400 text-gray-600 text-sm border border-gray-200 rounded-md 
                        transition duration-300 ease focus:outline-none focus:border-teal-500 hover:border-teal-300 shadow-sm focus:shadow placeholder:text-xs"
                        placeholder="Confirmar Nova Senha" />
                      
                      </div>

                    <div className="w-full max-w-sm min-w-[200px]">
                      <div className="relative">
                        <input type="password" 
                        id="password" 
                        name="password"
                        className="w-full pl-3 pr-3 py-2 bg-gray placeholder:text-gray-400 text-gray-600 text-sm border border-gray-200 rounded-md 
                        transition duration-300 ease focus:outline-none focus:border-teal-500 hover:border-teal-300 shadow-sm focus:shadow placeholder:text-xs"
                        placeholder="Nova Senha" />
                      </div>
                      </div>
                    </div>
                    <div className="w-full max-w-4xl mt-10">
                      <Button 
                      type="submit" 
                      className="w-full bg-white text-green-800 p-3 rounded-md  hover:bg-green-700 hover:text-white transition duration-200">
                      Atualizar Senha
                      </Button>
                    </div>
                    </div>
                  </div>
                  </form>
                </div>
              
              {/* Imagem de prescrição à direita */}
              <div className="w-1/2 flex justify-end">
                <Image  
                  alt="imagem esqueceu senha"
                  src="/imagens/esqueceu senha.svg/"
                  width={700}  // Ajuste conforme necessário
                  /*height={200} // Ajuste conforme necessário*/
                />
              </div>
            </div>
          </div>
        </Card>
      </div>

      <footer className="bg-white rounded-lg shadow dark:bg-[##c5edd4]/900 m-4">
          <div className="sm:flex sm:items-center sm:justify-between">
            <a className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
              <Image 
                alt="Logo" 
                src="/imagens/Logo Healthboard (1).png"  
                width={110}  
                height={60} 
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">HealthBoard</span>
            </a>
            <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 
              <a className="hover:underline">HealthBoard</a>. All Rights Reserved.
            </span>
          </div>
        </footer>
    </div>
  
  );
}

