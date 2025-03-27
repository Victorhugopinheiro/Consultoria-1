"use client"

import { Container } from "@/app/_components/container"
import Image from "next/image"
import treino from "../../../../public/Treinoheader2.0.jpg"
import { Check } from "lucide-react"
import { Footer } from "@/app/_components/footer"
import { Button } from "../componets/buttton"
import { api } from "@/services/apiClient"
import { getCookieServer } from "@/lib/cookieServer"
import { AboutProduto } from "../componets/about"
import { FormEvent, useContext, useEffect, useState } from "react"
import { AuthContext } from "@/context/user/AuthContext"
import { getCookieClient } from "@/lib/cookieClient"
import { setupAPIClient } from "@/services/api"
import { getStripeJs } from "@/services/stripe-js"
import { ModalDevolucao } from "../componets/modalDevolucao/modalDevolucao"
import { FormComponent } from "../componets/form"
import { SideScroll } from "../componets/sideScroll"



export default function Detail() {


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
                    <div className="bg-white w-full flex flex-col md:flex-row rounded-[10px_10px_0px_0px] ">
                        <div className=" w-full flex justify-center h-[350px] md:h-[450px] md:w-9/12 lg:h-[500px] lg:w-9/12  rounded-md">
                            <SideScroll />

                            {controlModal && !height && <ModalDevolucao />}
                        </div>

                        <div className={
                            `${height ? "hidden" : "flex w-full flex-col items-center sticky top-0 gap-3 justify-between  rounded-[10px_10px_10px_10px] md:w-3/12  bg-white"}`}>


                            <div className=" flex flex-col w-full  sticky gap-3 justify-between rounded-[0px_0px_10px_0px] bg-slate-100 text-black   p-3 h-[400px] md:h-[450px] lg:h-full">
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


                                        <div className="mt-6  w-3/5 md:w-4/5 flex flex-col p-1  rounded-md">
                                            <FormComponent />
                                        </div>
                                    </div>





                                    <div className="mt-2 flex justify-center w-full ">
                                        <p className="text-black">Consultoria preparada</p>
                                    </div>

                                </div>

                                <div className="flex justify-start gap-8 text-sm md:justify-normal  md:gap-2 lg:text-base lg:justify-between">
                                    <span className="flex ">Segurança <Check color="green" /></span>
                                    <button onClick={openModal} className="">Devolução </button>
                                </div>

                            </div>

                        </div>




                    </div>
                </div>

                <AboutProduto />



            </Container>

            <Footer />

        </>

    )
}