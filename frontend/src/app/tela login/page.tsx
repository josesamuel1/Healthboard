import React from "react";
import { Image, Card, Input, Button } from "@nextui-org/react";

export default function Login() {

  return (
    /* Tela principal + imagem de fundo */
    <div className="relative flex flex-col min-h-screen items-center justify-center bg-[#FFFFFF] ">
      {/* Div para imagem de fundo que toma toda a tela e é fixa */}
      <div className="absolute inset-0 z-0 bg-fixed bg-cover bg-center"
        style={{ backgroundImage: "url('/imagens/Background.png')" }}>
      </div>
      
      {/* Card de Login */}
      <div className="relative z-10 flex-grow flex items-center justify-center">
        <Card className="w-full max-w-6xl p-16 shadow-lg bg-[#29814C]/80 rounded-lg">
          <div className="flex justify-center items-center h-full">
            {/*Formulário */}
            <div className="flex items-center justify-between w-full">
              <div className="w-full p-4">
                <form className="max-w-sm mx-auto">
                   {/* Imagem da Logo */}
                  <div className="mb-6">
                    <Image 
                      alt="Logo" 
                      src="/imagens/Logo Healthboard (1).png"  // Caminho da imagem da logo
                      width={200}  // Define a largura da logo
                      height={140} // Define a altura da logo
                    />
                  </div>
                  <div className="w-full max-w-sm min-w-[200px]">
                  <label htmlFor="password">Email</label>
                    <div className="relative">
                      <input 
                      type="email" 
                      id="email" 
                      name="email"
                      className="w-full pl-3 pr-3 py-2 bg-white placeholder:text-green-400 text-green-600 text-sm border border-green-200 rounded-md 
                      transition duration-300 ease focus:outline-none focus:border-teal-500 hover:border-teal-300 shadow-sm focus:shadow"
                      placeholder="usuario@gmail.com" required /> 
                    </div>

                  <div className="w-full max-w-sm min-w-[200px]">
                  <label htmlFor="password">Senha</label>
                    <div className="relative">
                      <input type="password" 
                      id="password" 
                      name="password"
                      className="w-full pl-3 pr-3 py-2 bg-white placeholder:text-green-400 text-green-600 text-sm border border-green-200 rounded-md 
                      transition duration-300 ease focus:outline-none focus:border-teal-500 hover:border-teal-300 shadow-sm focus:shadow"
                      placeholder="Password" />
                      <p className="flex items-start mt-2 text-xs text-white-400">
                      Use at least 8 characters, one uppercase, one lowercase and one number.
                      </p> 
                    </div>
                  </div>
                  <div className="w-full max-w-4xl">
                    <Button 
                    type="submit" 
                    className="w-full bg-white text-green-800 p-3 rounded-md hover:bg-[#a6d0a5]  hover:text-white transition duration-200">
                    Entrar
                    </Button>
                  <div className="mb-4">
                    <p>
                      <a href="#" className="text-xs text-white">Esqueceu a senha?</a>
                    </p>
                  </div>
                  </div>
                </div>
                </form>
              </div>
              
              {/* Imagem de prescrição à direita */}
              <div className="w-1/2 flex justify-end">
                <Image  
                  alt="imagem rx"
                  src="/imagens/Medical prescription-amico.svg"
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






import React from "react";
import { Image, Card, Input, Button } from "@nextui-org/react";

export default function Login() {

  return (
    /* Tela principal + imagem de fundo */
    <div className="relative flex flex-col min-h-screen items-center justify-center bg-[#FFFFFF] ">
      {/* Div para imagem de fundo que toma toda a tela e é fixa */}
      <div className="absolute inset-0 z-0 bg-fixed bg-cover bg-center"
        style={{ backgroundImage: "url('/imagens/Background.png')" }}>
      </div>
      
      {/* Card de Login */}
      <div className="relative z-10 flex-grow flex items-center justify-center">
        <Card className="w-full max-w-6xl p-16 shadow-lg bg-gradient-to-r from-[#3278c3] via-[#3c8316] rounded-lg">
          <div className="flex justify-center items-center h-full">
            {/*Formulário */}
            <div className="flex items-center justify-between w-full">
              <div className="w-full p-4">
                <form className="max-w-sm mx-auto">
                   {/* Imagem da Logo */}
                  <div className="mb-6">
                    <Image 
                      alt="Logo" 
                      src="/imagens/Logo Healthboard (1).png"  // Caminho da imagem da logo
                      width={200}  // Define a largura da logo
                      height={140} // Define a altura da logo
                    />
                  </div>
                  <div className="w-full max-w-sm min-w-[200px] mb-6">
                  <label htmlFor="matricula">Matrícula</label>
                    <div className="relative">
                      <input 
                      type="text" 
                      id="matricula" 
                      name="matricula"
                      className="w-full pl-3 pr-3 py-2 bg-white placeholder:text-gray-400 text-gray-600 text-sm border border-gray-200 rounded-md 
                      transition duration-300 ease focus:outline-none focus:border-teal-500 hover:border-teal-300 shadow-sm focus:shadow placeholder:text-xs"
                      placeholder="000.000-00" required /> 
                    </div>

                  <div className="w-full max-w-sm min-w-[200px] mb-6">
                  <label htmlFor="password">Senha</label>
                    <div className="relative">
                      <input type="password" 
                      id="password" 
                      name="password"
                      className="w-full pl-3 pr-3 py-2 bg-gray placeholder:text-gray-400 text-gray-600 text-sm border border-gray-200 rounded-md 
                      transition duration-300 ease focus:outline-none focus:border-teal-500 hover:border-teal-300 shadow-sm focus:shadow placeholder:text-xs"
                      placeholder="********" />
                      <p className="flex items-start mt-2 text-xs text-white-400">
                      Use at least 8 characters, one uppercase, one lowercase and one number.
                      </p> 
                    </div>
                  </div>
                  <div className="w-full max-w-4xl">
                    <Button 
                    type="submit" 
                    className="w-full bg-[#E8B86D] text-white p-3 rounded-md hover:bg-[#72bf78]  hover:text-gray-800 transition duration-200">
                    Entrar
                    </Button>
                  <div className="mb-4">
                    <p>
                      <a href="#" className="text-xs text-white">Esqueceu a senha?</a>
                    </p>
                  </div>
                  </div>
                </div>
                </form>
              </div>
              
              {/* Imagem de prescrição à direita */}
              <div className="w-1/2 flex justify-end">
                <Image  
                  alt="imagem rx"
                  src="/imagens/Medical prescription-amico.svg"
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