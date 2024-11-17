'use client'
import React, { useState } from "react";
import { Navbar, NavbarBrand, Image, Card, Button } from "@nextui-org/react";
import { today, getLocalTimeZone } from "@internationalized/date";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function TelaFormsClassificacao() {
  let defaultDate = today(getLocalTimeZone()).toString(); // Data padrão
  const [formData, setFormData] = useState({
    riscoVermelho: "",
    riscoLaranja: "",
    riscoAmarelo: "",
    riscoVerde: "",
    riscoAzul: "",
    data: defaultDate,
  });
  
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validação simples
    if (!formData.data || isNaN(Date.parse(formData.data))) {
      setMessage("Por favor, insira uma data válida.");
      return;
    }

    const payload = {
      data: formData.data,
      pacientes_vermelho: parseInt(formData.riscoVermelho) || 0,
      pacientes_laranja: parseInt(formData.riscoLaranja) || 0,
      pacientes_amarelo: parseInt(formData.riscoAmarelo) || 0,
      pacientes_verde: parseInt(formData.riscoVerde) || 0,
      pacientes_azul: parseInt(formData.riscoAzul) || 0,
    };

    setLoading(true);
    setMessage(""); // Limpa mensagens anteriores

    try {
      const response = await axios.post("http://127.0.0.1:8000/api/classificacao_de_risco/", payload, {
        headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
      });
      console.log('Dados enviados com sucesso:', response.data);
      router.push("/Classificacao"); // Redireciona após o envio
    } catch (error) {
      console.error('Erro ao enviar os dados:', error);
      setMessage("Erro ao enviar os dados. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-[#FFFFFF]">
      <div className="absolute inset-0 z-0 bg-fixed bg-cover bg-center" style={{ backgroundImage: "url('/imagens/Background.png')" }}></div>

      <Navbar className="fixed top-0 left-0 w-full z-10" style={{ backgroundColor: '#29814C' }}>
        <NavbarBrand>
          <div className="flex items-center gap-4 ml-6">
            <Image alt="Logo" src="/imagens/imageavatar.svg" width={40} height={40} />
          </div>
        </NavbarBrand>
        <NavbarBrand className="hidden sm:flex gap-4" justify-center='true'>
          <Image alt="Logo" src="/imagens/Logo Healthboard (1).png" width={200} height={140} />
        </NavbarBrand>
        <NavbarBrand>
          <div className="ml-auto mr-4">
            <button type="button" className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
              onClick={() => router.push("/Classificacao")}>
              {/* Ícone */}
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
              </svg>
              <span className="sr-only">Icon description</span>
            </button>
          </div>
        </NavbarBrand>
      </Navbar>

      <div className="relative z-10 w-full max-w-6xl p-16 mt-20">
        <Card className="w-full shadow-lg bg-[#29814C]/80 rounded-lg p-10">
          <div className="flex items-center justify-between w-full">
            <div className="w-1/2 flex flex-col justify-start">
              <h3 className="text-3xl font-bold text-white mb-6">Adicionar novo formulário em Classificação de Risco</h3>
              <Image alt="imagem forms" src="/imagens/imgaddforms.svg" width={800} height={300} />
            </div>
            <form className="w-1/2 flex flex-col items-start space-y-4" onSubmit={handleSubmit}>
              <h3 className="text-lg font-bold text-white mb-1">Quantidade de Pacientes classificados com o risco:</h3>

              {/* Campos de Risco */}
              <div className="flex w-full space-x-4">
                {['riscoVermelho', 'riscoLaranja', 'riscoAmarelo'].map((id) => (
                  <div key={id} className="w-1/3">
                    <label htmlFor={id} className="text-white mb-2 block">Risco {id.charAt(5).toUpperCase() + id.slice(6)}</label>
                    <input 
                      type="number"
                      id={id}
                      value={formData[id as keyof typeof formData]}
                      onChange={handleChange}
                      className="w-full h-12 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-green-800 bg-white/80"
                      placeholder="0000"
                    />
                  </div>
                ))}
              </div>

              {/* Campos de Risco Verde e Azul */}
              <div className="flex w-full space-x-4">
                {['riscoVerde', 'riscoAzul'].map((id) => (
                  <div key={id} className="w-1/2">
                    <label htmlFor={id} className="text-white mb-2 block">Risco {id.charAt(5).toUpperCase() + id.slice(6)}</label>
                    <input 
                      type="number"
                      id={id}
                      value={formData[id as keyof typeof formData]}
                      onChange={handleChange}
                      className="w-full h-12 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-green-800 bg-white/80"
                      placeholder="0000"
                    />
                  </div>
                ))}
              </div>

              {/* Campo de Data */}
              <div className="w-full">
                <label htmlFor="data" className="text-white mb-2 block">Data deste formulário</label>
                <input
                  type="date"
                  id="data"
                  value={formData.data}
                  onChange={handleChange}
                  className="w-full h-12 bg-white/80 text-gray-400 rounded-md p-3 shadow-sm border border-gray-300"
                />
              </div>

              {/* Mensagem de feedback */}
              {message && (
                <p className={`text-red-${message.includes('sucesso') ? '500' : '600'} mt-2`}>
                  {message}
                </p>
              )}

              {/* Botão de Envio */}
              <Button
                type="submit"
                disabled={loading}
                className={`w-full h-12 ${loading ? 'bg-gray-400' : 'bg-white text-green-800'} p-3 
                rounded-md hover:bg-green-${loading ? '400' : '700'} hover:text-white transition duration-200`}
              >
                {loading ? "Salvando..." : "Salvar Dados"}
              </Button>
            </form>
          </div>
        </Card>
      </div>
    </div>
  );
}