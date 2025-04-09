
import Image from "next/image"
import frutas from "../../../../../public/testeFrutas/banana-01.jpeg"
import logo from "../../../../../public/color@4x.png"
import { Check } from "lucide-react"
import { Button } from "../buttton"
import { useContext, useEffect, useState } from "react"
import { AuthContext } from "@/context/user/AuthContext"
import { FormComponent } from "../form"
import { ModalDevolucao } from "../modalDevolucao/modalDevolucao"

export function AboutProduto() {

    const { myPlano, contextPlano, openModal, controlModal, closeButton, height } = useContext(AuthContext)

    const planos = [
        {
            plano: "Mensal"
        },
        {
            plano: "Trimestral"
        },
        {
            plano: "Semestral"
        }
    ]



    return (

        <div className="bg-white my-16 rounded-md h-full relative w-full flex flex-col md:flex-row transition-all duration-300  justify-start">





            <div className="relative text-black flex 
                flex-col w-full h-full md:h-full md:w-9/12 lg:w-9/12">




                {controlModal && height && <ModalDevolucao />}

                


                <div className="relative w-full h-full pt-10  flex flex-col justify-center items-center ">
                    <h1 className="text-3xl text-center font-bold mb-5">Detalhes</h1>


                    <p className="border-t-2 mb-6 py-2 w-10/12 border-black "><strong>Quem somos?</strong> Uma equipe formada e certificada para extrair o seu máximo potêncial </p>

                    <p className="border-t-2 mb-6 py-2 border-black w-10/12"><strong>Como será o acompanhamento?</strong> Atendimento personalizado e individualizado para cada pessoa conforme suas necessidades, feito presencialmente e online. </p>

                    <p className="border-t-2 border-b-2 mb-6 py-2 w-10/12  border-black"><strong>Porque escolher a nossa consultoria? </strong>Somos profissionais preparados para mudar a sua auto estima e sua saúde, estamos no mercado a +10 anos</p>



                    <h2 className="text-3xl font-bold text-center mb-2 ">Nossa história</h2>
                    <p className=" w-full  px-10 leading-7 text-lg lg:w-10/12">Nossa consultoria de treino e dieta foi criada para ajudar você a alcançar seus objetivos de saúde de forma personalizada e eficiente. Com uma abordagem que combina ciência, dedicação e cuidado, oferecemos planos de alimentação e exercícios adaptados às suas necessidades e estilo de vida.

                        Aqui, você terá o apoio de profissionais qualificados que estarão ao seu lado em cada passo, garantindo que sua transformação seja completa e sustentável. Seja para melhorar a forma física, ganhar energia ou simplesmente adotar hábitos mais saudáveis, estamos prontos para transformar seus desafios em conquistas.

                        Seu melhor começa aqui!</p>


                    <div className="w-full h-full p-10 flex justify-end items-end">
                        <div className="relative w-36 h-36 ">
                            <Image src={logo} alt="Logo consultoria" />
                        </div>
                    </div>

                </div>
            </div>




            <div className={
                `${height ?
                    "hidden transition-all md:flex w-3/12 h-full md:transition-all duration-300 pt-1 pr-2  flex-col items-center sticky top-0 gap-3 justify-between  rounded-md lg:h-[730px] " : "hidden transition-all"}`}>


                <div className=" flex flex-col w-full  sticky gap-3 justify-between bg-white border border-gray-400  text-black rounded-md p-3 h-full md:h-full lg:h-full">
                    <div className="w-full">
                        <div className="flex justify-center">
                            <span className="text-gray-800 mb-3 text-center">Referencia no mercado</span>
                        </div>
                        <h1 className="text-3xl mb-3 text-center font-bold">Consultoria</h1>
                        <div className=" flex flex-col items-center">
                            <div className="flex flex-col items-center w-full gap-1">
                                <div>
                                    <span className="text-sm px-6 text-gray-700 opacity-80 line-through">R${contextPlano.oldValue}</span>
                                    <div className="flex items-center gap-2">
                                        <span className="text-2xl font-bold">R${contextPlano.valor}</span>
                                        <div>
                                            <span className="text-sm text-green-500">{contextPlano.discount}%OFF</span>
                                        </div>
                                    </div>
                                </div>
                                <span className="text-sm text-black">Em 12x de R$11,99</span>

                            </div>


                            <div className="mt-6 w-full  flex flex-col p-3 bg-white rounded-md">
                                <FormComponent />
                            </div>
                        </div>





                        <div className="mt-2 flex justify-center w-full ">
                            <p className="text-gray-700 font-bold">Consultoria preparada</p>
                        </div>

                    </div>

                    <div className="flex justify-between gap-8 text-sm md:justify-normal  md:gap-2 lg:text-base lg:justify-between">
                        <span className="flex items-center">Segurança <Check color="green" size={16} /></span>
                        <button onClick={openModal} className="font-bold">Devolução </button>
                    </div>

                </div>

            </div>




        </div>


    )
}