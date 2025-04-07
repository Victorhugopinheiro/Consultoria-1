"use client"

import { Container } from "@/app/_components/container";
import { ButtonChange } from "../buttonChange";
import { useState } from "react";
import logo from "../../../../../public/color@4x.png"
import Image from "next/image";


interface Me {
    email: string,
    name: string,
    id: string,
    endereço: string
    telefone: string
    subscriptions: string
}

export function FormDashboard({ me }: { me: Me }) {


    const [email, setEmail] = useState("")
    const [telefone, setTelefone] = useState("")
    const [endereco, setEndereco] = useState("")


    return (


        <div className="flex w-full  justify-center items-center h-full">
            <section className="w-10/12  h-full mt-28 md:w-full">

                <div className="bg-white rounded-md  py-10 flex flex-col items-center md:h-[590px]">

                    <h2 className="text-black text-xl p-3 font-bold md:2xl: lg:text-3xl">Detalhes</h2>

                    <input placeholder={"Ex: Email@gmail.com"} value={me.email} onChange={(e) => setEmail(e.target.value)} className="bg-slate-200 border border-black h-12 w-10/12 mb-2 py-1 px-2 decoration-none  rounded-md   ">
                    </input>

                    <input placeholder={"Ex: 11 934517489"} value={me.telefone} onChange={(e) => setTelefone(e.target.value)} className="bg-slate-200 h-12 w-10/12 border border-black mb-2 py-1 px-2 decoration-none bg-s late-700 rounded-md   ">
                    </input>

                    <input placeholder={"ex: Rua das Bandeiras, 215"} value={me.endereço ? me.endereço : ""} onChange={(e) => setEndereco(e.target.value)} className="bg-slate-200 border border-black h-12 w-10/12 mb-2 py-1 px-2 decoration-none bg-s late-700 rounded-md   ">
                    </input>




                    <button type="submit" className="h-12 w-10/12 font-bold mb-2 py-1 px-2 decoration-none bg-black text-white rounded-md 
                    hover:scale-105 duration-300">Alterar Informações</button>

                    <button type="submit" className="h-12 w-10/12 font-bold mb-2 py-1 px-2 decoration-none text-white bg-red-600 border border-black rounded-md 
                     hover:scale-105 duration-300">Sair</button>

                    <div className=" w-full flex px-10 justify-end items-end">
                        <div className="w-36 h-36 flex justify-end items-end">
                            <Image className="object-contain" src={logo} alt="Logo" />
                        </div>
                    </div>
                </div>



            </section>
        </div>

    )
}