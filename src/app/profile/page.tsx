"use client"

import { api } from "@/services/apiClient"
import { Container } from "../_components/container"

import { useState } from "react";
import { getCookieClient } from "@/lib/cookieClient";
import { headers } from "next/headers";


interface UserProps {
    name: string;
    email: string;
    telefone: string
    id: string
    subscriptions: null
}

export default function Profile() {

    const [userName, setUserName] = useState("")
    const [userEmail, setUserEmail] = useState("")
    const [userTelefone, setUserTelefone] = useState("")


    async function Me() {


        try {
            const token = await getCookieClient()

           const response = await api.get("/me", {
            headers:{
                Authorization:token
            }
           })

           setUserName(response.data.name)
          

        } catch (err) {
            console.log(err)
        }



    }

    Me()



   

    return (
        <Container>
            <div className="px-2 max-w-4xl w-full">
                <h1 className="text-3xl text-orange-400 font-bold font-sans mb-2">Minha conta</h1>
                <div className="w-full p-4 bg-gray-800 flex justify-center items-center">
                    <div className="max-w-2xl w-full flex flex-col text-white">
                        <h2 className="text-white font-bold">Nome</h2>
                        <input
                            value={userName ? userName : ""}
                            onChange={(e) => setUserName(e.target.value)}

                            className="w-full
                        rounded-md p-1 bg-gray-700
                         border-gray-500
                         border py-2 mb-4
                        " placeholder="Nome"></input>

                        <h2 className="text-white font-bold">Email</h2>
                        <input
                            value={userEmail ? userEmail : ""}
                            onChange={(e) => setUserEmail(e.target.value)}
                            className="w-full
                        rounded-md p-1 bg-gray-700
                         border-gray-500
                         border py-2 mb-4
                        " placeholder="Email"></input>

                        <h2 className="text-white font-bold">Telefone</h2>
                        <input
                            value={userTelefone ? userTelefone : ""}
                            onChange={(e) => setUserTelefone(e.target.value)}
                            className="w-full
                        rounded-md p-1 bg-gray-700
                         border-gray-500
                         border py-2 mb-4
                        " placeholder="Telefone"></input>

                        <button className="w-full font-bold rounded-md bg-amber-600 py-3 mb-4 hover:bg-amber-500 duration-300">Salvar</button>
                        <button  className="w-full font-bold rounded-md py-3 border-red-500 text-red-500 border-2">Sair da conta</button>

                    </div>

                </div>
            </div>
        </Container>
    )
}