'use client'

import Image from "next/image";
import { Container } from "@/app/_components/container";
import treinoHeader from "../../../../../../public/treinoHeader.jpg"
import { LogIn, LogOut, User2 } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import { api } from "@/services/apiClient";
import Link from "next/link";
import { AuthContext } from "@/context/user/AuthContext";
import logo from "../../../../../../public/color@4x.png"
import halter from "../../../../../../public/testeFrutas/peraReal-removebg-preview.png"


export interface Me {
    email: string,
    name: string,
    id: string,
    endereço: string
    telefone: string
    subscriptions: string
}

export function MyHeader({ meHeader }: { meHeader: Me }) {




    const { logoutUser } = useContext(AuthContext)

    const [user, setUSer] = useState("")
    const [hasUser, setHasUser] = useState(meHeader.name ? true : false)





    async function LogoutUser() {
        logoutUser()
    }

    return (
        <>
            <section className="w-full h-[calc(100vh-50vh)] bg-white  relative shadow-lg shadow-slate-600   ">





                <div className="absolute flex flex-col  items-center w-4/12 h-full   justify-center bg-gray-200  md:w-4/12 lg:w-4/12">
                    <p className="text-lg font-serif md:text-2xl lg:text-3xl font-bold text-slate-900">CONSULTORIA</p>
                    <div className="w-11/12  h-1/4 z-20  relative mx-auto flex justify-center items-center md:h-2/4 ">
                        <Image

                            className="object-contain "
                            fill
                            quality={100}
                            priority
                            src={logo}
                            alt="Imagem header"
                        />
                    </div>
                </div>

                <div className="relative  flex w-8/12 justify-end items-end ml-auto h-full z-10  md:w-8/12">



                    <div className="w-full  h-full rounded-full relative ">
                        <Image className="object-cover lg:object-cover " priority fill quality={100} alt="Header" src={treinoHeader} />
                    </div>


                    <div className="w-3/12 hidden bg-gray-200 lg:block  h-full  relative ">
                        <Image className="hidden lg:block object-contain " priority fill quality={100} alt="Header" src={halter} />
                    </div>




                </div>







                <Container>
                    <div className="absolute   top-0 max-w-7xl p-1 flex justify-center items-center  w-full z-30 md:flex-row">
                        <div className=" relative w-10/12 gap-4 z-20  flex justify-end items-start  px-2 mx-auto max-w-7xl font-bold text-white  md:flex-row md:w-8/12 md:gap-6 lg:w-10/12 lg:gap-8 ">
                            <a href="#planos" className="transition-all duration-500">
                                <button className="text-black">Planos</button>
                            </a>
                            <a href="#sobre" className="transition-all duration-500">
                                <button className="text-black">Sobre</button>
                            </a>
                            <a href="#depoimentos" className="transition-all duration-500">
                                <button className="text-black">Depoimentos</button>
                            </a>
                            <a href="#contatos" className="transition-all duration-500">
                                <button className="text-black">Contatos</button>
                            </a>



                        </div>

                        <div className="relative flex z-20 w-2/12  text-black justify-end items-centermax-w-7xl">
                            {hasUser ?
                                <div className="flex justify-center items-center gap-4 md:gap-6 lg:gap-8">
                                    <Link className="flex justify-center items-center" href={"/dashboard"}>
                                        <button><User2 className="size-5 md:size-6" /></button>
                                    </Link>



                                    <button onClick={LogoutUser}><LogOut className="size-5 md:size-6" /></button>

                                </div>
                                :
                                <Link className="flex justify-center items-center" href={"/login"}>
                                    <button><LogIn className="size-5 md:size-6" /></button>
                                </Link>}

                        </div>
                    </div>

                </Container>
            </section>







        </>
    )
}