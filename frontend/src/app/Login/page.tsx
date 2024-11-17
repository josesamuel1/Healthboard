'use client';
import React, { useEffect, useState } from "react";
import { Image, Card, Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";

// Interface para a resposta da API de login
interface LoginResponse {
  access: string;
  detail?: string;
  enfermeiro_id: number; 
}

const Login: React.FC = () => {
  const router = useRouter();
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [userNameDisplay, setUserNameDisplay] = useState<string>('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    const storedUsername = localStorage.getItem('username');

    // Se já houver um token e o nome de usuário não estiver definido
    if (token && !userNameDisplay) {
      setUserNameDisplay(storedUsername || '');
      
       router.push("/Home");
    }
  }, [router, userNameDisplay]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // URL da API para fazer login
    const API_URL = 'http://localhost:8000/api/token/';

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data: LoginResponse = await response.json();

      if (response.ok) {
        // Salva o token JWT, nome do usuário e ID do enfermeiro no localStorage
        localStorage.setItem('token', data.access);
        localStorage.setItem('username', username);
        localStorage.setItem('enfermeiro_id', String(data.enfermeiro_id)); // Salva o ID do enfermeiro
        setUserNameDisplay(username); // Atualiza o estado para exibir o nome do usuário
        router.push('/Home'); // Redireciona para a página de home
      } else {
        // Exibe uma mensagem de erro
        setError(data.detail || 'Erro ao fazer login');
      }
    } catch (error) {
      console.error('Erro ao fazer login', error);
      setError('Erro ao se conectar ao servidor');
    }
  };

  const handleLogout = () => {
    // Remove o token e o nome do usuário do localStorage
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    localStorage.removeItem('enfermeiro_id'); // Remove o ID do enfermeiro
    setUserNameDisplay(''); // Limpa o estado do nome do usuário
    router.push('/page'); // Redireciona para a página de login
  };

  return (
    <div className="relative flex flex-col min-h-screen items-center justify-center bg-[#FFFFFF]">
      {/* Imagem de fundo */}
      <div className="absolute inset-0 z-0 bg-fixed bg-cover bg-center" style={{ backgroundImage: "url('/imagens/Background.png')" }}></div>

      {/* Card de Login */}
      <div className="relative z-10 flex-grow flex items-center justify-center">
        <Card className="w-full max-w-6xl p-16 shadow-lg bg-[#29814C]/80 rounded-lg">
          <div className="flex justify-center items-center h-full">
            {/* Formulário */}
            <div className="w-full p-4">
              {userNameDisplay ? (
                <div className="text-white text-xl mb-4">
                  Olá, {userNameDisplay}! 
                  <Button onClick={handleLogout} className="ml-4 bg-red-500 hover:bg-red-700 text-white rounded-md px-3 py-1">Deslogar</Button>
                </div>
              ) : (
                <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
                  <div className="mb-6">
                    <Image
                      alt="Logo"
                      src="/imagens/Logo Healthboard (1).png"
                      width={200}
                      height={140}
                    />
                  </div>

                  {/* Mensagem de boas-vindas */}
                  <h2 className="text-center text-white text-xl font-bold mb-4">
                    Simplificando o desenvolvimento tecnológico na saúde.
                  </h2>

                  <div className="w-full max-w-sm min-w-[200px] mb-6">
                    <label htmlFor="username">Username</label>
                    <input
                      type="text"
                      id="username"
                      name="username"
                      className="w-full pl-3 pr-3 py-2 bg-white placeholder:text-gray-400 text-gray-600 text-sm border border-gray-200 rounded-md transition duration-300 ease focus:outline-none focus:border-teal-500 hover:border-teal-300 shadow-sm focus:shadow placeholder:text-xs"
                      placeholder="Usuário"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      required
                    />
                  </div>

                  <div className="w-full max-w-sm min-w-[200px] mb-6">
                    <label htmlFor="password">Senha</label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      className="w-full pl-3 pr-3 py-2 bg-gray placeholder:text-gray-400 text-gray-600 text-sm border border-gray-200 rounded-md transition duration-300 ease focus:outline-none focus:border-teal-500 hover:border-teal-300 shadow-sm focus:shadow placeholder:text-xs"
                      placeholder="********"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>

                  {/* Exibindo erro, se houver */}
                  {error && (
                    <div className="text-red-500 text-sm mb-4">
                      <p>{error}</p>
                    </div>
                  )}

                  <div className="w-full max-w-4xl mt-10">
                    <Button
                      type="submit"
                      className="w-full bg-white text-green-800 p-3 rounded-md hover:bg-green-700 hover:text-white transition duration-200"
                    >
                      Entrar
                    </Button>
                  </div>
                </form>
              )}
            </div>

            {/* Imagem à direita */}
            <div className="w-1/2 flex justify-end">
              <Image
                alt="imagem rx"
                src="/imagens/Medical prescription-amico.svg"
                width={700}
              />
            </div>
          </div>
        </Card>
      </div>

      {/* Rodapé */}
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

export default Login;
