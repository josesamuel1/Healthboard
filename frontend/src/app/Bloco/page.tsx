"use client";
import React, { useEffect, useState } from "react";
import { Navbar, NavbarBrand, Image, Card, Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";


export default function Bloco() {
    const router = useRouter();
    
    // Função para exportar a planilha
    const exportPlanilha = async () => {
        const token = localStorage.getItem('token');
        if (!token) {
            console.error("Token de autenticação não encontrado.");
            return;
        }
        try {
            const response = await fetch('http://127.0.0.1:8000/api/bloco_cirurgico/export/', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            });
            if (response.ok) {
                const blob = await response.blob();
                const url = window.URL.createObjectURL(new Blob([blob]));
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', 'Planilha_Bloco_Cirurgico.xlsx');
                document.body.appendChild(link);
                link.click();
                link.parentNode?.removeChild(link);
            } else {
                console.error("Erro ao exportar a planilha:", response.status, response.statusText);
            }
        } catch (error) {
            console.error("Erro ao realizar o download:", error);
        }
    };

    // Função para exportar o gráfico
    const exportGrafico = async () => {
        const token = localStorage.getItem('token');
        if (!token) {
            console.error("Token de autenticação não encontrado.");
            return;
        }
        try {
            const response = await fetch('http://127.0.0.1:8000/api/bloco_cirurgico/grafico/export/', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            });
            if (response.ok) {
                const blob = await response.blob();
                const url = window.URL.createObjectURL(new Blob([blob]));
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', 'Grafico_Bloco_Cirurgico.png');
                document.body.appendChild(link);
                link.click();
                link.parentNode?.removeChild(link);
            } else {
                console.error("Erro ao exportar o gráfico:", response.status, response.statusText);
            }
        } catch (error) {
            console.error("Erro ao realizar o download do gráfico:", error);
        }
    };

    return (
        <div className="relative flex min-h-screen items-center justify-center bg-[#FFFFFF]">
        
          {/* Imagem de fundo */}
          <div className="absolute inset-0 z-0 bg-fixed bg-cover bg-center"
            style={{ backgroundImage: "url('/imagens/Background.png')" }}>
          </div>
          
          {/* Navbar fixa */}
          <Navbar className="fixed top-0 left-0 w-full z-10" style={{ backgroundColor: '#29814C', paddingTop: '5px' }}>
            <NavbarBrand>
              <div className="flex items-center gap-4">
                <Image alt="Logo" src="/imagens/imageavatar.svg" width={40} height={40} />
                <div className="font-medium text-white">
                </div>
              </div>
            </NavbarBrand>
            <NavbarBrand className="hidden sm:flex gap-4 justify-center">
              <Image alt="Logo" src="/imagens/Logo Healthboard (1).png" width={150} height={100} />
            </NavbarBrand>
            <NavbarBrand>
              <div className="ml-auto mr-4"> {/* Usei `ml-auto` para empurrar o botão para a borda direita */}
                <button type="button" className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 
                font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center dark:bg-green-600 dark:hover:bg-green-700 
                dark:focus:ring-green-800"
                onClick={() =>router.push("/Home")}>
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
                  <span className="sr-only">Icon description</span>
                </button>
              </div>
            </NavbarBrand>
            </Navbar>
            {/* Card */}
            <div className="relative z-10">
                <Card className="w-full max-w-6xl p-16 shadow-lg bg-[#29814C]/80 rounded-lg">
                    <div className="flex justify-center items-center h-full"></div>
                    <div className="flex items-center justify-between w-full">
                        {/* Botões à esquerda */}
                        <div className="w-full max-w-lg flex flex-col space-y-4 mb-4">
                            <p className="font-bold flex items-start mt-2 text-justify-center text-2xl text-white-400">
                                BLOCO CIRÚRGICO
                            </p> 
                            <Button 
                                type="submit" 
                                className="w-full bg-white text-green-800 p-3 rounded-md hover:bg-green-700 hover:text-white transition duration-200"
                                onClick={() => router.push("/FormsBloco")}> 
                                Criar Nova Planilha
                            </Button>
                            <Button 
                                type="submit" 
                                className="w-full bg-white text-green-800 p-3 rounded-md hover:bg-green-700 hover:text-white transition duration-200"
                                onClick={exportGrafico}>
                                Exportar Gráfico
                            </Button>

                            <Button 
                                type="submit" 
                                className="w-full bg-white text-green-800 p-3 rounded-md hover:bg-green-700 hover:text-white transition duration-200"
                                onClick={exportPlanilha}>
                                Exportar Planilha
                            </Button>
                        </div>
                        {/* Imagem das pastas à direita */}
                        <div className="flex justify-end">
                            <Image  
                                alt="imagem classificacao"
                                src="/imagens/imagetelaclassificacao.svg"
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