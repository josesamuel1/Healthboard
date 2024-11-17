'use client';

import React, { useEffect, useState } from "react";
import { Navbar, NavbarBrand, Image, Card, CardBody, Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Chart from "chart.js/auto"; // Importando o Chart.js para renderizar o gráfico

export default function EstatisticaClassif() {
  const router = useRouter();
  const [dados, setDados] = useState<any[]>([]);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const fetchClassificacaoDeRisco = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/classificacao_de_risco/");
        setDados(response.data);
        renderChart(response.data); // Passando os dados para renderizar o gráfico
      } catch (error) {
        console.error("Erro ao buscar dados de classificação de risco", error);
        setError('Erro ao buscar dados de classificação de risco.');
      }
    };

    fetchClassificacaoDeRisco();
  }, []);

  const renderChart = (data: any) => {
    const ctx = document.getElementById("chart") as HTMLCanvasElement;
    if (ctx) {
      new Chart(ctx, {
        type: "bar",
        data: {
          labels: ["Vermelho", "Laranja", "Amarelo", "Verde", "Azul"], // Níveis de risco
          datasets: [
            {
              label: "Classificação de Risco",
              data: [
                data.pacientes_vermelho || 0,
                data.pacientes_laranja || 0,
                data.pacientes_amarelo || 0,
                data.pacientes_verde || 0,
                data.pacientes_azul || 0
              ],
              backgroundColor: "rgba(75, 192, 192, 0.2)",
              borderColor: "rgba(75, 192, 192, 1)",
              borderWidth: 1
            }
          ]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    }
  };

  const handleDownload = () => {
    const chart = document.getElementById("chart") as HTMLCanvasElement;
    const imageUrl = chart?.toDataURL();
    if (imageUrl) {
      const link = document.createElement('a');
      link.href = imageUrl;
      link.download = 'grafico_classificacao_risco.png'; // Nome do arquivo
      link.click();
    }
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-[#FFFFFF]">
      {/* Imagem de fundo */}
      <div className="absolute inset-0 z-0 bg-fixed bg-cover bg-center" style={{ backgroundImage: "url('/imagens/Background.png')" }}></div>

      {/* Navbar fixa */}
      <Navbar className="fixed top-0 left-0 w-full z-10" style={{ backgroundColor: '#29814C' }}>
        <NavbarBrand>
          <div className="flex items-center gap-4 ml-6">
            <Image alt="Logo" src="/imagens/imageavatar.svg" width={40} height={40} />
            <div className="font-medium dark:text-white">
              <div>JANY</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Joined in August 2024</div>
            </div>
          </div>
        </NavbarBrand>
        <NavbarBrand className="chidden sm:flex gap-4" justify-Center>
          <Image alt="Logo" src="/imagens/Logo Healthboard (1).png" width={200} height={140} />
        </NavbarBrand>
        <NavbarBrand className="ml-auto mr-4">
          <button type="button" className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" onClick={() => router.push("/Classificacao")}>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg>
            <span className="sr-only">Icon description</span>
          </button>
        </NavbarBrand>
      </Navbar>

      {/* Card centralizado */}
      <div className="relative z-10 flex flex-col flex-grow items-center justify-center px-4">
        <Card className="w-full max-w-6xl p-8 shadow-lg bg-[#29814C]/80 rounded-lg">
          <h1 className="font-serif text-center text-2xl font-semibold mb-4 text-white">
            CLASSIFICAÇÃO DE RISCO
          </h1>
          <p className="text-center text-white mb-6">Quantidade por cada Nível de Risco</p>

          {/* Card Body */}
          <CardBody className="flex flex-col justify-center items-center p-8 w-full bg-white rounded-lg">
            <canvas id="chart" width="400" height="400"></canvas>
            <Button onClick={handleDownload} className="mt-6 bg-green-600 hover:bg-green-800 text-white px-4 py-2 rounded-lg">
              Baixar Gráfico
            </Button>

            {/* Exibição de erros */}
            {error && <p className="text-red-500 mt-4">{error}</p>}
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
