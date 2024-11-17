'use client'
import React, { useEffect, useState } from "react";
import { Navbar, NavbarBrand, Image, Card, Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";

export default function TelaHome() {
    const router = useRouter();
    const [username, setUsername] = useState<string | null>(null);

    useEffect(() => {
        const storedUsername = localStorage.getItem('username');
        setUsername(storedUsername);
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('username');
        router.push("/Login");
    };

    return (
        <div className="relative flex min-h-screen items-center justify-center bg-[#FFFFFF] ">

            {/* Div para imagem de fundo */}
            <div className="absolute inset-0 z-0 bg-fixed bg-cover bg-center"
                style={{ backgroundImage: "url('/imagens/Background.png')" }}></div>

            {/* Navbar fixa no topo */}
            <Navbar className="fixed top-0 left-0 w-full z-10" style={{ backgroundColor: '#29814C', paddingTop: '5px' }}>
                <NavbarBrand>
                    <div className="flex items-center gap-4 ml-4">
                        <Image
                            alt="Logo"
                            src="/imagens/imageavatar.svg"
                            width={40}
                            height={40}
                        />
                        <div className="font-medium dark:text-white">
                            <div>{username ? `Bem-vindo, ${username}` : "Visitante"}</div>
                        </div>
                    </div>
                </NavbarBrand>

                {/* Responsividade do logo */}
                <NavbarBrand className="absolute left-1/2 transform -translate-x-1/2 sm:static sm:transform-none flex justify-center">
                    <Image
                        alt="Logo Healthboard"
                        src="/imagens/Logo Healthboard (1).png"
                        width={200}
                        height={140}
                    />
                </NavbarBrand>

                <NavbarBrand className="ml-auto mr-4">
                    {username && (
                        <button type="button" className="text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                            onClick={handleLogout}>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                            <span className="sr-only">Icon description</span>
                        </button>
                    )}
                </NavbarBrand>
            </Navbar>

            {/* Card */}
            <div className="relative z-10 mt-20">
                <Card className="w-full max-w-6xl p-16 shadow-lg bg-[#29814C]/80 rounded-lg">
                    <div className="flex items-center justify-between w-full">

                        {/* Botões à esquerda */}
                        <div className="w-full max-w-lg flex flex-col space-y-4 mb-4">
                            <Button
                                type="submit"
                                className="w-full bg-white text-green-800 p-3 rounded-md hover:bg-green-700 hover:text-white transition duration-200"
                                onClick={() => router.push("/Classificacao")}>
                                Classificação de Risco
                            </Button>

                            <Button
                                type="submit"
                                className="w-full bg-white text-green-800 p-3 rounded-md hover:bg-green-700 hover:text-white transition duration-200"
                                onClick={() => router.push("/Bloco")}>
                                Bloco Cirúrgico
                            </Button>

                            <Button
                                type="submit"
                                className="w-full bg-white text-green-800 p-3 rounded-md hover:bg-green-700 hover:text-white transition duration-200"
                                onClick={() => router.push("/Internacao")}>
                                Unidade de Internação
                            </Button>
                        </div>

                        {/* Imagem das pastas à direita */}
                        <div className="flex justify-end">
                            <Image
                                alt="imagem pastas"
                                src="/imagens/imagempastas.svg"
                                width={800}
                                height={300}
                            />
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    );
}
