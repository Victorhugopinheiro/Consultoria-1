"use client"

import { Container } from "@/app/_components/container";
import { ButtonChange } from "../buttonChange";
import { useContext, useState } from "react";
import logo from "../../../../../public/color@4x.png"
import Image from "next/image";
import { api } from "@/services/apiClient";
import { toast } from "sonner";
import { AuthContext } from "@/context/user/AuthContext";


interface Me {
    email: string,
    name: string,
    id: string,
    endereço: string
    telefone: string
    subscriptions: string
}

export function FormDashboard({ me }: { me: Me }) {


    const { logoutUser } = useContext(AuthContext)


    const [email, setEmail] = useState(me.email ? me.email : "")
    const [telefone, setTelefone] = useState(me.telefone ? me.telefone : "")
    const [endereco, setEndereco] = useState(me.endereço ? me.endereço : "")




    async function changeInfoUser() {
        if (email === "" || telefone === "") {
            console.log("Preencha os dados")
            toast.warning("Preencha todos o campos")
            return
        }

        if (email === me.email && telefone === me.telefone) {
            toast.warning("Nenhum dado alterado")
            console.log(email, telefone)
            return
        }

        try {
            const response = await api.put("/users", {
                email,
                telefone,
                endereco
            })
            toast.success("Informações alteradas")
        } catch (err) {
            console.log(err)
        }


    }








    return (


        <div className="flex w-full  justify-center items-center h-full">
            <section className="w-10/12 flex justify-center  h-full mt-28 md:w-full">

                <div className="bg-white rounded-md w-10/12 px-2  py-10 flex flex-col items-center md:h-[590px]">

                    <h2 className="text-black font-serif text-xl p-3 font-bold md:2xl: lg:text-3xl">Detalhes</h2>

                    <input placeholder={"Ex: Email@gmail.com"} value={email} onChange={(e) => setEmail(e.target.value)} className="bg-slate-200 border border-black h-12 w-full mb-2 py-1 px-2 decoration-none  rounded-md md:w-6/12   ">
                    </input>

                    <input placeholder={"Ex: 11 934517489"} value={telefone} onChange={(e) => setTelefone(e.target.value)} className="bg-slate-200 border border-black h-12 w-full mb-2 py-1 px-2 decoration-none  rounded-md md:w-6/12   ">
                    </input>

                    <input placeholder={"ex: Rua das Bandeiras, 215"} value={endereco} onChange={(e) => setEndereco(e.target.value)} className="bg-slate-200 border border-black h-12 w-full mb-2 py-1 px-2 decoration-none  rounded-md md:w-6/12  ">
                    </input>




                    <button onClick={changeInfoUser} type="submit" className="h-12 w-full font-bold mb-2 py-1 px-2 decoration-none bg-black text-white rounded-md md:w-6/12
                    hover:scale-105 duration-300">Alterar Informações</button>

                    <button onClick={logoutUser} type="submit" className="h-12 w-full font-bold mb-2 py-1 px-2 decoration-none text-white bg-red-600 border border-black rounded-md md:w-6/12
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