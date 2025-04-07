"use client"
import Image from "next/image";
import logo from "../../../../../../public/color@4x.png"
import Link from "next/link";
import { LogIn, LogOut, User2 } from "lucide-react";
import { useContext, useState } from "react";
import { AuthContext } from "@/context/user/AuthContext";

interface Me {
    email: string,
    name: string | null | undefined,
    id: string,
    endereço: string
    telefone: string
    subscriptions: string
}

export function HeaderSmall({ meHeader }: { meHeader: Me }) {

    const { logoutUser } = useContext(AuthContext)
    const [user, setUSer] = useState("")
    const [hasUser, setHasUser] = useState(meHeader ? true : false)





    async function LogoutUser() {
        logoutUser()
    }


    return (
        <div className="w-full bg-white h-full mb-10 shadow-lg shadow-gray-500">
            <div className="w-full h-full flex justify-between p-1">
                <div className="flex flex-col  p-1 gap-2 h-full justify-center items-center">
                    <Link className="flex justify-center items-center flex-col gap-2" href={"/"}>
                        <p className="text-black text-xl font-bold md:text-2xl">Consultoria</p>
                        <div className="relative w-24 h-full   flex flex-col justify-center items-center md:w-36 ">
                            <Image className="object-contain" src={logo} alt="Logo" />
                        </div>
                    </Link>
                </div>
                <div className="w-full h-full flex pl-4 text-white  md:w-7/12">
                    <div className="flex w-full  justify-center gap-3  items-center md:gap-5 md:justify-start lg:gap-8">
                        <div className="w-10/12 flex justify-center gap-4 md:gap-6 md:justify-start lg:gap-8">
                            {hasUser ? <>
                                <Link href="/" className="transition-all duration-500">
                                    <button className="font-bold text-black">Home</button>
                                </Link>

                                <Link href="/detail/Consultoria" className="transition-all duration-500">
                                    <button className="font-bold text-black">Planos</button>
                                </Link>

                                <Link href="/dashboard" className="transition-all duration-500">
                                    <button className="font-bold text-black">Minha conta</button>
                                </Link>
                                <a href="#contatos" className="transition-all duration-500">
                                    <button className="font-bold text-black">Contato</button>
                                </a>
                            </> :
                                <>
                                    <Link href="/" className="transition-all duration-500">
                                        <button className="font-bold text-black">Home</button>
                                    </Link>

                                    <Link href="/Consultoria" className="transition-all duration-500">
                                        <button className="font-bold text-black">Planos</button>
                                    </Link>

                                    <a href="#contatos" className="transition-all duration-500">
                                        <button className="font-bold text-black">Contatos</button>
                                    </a>
                                </>}
                        </div>




                        <div className="relative flex z-20 w-6/12 px-2  text-white justify-start items-centermax-w-7xl">
                            {hasUser ?
                                <div className="flex justify-center items-center gap-4 md:gap-6 lg:gap-8">
                                    <Link className="flex justify-center items-center" href={"/dashboard"}>
                                        <button><User2 className="size-5 md:size-6" color="black" /></button>
                                    </Link>



                                    <button onClick={LogoutUser}><LogOut color="black" className="size-5 md:size-6" /></button>

                                </div>
                                :
                                <Link className="flex justify-center items-center" href={"/login"}>
                                    <button><LogIn className="size-5 md:size-6" color="black" /></button>
                                </Link>}

                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}