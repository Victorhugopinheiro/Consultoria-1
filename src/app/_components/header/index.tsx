'use client'

import Image from "next/image";
import { Container } from "../container";
import treinoHeader from "../../../../public/Treinoheader2.0.jpg"
import { LogIn, LogOut, User2 } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import { api } from "@/services/apiClient";
import Link from "next/link";
import { AuthContext } from "@/context/user/AuthContext";
import logo from "../../../../public/White@4x.png"
import maça from "../../../../public/testeFrutas/maça-1.png"
export function Header() {


    const { logoutUser } = useContext(AuthContext)

    const [user, setUSer] = useState("")
    const [hasUser, setHasUser] = useState(false)



    useEffect(() => {
        async function me() {
            try {
                const response = await api.get("/me")

                const { name, email } = response.data.userDetail

                console.log(response.data)
                if (name && email) {
                    setUSer(name)
                    setHasUser(true)
                    return
                }

            } catch (err) {
                console.log(err.message)
                return
            }
        }


        me()
    }, [])


    async function LogoutUser() {
        logoutUser()
    }

    return (
        <section className="w-full h-[calc(100vh-50vh)] bg-black relative   ">





            <div className="absolute w-2/12 h-full my-2  justify-center items-start">
                <div className="w-10/12 h-2/4 z-20 relative mx-auto flex justify-center items-center ">
                    <Image

                        className="object-contain  opacity-40"
                        fill
                        quality={100}
                        priority
                        src={logo}
                        alt="Imagem header"
                    />
                </div>
            </div>

            <div className="relative  flex w-10/12  justify-end ml-auto h-full z-10  md:w-10/12 ">




                <div className="bg-fixed rounded-full bg-cover bg-center w-full h-full" style={{ backgroundImage: "url('imgheader001.jpg')" }}>

                </div>

                <div className="absolute inset-0 rounded-full opacity-60 bg-black"></div>
            </div>







            <Container>
                <div className="absolute   top-0 max-w-7xl p-1 flex justify-center items-center  w-full z-30 md:flex-row">
                    <div className=" relative w-11/12 gap-4 z-20  flex justify-end items-start  px-2 mx-auto max-w-7xl font-bold text-white  md:flex-row md:w-8/12 md:gap-6 lg:w-6/12 lg:gap-8 ">
                        <a href="#planos" className="transition-all duration-500">
                            <button>Planos</button>
                        </a>
                        <a href="#sobre" className="transition-all duration-500">
                            <button>Sobre</button>
                        </a>
                        <a href="#depoimentos" className="transition-all duration-500">
                            <button>Depoimentos</button>
                        </a>
                        <a href="#contatos" className="transition-all duration-500">
                            <button>Contatos</button>
                        </a>



                    </div>

                    <div className="relative flex z-20 w-1/12 text-white justify-end items-centermax-w-7xl">
                        {hasUser ?
                            <div className="flex justify-center items-center gap-4 md:gap-6 lg:gap-8">
                                <Link href={"/dashboard"}>
                                    <button><User2 className="size-5 md:size-6" /></button>
                                </Link>
                                <Link href={"/dashboard"}>
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
    )
}