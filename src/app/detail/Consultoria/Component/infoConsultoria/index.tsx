"use client"

import { Container } from "@/app/_components/container"
import Image from "next/image"
import treino from "../../../../public/Treinoheader2.0.jpg"
import { Check } from "lucide-react"
import { Footer } from "@/app/_components/footer"
import { Button } from "@/app/detail/componets/buttton"
import { api } from "@/services/apiClient"
import { getCookieServer } from "@/lib/cookieServer"
import { AboutProduto } from "@/app/detail/componets/about"
import { FormEvent, useContext, useEffect, useState } from "react"
import { AuthContext } from "@/context/user/AuthContext"
import { getCookieClient } from "@/lib/cookieClient"
import { setupAPIClient } from "@/services/api"
import { getStripeJs } from "@/services/stripe-js"
import { ModalDevolucao } from "@/app/detail/componets/modalDevolucao/modalDevolucao"
import { FormComponent } from "@/app/detail/componets/form"
import { SideScroll } from "@/app/detail/componets/sideScroll"
import { Me } from "@/app/_components/header/component/myHeader"



export function MyConsultoria() {


    const { myPlano, contextPlano, openModal, controlModal, closeButton, heighPage, height } = useContext(AuthContext)

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

    const [plano, setPlano] = useState("")


    const [user, setUser] = useState(false)

    useEffect(() => {
        const user = () => {

            const scrolling = window.pageYOffset

            if (scrolling > 430) {
                heighPage(true)
                if (height === false) {
                    closeButton()
                }
            } else {
                heighPage(false)
                if (height === true) {
                    closeButton()
                }

            }
        }


        window.addEventListener("scroll", user)



        return () => {
            window.removeEventListener("scroll", user)
        }
    }, [height])




    return (

        <>

            <Container>

                <div className="">
                    <div className="bg-white rounded-md border-b p-2 border-gray-300 mx-auto  w-full h-full flex flex-col md:flex-row ">

                        <div className=" w-full  flex justify-center h-full md:h-[450px] md:w-9/12 lg:h-full lg:w-9/12  rounded-md:[10px_0px_0px_10px]">
                            <SideScroll />

                            {controlModal && !height && <ModalDevolucao />}
                        </div>

                        <div className={
                            `${height ? "flex md:hidden" : "flex w-full flex-col items-center sticky top-0 gap-3 justify-between  rounded-[0px_10px_10px_0px] md:w-3/12  bg-white"}`}>


                            <div className="
                             flex flex-col w-full border border-gray-400 sticky gap-3 rounded-[0px_0px_10px_10px] justify-between md:rounded-[0px_10px_10px_0px] bg-white text-black   p-1 h-full md:h-full lg:h-full lg:p-3">
                                <div className="w-full">
                                    <div className="flex justify-center">
                                        <span className="text-gray-800 mb-3 text-center">Referencia no mercado</span>
                                    </div>
                                    <h1 className="text-2xl mb-3 text-center font-bold md:text-2xl lg:text-3xl">Consultoria</h1>
                                    <div className=" flex flex-col items-center">
                                        <div className="flex flex-col items-center w-full gap-1">
                                            <div>
                                                <span className="text-sm px-6 text-gray-800 opacity-80 line-through">R${contextPlano.oldValue}</span>
                                                <div className="flex items-center gap-2">
                                                    <span className="text-2xl font-bold">R${contextPlano.valor}</span>
                                                    <div>
                                                        <span className="text-sm text-green-500">{contextPlano.discount}%OFF</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <span className="text-sm text-slate-800">Em 12x de R$11,99</span>

                                        </div>


                                        <div className="mt-6  w-3/5 md:w-full flex flex-col p-1  rounded-md lg:w-4/5">
                                            <FormComponent />
                                        </div>
                                    </div>





                                    <div className="mt-2 flex justify-center w-full ">
                                        <p className="text-black">Consultoria preparada</p>
                                    </div>

                                </div>

                                <div className="flex justify-between gap-8 text-sm   md:gap-2 lg:text-base ">
                                    <span className="flex items-center">Segurança <Check color="green" size={16} /></span>
                                    <button onClick={openModal} className="font-bold">Devolução </button>
                                </div>



                            </div>

                        </div>




                    </div>
                </div>

                <AboutProduto />



            </Container>



        </>

    )
}