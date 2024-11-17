'use client';
import React, { useState } from "react";
import { Navbar, NavbarBrand, Image, Card, Textarea, Button } from "@nextui-org/react";
import { today, getLocalTimeZone } from "@internationalized/date";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function TelaFormsBloco() {
  const defaultDate = today(getLocalTimeZone()).toString(); // Data padrão formatada
  const [formData, setFormData] = useState({
    cirurgias_normais: "",
    cirurgias_suspensas: "",
    cirurgias_emergencias: "",
    observacoes: "",
    data: defaultDate,
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const router = useRouter();

  const camposCirurgias = [
    { id: 'cirurgias_normais', label: 'Eletivas' },
    { id: 'cirurgias_suspensas', label: 'Suspensas' },
    { id: 'cirurgias_emergencias', label: 'Urgências' },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const payload = {
      data: formData.data,
      cirurgias_normais: parseInt(formData.cirurgias_normais) || 0,
      cirurgias_suspensas: parseInt(formData.cirurgias_suspensas) || 0,
      cirurgias_emergencias: parseInt(formData.cirurgias_emergencias) || 0,
      observacoes: formData.observacoes,
    };

    setLoading(true);
    setMessage(""); // Limpa as mensagens anteriores

    try {
      const response = await axios.post("http://127.0.0.1:8000/api/bloco_cirurgico/", payload, {
        headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
      });
      console.log('Dados enviados com sucesso:', response.data);
      router.push("/Bloco"); // Faz o redirecionamento após o envio
    } catch (error) {
      console.error('Erro ao enviar os dados:', error);
      setMessage("Erro ao enviar os dados. Tente novamente.");
    } finally {
      setLoading(false);
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
          </div>
        </NavbarBrand>
        <NavbarBrand className="hidden sm:flex gap-4 justify-center">
          <Image alt="Logo" src="/imagens/Logo Healthboard (1).png" width={150} height={100} />
        </NavbarBrand>
        <NavbarBrand>
          <div className="ml-auto mr-4">
            <button type="button" className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 
            font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center dark:bg-green-600 dark:hover:bg-green-700 
            dark:focus:ring-green-800"
              onClick={() => router.push("/Bloco")}>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
              </svg>
              <span className="sr-only">Icon description</span>
            </button>
          </div>
        </NavbarBrand>
      </Navbar>

      {/* Card principal */}
      <div className="relative z-10 w-full max-w-6xl p-16 mt-20">
        <Card className="w-full shadow-lg bg-[#29814C]/80 rounded-lg p-10">
          <div className="flex items-center justify-between w-full">
            <div className="w-1/2 flex flex-col justify-start">
              <h3 className="text-white text-3xl mb-16 font-bold text-center">
                Adicionar Novo Formulário em Bloco Cirúrgico
              </h3>
              <Image alt="imagem forms" src="/imagens/imgaddforms.svg" width={800} height={300} />
            </div>
            <form className="w-1/2 flex flex-col items-start space-y-4" onSubmit={handleSubmit}>
              <h3 className="text-lg font-bold text-white mb-2 mt-10">Quantidade de Cirurgias:</h3>
              <div className="flex w-full space-x-4">
                {camposCirurgias.map(({ id, label }) => (
                  <div key={id} className="w-1/3">
                    <label htmlFor={id} className="text-white mb-2 block">{label}</label>
                    <input
                      type="number"
                      id={id}
                      value={formData[id as keyof typeof formData] || ''} // Valor seguro
                      onChange={handleChange}
                      className="w-full h-12 px-4 py-2 border border-gray-300 rounded-md text-green-800 bg-white/80"
                      placeholder="0000"
                    />
                  </div>
                ))}
              </div>
              <Textarea
                id="observacoes"
                value={formData.observacoes}
                onChange={handleChange}
                variant="faded"
                label="Observações"
                placeholder="Ex.: Justificar suspensões e cancelamentos, se houver."
                className="max-w-xs bg-white/80 text-green-800 text-sm"
              />
              <div className="w-full">
                <label htmlFor="data" className="text-white mb-2 block">Data deste formulário</label>
                <input
                  type="date"
                  id="data"
                  value={formData.data}
                  onChange={handleChange}
                  className="w-full h-12 bg-white/80 text-green-800 rounded-md p-3 shadow-sm border border-gray-300"
                />
              </div>
              <Button type="submit" disabled={loading} className="w-full h-12 bg-white text-green-800 p-3 rounded-md hover:bg-green-700 hover:text-white">
                {loading ? "Salvando..." : "Salvar Dados"}
              </Button>
            </form>
          </div>
        </Card>
      </div>
    </div>
  );
}
