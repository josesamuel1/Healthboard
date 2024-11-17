'use client'
import React from "react";
import { Image, Card, Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";

const Welcome: React.FC = () => {
  const router = useRouter();

  return (
    <div className="relative flex flex-col min-h-screen items-center justify-center bg-[#FFFFFF]">
      {/* Imagem de fundo */}
      <div className="absolute inset-0 z-0 bg-fixed bg-cover bg-center" 
           style={{ backgroundImage: "url('/imagens/Background.png')" }}>
      </div>

      {/* Container principal com layout dividido */}
      <div className="relative z-10 w-full max-w-4xl p-8 bg-[#29814C]/80 rounded-lg shadow-lg flex flex-col md:flex-row items-center justify-between">
        
        {/* Seção de texto */}
        <div className="flex flex-col space-y-4 md:w-1/2">
          <h2 className="text-3xl font-semibold text-white">Bem-vindo ao HealthBoard!</h2>
          <p className="text-white text-lg">
            Estamos felizes em ter você conosco. Para continuar, por favor, faça login.
          </p>
          <Button 
            size="lg"
            color="success"
            className="bg-green-700 hover:bg-green-800 text-white"
            onClick={() => router.push("/Login")}
          >
            Fazer Login
          </Button>
        </div>

        {/* Imagem ilustrativa */}
        <div className="w-full md:w-1/2 mt-8 md:mt-0 flex justify-center">
          <Image 
            alt="Recepção" 
            src="/imagens/reception.svg"  
            width={300}  
            height={200} 
            className="rounded-md object-cover"  // Correção: adicionando object-cover
          />
        </div>
      </div>

      {/* Rodapé com logo e direitos autorais */}
      <footer className="absolute bottom-0 w-full flex items-center justify-center py-4 bg-white shadow-lg">
        <div className="text-center text-gray-500 text-sm">
          <Image 
            alt="Logo" 
            src="/imagens/Logo Healthboard (1).png"  
            width={60}  
            height={30} 
            className="inline-block mb-2"
          />
          <p>© 2024 HealthBoard. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default Welcome;
