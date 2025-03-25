
import Image from "next/image"
import frutas from "../../../../../public/frutas2.webp"
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

        <div className="bg-white w-full flex flex-col md:flex-row transition-all duration-300  justify-start">



            <div className="relative text-white flex 
                flex-col w-full h-[1000px] md:h-[800px] md:w-9/12 lg:w-9/12 my-28  bg-slate-900  ">
                <Image className="object-cover" fill quality={100} priority={true} src={frutas} alt="imagem Frutas" />

                <div className="relative  w-full h-[1000px] md:h-[800px] lg:h-[800px] bg-red ">

                    {controlModal && height && <ModalDevolucao />}
                    <div className="absolute inset-0 opacity-75 rounded-[10px_0px_0px_10px] bg-slate-900 ">

                    </div>
                </div>


                <div className="absolute w-full pt-10 flex flex-col justify-center items-center ">
                    <h1 className="text-3xl text-center font-bold mb-5">Detalhes</h1>


                    <p className="border-t-2 mb-6 py-2 w-10/12 border-slate-400 "><strong>Quem somos?</strong> Uma equipe formada e certificada para extrair o seu máximo potêncial </p>

                    <p className="border-t-2 mb-6 py-2 border-slate-400 w-10/12"><strong>Como será o acompanhamento?</strong> Atendimento pessoal e online de treino e dieta. </p>

                    <p className="border-t-2 border-b-2 mb-6 py-2 w-10/12  border-slate-400"><strong>Porque escolher a nossa consultoria? </strong>Somos profissionais preparados para mudar a sua auto estima e sua saúde, estamos no mercado a +10 anos</p>



                    <h2 className="text-3xl font-bold text-center mb-2 ">Nossa história</h2>
                    <p className=" w-full  px-10 leading-7 text-lg lg:w-10/12">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quibusdam sint veritatis itaque, harum quos autem officiis quia dignissimos quasi necessitatibus eveniet dicta optio distinctio molestiae qui alias ea repellat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum ut, eum porro consequuntur fugit repellendus nemo, aliquam sed aut obcaecati cum. Hic, natus quam magnam cum perferendis nam sit neque. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat, aut? Incidunt optio, nam cum quo tenetur quos magni laborum delectus, quis fugit quisquam tempora dolore neque debitis culpa. Temporibus, rem!</p>

                </div>
            </div>




            <div className={
                `${height ? "hidden md:flex w-3/12 h-full  flex-col items-center sticky top-0 gap-3 justify-between  rounded-[10px_10px_10px_10px] lg:h-[696px] bg-white" : "hidden"}`}>


                <div className=" flex flex-col w-full  sticky gap-3 justify-between  bg-slate-900 text-white rounded-[0px_0px_10px_0px] p-3 h-[350px] md:h-[450px] lg:h-full">
                    <div className="w-full">
                        <div className="flex justify-center">
                            <span className="text-gray-200 mb-3 text-center">Referencia no mercado</span>
                        </div>
                        <h1 className="text-3xl mb-3 text-center font-bold">Consultoria</h1>
                        <div className=" flex flex-col items-center">
                            <div className="flex flex-col items-center w-full gap-1">
                                <div>
                                    <span className="text-sm px-6 text-gray-600 opacity-80 line-through">R${contextPlano.oldValue}</span>
                                    <div className="flex items-center gap-2">
                                        <span className="text-2xl font-bold">R${contextPlano.valor}</span>
                                        <div>
                                            <span className="text-sm text-green-500">{contextPlano.discount}%OFF</span>
                                        </div>
                                    </div>
                                </div>
                                <span className="text-sm text-black">Em 12x de R$11,99</span>

                            </div>


                            <div className="mt-6 w-full  flex flex-col p-3 bg-slate-900 rounded-md">
                                <FormComponent />
                            </div>
                        </div>





                        <div className="mt-2 flex justify-center w-full ">
                            <p className="text-gray-200">Consultoria preparada</p>
                        </div>

                    </div>

                    <div className="flex justify-start gap-8 text-sm md:justify-normal md:gap-2  lg:text-base lg:justify-between">
                        <span className="flex gap-1">Segurança <Check color="green" /></span>
                        <button onClick={openModal} className="">Devolução </button>
                    </div>

                </div>

            </div>




        </div>


    )
}