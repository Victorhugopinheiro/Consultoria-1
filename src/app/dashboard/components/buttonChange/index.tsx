"use client"

import { api } from "@/services/apiClient";

async function handleCreatePortal() {

    console.log("testeeeeeee")


    const response = await api.post("/create-portal")
    console.log(response.data)

    const {sessionId} = response.data

    window.location.href = sessionId



}

export function ButtonChange() {
    return (
        <button type="submit" onClick={handleCreatePortal} className="h-12 w-10/12 font-bold mb-2 py-3 px-4 decoration-none bg-black text-white rounded-md 
                    hover:scale-105 duration-300">Mudar Plano</button>
    )
}