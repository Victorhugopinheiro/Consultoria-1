'use client'

import Image from "next/image";
import { Container } from "../container";
import treinoHeader from "../../../../public/Treinoheader2.0.jpg"
import { LogIn, LogOut, User2 } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import { api } from "@/services/apiClient";
import Link from "next/link";
import { AuthContext } from "@/context/user/AuthContext";
import logo from "../../../../public/logo.png"
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
                }

            } catch (err) {
                console.log(err.message)
            }
        }


        me()
    }, [])


    async function LogoutUser() {
        logoutUser()
    }

    return (
        <section className="w-full relative bg-slate-900  ">


            <div className="w-5/12  flex justify-start  items-start my-auto top-96 py-10 left-0 absolute  h-svh ">
                <div className="relative w-full h-16 flex justify-start items-start  md:h-36 lg:-left-32 ">
                    <Image data-aos="fade-up" data-aos-delay="500" className="object-contain opacity-100" fill src={maça} alt="Frutas background" />
                </div>
            </div>


            <div className="absolute w-2/12 bg-black h-full mx-auto justify-center items-center mask-image-gradient ">
                <div className="w-32 h-32 z-20 relative m-2 my-16 flex justify-start items-start md:my-2">
                    <Image
                        
                        className="object-cover rounded-full opacity-40"
                        fill
                        quality={100}
                        priority
                        src={logo}
                        alt="Imagem header"
                    />
                </div>
            </div>

            <div className="relative flex w-12/12 justify-end ml-auto h-[400px] z-10 mask-image-gradient md:w-10/12 ">
                <Image
                    className="object-cover"
                    fill
                    quality={100}
                    priority
                    src={treinoHeader}
                    alt="Imagem header"
                />
                <div className="absolute inset-0 opacity-60 bg-black"></div>
            </div>







            <Container>
                <div className="absolute top-0 max-w-7xl p-1 flex justify-center items-center  w-full z-30 md:flex-row">
                    <div className=" relative w-full gap-12 z-20  flex justify-center items-start  px-2 mx-auto max-w-7xl font-bold text-white  md:flex-row">
                        <button id="planos">Planos</button>
                        <button id="planos">Planos</button>
                        <button id="planos">Planos</button>
                        <button id="planos">Planos</button>


                    </div>
                    <div className="relative flex z-20 w-fit text-white justify-end px-2  max-w-7xl">
                        {hasUser ? <div className="flex gap-10">
                            <Link href={"/dashboard"}>
                                <button><User2 /></button>
                            </Link>

                            <Link href={"/dashboard"}>
                                <button onClick={LogoutUser}><LogOut /></button>
                            </Link>
                        </div>

                            : <Link href={"/login"}>
                                <button><LogIn /></button>
                            </Link>}
                    </div>
                </div>

            </Container>
        </section>
    )
}