import {Navbar, NavbarBrand,  Image, Card, Button } from "@nextui-org/react";

export default function TelaCirurgica() {
    
    return (

    /* Tela principal + imagem de fundo */
    <div className="relative flex min-h-screen items-center justify-center bg-[#FFFFFF] ">
    
    {/* Div para imagem de fundo que toma toda a tela e é fixa */}
        <div className="absolute inset-0 z-0 bg-fixed bg-cover bg-center"
            style={{ backgroundImage: "url('/imagens/Background.png')" }}>
        </div>
        {/* Navbar fixa no topo */}
        <Navbar  className="fixed top-0 left-0 w-full z-10" style={{ backgroundColor: '#154B19' }}>
            <NavbarBrand>
            <div className="flex items-center gap-4 ">
                <Image 
                    alt="Logo" 
                    src="/imagens/imageavatar.svg"  
                    width={40}  
                    height={40} 
                />
                <div className="font-medium dark:text-white">
                    <div>JANY</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Joined in October 2024</div>
                </div>
                </div>
            </NavbarBrand>
            <NavbarBrand className="chidden sm:flex gap-4" justify-center>
                <Image 
                    alt="Logo" 
                    src="/imagens/Logo Healthboard (1).png"  
                    width={200}  
                    height={140} 
                />
            </NavbarBrand>
            <NavbarBrand>
                <Image 
                    alt="Botão Desconecta" 
                    src="/imagens/Botão Desconectar.svg"  
                    width={100}  
                    height={40} 
                />
            </NavbarBrand>
        </Navbar>
         {/* Card */}
        <div className="relative z-10">
            <Card className="w-full max-w-6xl p-16 shadow-lg bg-[#29814C]/80 rounded-lg">
                <div className="flex justify-center items-center h-full">
                </div>
                <div className="flex items-center justify-between w-full">
                    {/* Botões à esquerda */}
                <div className="w-full max-w-lg flex flex-col space-y-4 mb-4">
                <p className="font-serif:poppins flex items-start mt-2 text-justify-center text-2xl text-white-400">
                CLÍNICA CIRÚRGICA
                </p> 
                    <Button 
                        type="submit" 
                        className="w-full bg-white text-green-800 p-3 rounded-md hover:bg-green-700 hover:text-white transition duration-200">
                        Criar Nova Planilha
                        </Button>
                    
                    <Button 
                        type="submit" 
                        className="w-full bg-white text-green-800 p-3 rounded-md hover:bg-green-700 hover:text-white transition duration-200">
                        Visualizar Planilha
                    </Button>

                    <Button 
                        type="submit" 
                        className="w-full bg-white text-green-800 p-3 rounded-md hover:bg-green-700 hover:text-white transition duration-200">
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
            
