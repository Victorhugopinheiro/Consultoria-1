'use client'

import Image from "next/image";
import { Container } from "../container";
import treinoHeader from "../../../../public/Treinoheader2.0.jpg"
import { LogIn, LogOut, User2 } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import { api } from "@/services/apiClient";
import Link from "next/link";
import { AuthContext } from "@/context/user/AuthContext";

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

            }catch(err){
                console.log(err.message)
            }
        }


        me()
    }, [])


    async function LogoutUser() {
        logoutUser()
    }

    return (
        <section className="w-full relative ">

            <div className="  w-auto h-[400px]">
                <Image className="object-cover" fill quality={100} priority src={treinoHeader} alt="Imagem header" />
                <div className="absolute inset-0 opacity-60 bg-black "></div>
            </div>




            <Container>
                <div className="">
                    <div className="w-full gap-12 flex justify-center items-start top-1 px-2 mx-auto max-w-7xl text-white  absolute md:flex-row">
                        <button id="planos">Planos</button>
                        <button id="planos">Planos</button>
                        <button id="planos">Planos</button>
                        <button id="planos">Planos</button>


                    </div>
                    <div className="absolute flex top-1 text-white justify-end px-2 w-full max-w-7xl">
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
                <div className="top-1 flex justify-center w-full text-white">





                </div>
            </Container>
        </section>
    )
}