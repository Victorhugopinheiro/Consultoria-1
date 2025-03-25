"use client"
import { useContext, useEffect, useState } from "react";
import { Container } from "../_components/container";
import { AuthContext } from "@/context/user/AuthContext";

import { api } from "@/services/apiClient";




export default function Dashboard() {

    const { user, logoutUser } = useContext(AuthContext)

    const [email, setEmail] = useState("")
    const [telefone, setTelefone] = useState("")
    const [endereco, setEndereco] = useState("")

    useEffect(() => {
        async function getUSer() {



            const response = await api.get("/me")



            setEmail(response.data.userDetail.email)
            setTelefone(response.data.userDetail.telefone)
            setEndereco(response.data.userDetail.endereço ? response.data.userDetail.endereço : "")

            console.log(response.data)


        }

        getUSer()
    }, [])






    async function logOut() {
        logoutUser()
    }


    async function handleCreatePortal() {

        console.log("testeeeeeee")

        try {

            const response = await api.post("/create-portal")

            

            if (response.data && response.data.sessionId) {
                console.log("Certooooooooooooooooooooooooooooooooooooooooooooooooooooooo")
                const { sessionId } = response.data;

                console.log(sessionId)

                window.location.href = sessionId;



            } else {
                console.log("falhouuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu")
            }



        } catch (err) {
            console.error("Erro ao criar portal:", err);

        }

    }



    return (

        <Container>
            <div className="flex w-full justify-center items-center h-full">
                <section className="w-full grid grid-cols-2 h-full mt-28">

                    <div className="bg-slate-900 rounded-md py-16 flex flex-col justify-center items-center ">
                        <h2 className="text-white text-2xl p-3 font-bold">Detalhes</h2>
                      
                            <input placeholder={"Ex: Email@gmail.com"} onChange={(e) => setEmail(e.target.value)} value={email} className="h-12 w-10/12 mb-2 py-1 px-2 decoration-none  rounded-md   ">
                            </input>

                            <input placeholder={"Ex: 11 934517489"} onChange={(e) => setTelefone(e.target.value)} value={telefone} className="h-12 w-10/12 mb-2 py-1 px-2 decoration-none bg-s late-700 rounded-md   ">
                            </input>

                            <input placeholder={"ex: Rua das Bandeiras, 215"} onChange={(e) => setEndereco(e.target.value)} value={endereco} className="h-12 w-10/12 mb-2 py-1 px-2 decoration-none bg-s late-700 rounded-md   ">
                            </input>




                            <button type="submit" onClick={handleCreatePortal} className="h-12 w-10/12 font-bold mb-2 py-1 px-2 decoration-none bg-slate-500 rounded-md 
                    hover:scale-105 duration-300">Entrar</button>

                            <button type="submit" className="h-12 w-10/12 font-bold mb-2 py-1 px-2 decoration-none bg-slate-500 rounded-md 
                    hover:scale-105 duration-300" onClick={logOut}>Sair</button>
                     
                    </div>


                    <div>

                    </div>
                </section>
            </div>
        </Container>

    )
}