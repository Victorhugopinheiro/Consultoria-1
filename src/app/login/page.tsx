"use client"
import Head from "next/head";
import { Container } from "../_components/container";
import { Input } from "./_component";
import Link from "next/link";
import { api } from "@/services/apiClient";
import { cookies } from "next/headers";
import React, { useContext, useState } from "react";
import { AuthContext } from "@/context/user/AuthContext";

import { redirect } from "next/navigation"
import { toast } from "sonner";





export default function Login() {
  const { signIn } = useContext(AuthContext)

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")




  async function handleLogin(formData:FormData) {

    const email = formData.get("email")
    const password = formData.get("password")

    if(!email || !password){
      console.log("Campos invalidos")
      return
    }

    try {
      signIn({
        email,
        password
      })
    }
    catch (err) {
      console.log(err)
      toast("Erro",{
        duration:5000
      })
      return
    }
  }

  return (


    <Container>
      <Head>
        <title className="">ENTRAR</title>
      </Head>
      <section className="flex bg-slate-900 text-white justify-center items-center h-svh  ">
        <div className="flex justify-center items-center flex-col gap-3 w-full ">
          <h1 className="text-xl font-bold md:text-2xl lg:text-3xl">ENTRAR</h1>

          <form action={handleLogin} className="flex flex-col w-full gap-3 justify-center items-center px-6 ">
            <input name="email" placeholder={"Email"} onChange={(e) => setEmail(e.target.value)} value={email} className="h-12 w-10/12 mb-2 py-1 px-2 decoration-none bg-slate-700 rounded-md md:w-2/5 ">
            </input>

            <input name="password" placeholder={"Senha"} onChange={(e) => setPassword(e.target.value)} value={password} className="h-12 w-10/12 mb-2 py-1 px-2 decoration-none bg-slate-700 rounded-md md:w-2/5  ">
            </input>




            <button type="submit" className="h-12 w-10/12 font-bold mb-2 py-1 px-2 decoration-none bg-slate-500 rounded-md 
                    hover:scale-105 duration-300 md:w-2/5 ">Entrar</button>
          </form>


          <p className="text-slate-300">Ainda não possui conta? <Link className="font-bold text-white" href={"/register"}>Cadastre-se</Link></p>


        </div>
      </section>
    </Container>
  )
}