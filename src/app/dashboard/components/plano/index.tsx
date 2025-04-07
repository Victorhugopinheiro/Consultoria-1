"use client"

import { Container } from "@/app/_components/container";
import { ButtonChange } from "../buttonChange";
import { useState } from "react";


interface Me {
    email: string,
    name: string,
    id: string,
    endereço: string
    telefone: string
    subscriptions: string
}

export function Plano({ me }: { me: Me }) {


    const [email, setEmail] = useState("")
    const [telefone, setTelefone] = useState("")
    const [endereco, setEndereco] = useState("")


    return (


        <div className="flex w-full justify-center items-center h-full">
            <section className="w-10/12 h-full mt-28 md:w-full">

                <div className="bg-white md:h-[590px] rounded-md py-16 flex flex-col justify-center items-center ">
                    <h2 className="text-black text-xl p-3 font-bold md:2xl: lg:text-3xl">Beneficíos</h2>

                    <div className="w-full h-full flex flex-col justify-center items-center my-1 ">
                        <p className="border-t-2 mb-6 py-2 w-10/12 border-black "><strong>Quem somos?</strong> Uma equipe formada e certificada para extrair o seu máximo potêncial </p>

                        <p className="border-t-2 mb-6 py-2 border-black w-10/12"><strong>Como será o acompanhamento?</strong> Atendimento personalizado e individualizado para cada pessoa conforme suas necessidades, feito presencialmente e online. </p>

                        <p className="border-t-2 border-b-2 mb-6 py-2 w-10/12  border-black"><strong>Porque escolher a nossa consultoria? </strong>Somos profissionais preparados para mudar a sua auto estima e sua saúde, estamos no mercado a +10 anos</p>
                    </div>

                    {me.subscriptions
                        ?
                        <>
                            <button type="submit" className="h-12 w-10/12 text-white font-bold mb-2 py-3 px-4 decoration-none bg-green-500 rounded-md hover:scale-105 duration-300 ">Você Já é um assinante</button>
                            <ButtonChange />
                        </>

                        :
                        <>
                            <button type="submit" className="h-12 w-10/12 font-bold mb-2 py-3 px-4 decoration-none bg-black text-white rounded-md  
                        hover:scale-105 duration-300">Você ainda não tem um plano</button>

                        </>}

                </div>


                <div>

                </div>
            </section>
        </div>


    )
}