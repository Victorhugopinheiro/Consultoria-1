

import Image, { StaticImageData } from "next/image";
import halter from "../../../../../../public/halter.jpg"
import abs from "../../../../../../public/Pessoas treinando.jpg"
import bg from "../../../../../../public/FundoFruta1.webp"
import Link from "next/link";
import { useContext } from "react";
import { OrderContext } from "@/providers/order";



interface PlanosProps {
    plano: string;
    valor: string;
    imagem: string | StaticImageData
    porcentagem: string
}






export function Grid({ plano, valor, imagem, porcentagem }: PlanosProps) {





    return (
        <section id="planos" className="w-10/12  rounded-md md:w-3/4  bg-slate-900 duration-500 ">
            <div className="w-full h-full rounded-md overflow-hidden p-2 text-black ">
                <div className="overflow-hidden">
                    <div className="relative w-full h-[280px] mx-auto hover:scale-110 duration-500">
                        <Image className="object-cover rounded-md" src={imagem} alt="Imagem serviço" quality={100} fill priority />

                    </div>
                </div>

                <div className="flex items-center overflow-hidden justify-center flex-col gap-4 w-full  border-slate-200  border " >

                    <div className="relative w-full h-[280px] rounded-md hover:scale-110 duration-500">
                        
                        <div className="absolute inset-0 opacity-100 bg-black ">

                        </div>
                    </div>

                    <div className="absolute text-white  flex items-center  flex-col gap-4 p-2 ">
                        <div>
                            <h1 className={`text-center  text-xl font-bold md:text-3xl`}>{plano}</h1>
                        </div>


                        <div className="flex flex-col mb-3">
                            <span className="text-sm text-gray-300 opacity-80 line-through">{valor}</span>
                            <div className="flex items-center gap-2">
                                <span className="text-xl font-bold md:text-2xl">{valor}</span>
                                <span className="text-sm text-green-600">{porcentagem}%OFF</span>
                            </div>
                            <span className="text-sm text-slate-300">Em 12x de R$11,99</span>
                        </div>

                        <Link href={`/detail/${plano}`}>
                            <div className="bg-slate-200 rounded-md w-full px-16 py-3 mb-2 hover:scale-105 transition-all duration-300  md:px-24">
                                <button className="text-center font-sans text-lg text-black font-bold">
                                    COMPRAR
                                </button>
                            </div>
                        </Link>
                    </div>


                </div>

            </div>




        </section>
    )
}