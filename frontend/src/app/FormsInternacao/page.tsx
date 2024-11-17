"use client";
import React, { useState } from "react";
import { Navbar, NavbarBrand, Image, Card, Button } from "@nextui-org/react";
import { today, getLocalTimeZone } from "@internationalized/date";
import { useRouter } from "next/navigation";
import axios from "axios";

// Define os tipos de dados do formulário
interface FormData {
    bloco: string;
    data: string;
    leitosFixos: number;
    leitosBloqueados: number;
    leitosExtras: number;
    pacientesInternos: number;
    entradasNovas: number;
    entradasTransfInterna: number;
    saidasAlta: number;
    saidasTransfInterna: number;
    saidasTransfExterna: number;
    saidasObitosMais24h: number;
    saidasObitosMenos24h: number;
    saidasDesistencias: number;
}

export default function TelaFormsInternacao() {
    let defaultDate = today(getLocalTimeZone()).toString(); 
    const [formData, setFormData] = useState<FormData>({
        bloco: "",
        data: defaultDate,
        leitosFixos: 0,
        leitosBloqueados: 0,
        leitosExtras: 0,
        pacientesInternos: 0,
        entradasNovas: 0,
        entradasTransfInterna: 0,
        saidasAlta: 0,
        saidasTransfInterna: 0,
        saidasTransfExterna: 0,
        saidasObitosMais24h: 0,
        saidasObitosMenos24h: 0,
        saidasDesistencias: 0,
    });
    
    const [loading, setLoading] = useState<boolean>(false);
    const [message, setMessage] = useState<string>("");
    const router = useRouter();

    const handleButtonClick = (bloco: string) => {
        setFormData({ ...formData, bloco });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        // Validação simples
        if (!formData.bloco) {
            setMessage("Por favor, selecione um bloco.");
            return;
        }
        
        if (!formData.data || isNaN(Date.parse(formData.data))) {
            setMessage("Por favor, insira uma data válida.");
            return;
        }

        const payload = {
            enfermeiro: null,
            bloco: formData.bloco,
            data: formData.data,
            leitos_fixos: formData.leitosFixos,
            leitos_bloqueados: formData.leitosBloqueados,
            leitos_extras: formData.leitosExtras,
            pacientes_internos: formData.pacientesInternos,
            entradas_novas: formData.entradasNovas,
            entradas_transf_interna: formData.entradasTransfInterna,
            saidas_alta: formData.saidasAlta,
            saidas_transf_interna: formData.saidasTransfInterna,
            saidas_transf_externa: formData.saidasTransfExterna,
            saidas_obitos_mais24h: formData.saidasObitosMais24h,
            saidas_obitos_menos24h: formData.saidasObitosMenos24h,
            saidas_desistencias: formData.saidasDesistencias,
        };

        setLoading(true);
        setMessage(""); 

        try {
            const response = await axios.post("http://127.0.0.1:8000/api/unidade_de_internacao/", payload, {
                headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
            });
            console.log('Dados enviados com sucesso:', response.data);
            setMessage("Dados enviados com sucesso!");
            router.push("/Internacao"); // Faz o redirecionamento após o envio
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
                        <button type="button" className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" onClick={() => router.push("/Internacao")}>
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
                            <h3 className="text-3xl font-bold text-white mb-6">Adicionar novo formulário em Unidade de Internação</h3>
                            <Image alt="imagem forms" src="/imagens/imgaddforms.svg" width={800} height={300} />
                        </div>

                        <form className="w-1/2 flex flex-col items-start space-y-4" onSubmit={handleSubmit}>
                            <h3 className="text-lg font-bold text-white mb-1">Detalhes da Unidade de Internação</h3>

                            
                            <div className="w-full">
                                <label htmlFor="bloco" className="text-white mb-2 block">Bloco</label>
                                <div className="space-x-4">
                                    <Button onClick={() => handleButtonClick("blocoCM")} color={formData.bloco === "blocoCM" ? "success" : "default"}> Clínica Médica </Button>
                                    <Button onClick={() => handleButtonClick("blocoCC")} color={formData.bloco === "blocoCC" ? "success" : "default"}> Clínica Cirúrgica </Button>
                                    <Button onClick={() => handleButtonClick("blocoUTI")} color={formData.bloco === "blocoUTI" ? "success" : "default"}> UTI </Button>
                                </div>
                            </div>

                            
                            <div className="grid grid-cols-3 gap-x-4 gap-y-4 w-full">
                                {['leitosFixos', 'leitosBloqueados', 'leitosExtras', 'pacientesInternos', 'entradasNovas', 'entradasTransfInterna', 'saidasAlta', 'saidasTransfInterna', 'saidasTransfExterna', 'saidasObitosMais24h', 'saidasObitosMenos24h', 'saidasDesistencias'].map((field) => (
                                    <div key={field}>
                                        <label htmlFor={field} className="text-white mb-2 block">{field.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase())}</label>
                                        <input type="number" id={field} value={formData[field as keyof FormData]} onChange={handleChange} min="0" className="w-full p-2 rounded-lg bg-white text-black" />
                                    </div>
                                ))}
                            </div>

                            
                            <div className="w-full mt-4">
                                <label htmlFor="data" className="text-white mb-2 block">Data</label>
                                <input
                                    type="date"
                                    id="data"
                                    value={formData.data}
                                    onChange={handleChange}
                                    className="w-full p-2 rounded-lg bg-white text-black"
                                />
                            </div>

                            
                            <div className="mt-4">
                                <Button type="submit" disabled={loading} className="bg-[#29814C] text-white font-semibold rounded-lg px-6 py-2 hover:bg-green-700 w-full">
                                    {loading ? "Enviando..." : "Enviar Dados"}
                                </Button>
                            </div>

                            {message && <div className="text-white mt-4">{message}</div>}
                        </form>
                    </div>
                </Card>
            </div>
        </div>
    );
}