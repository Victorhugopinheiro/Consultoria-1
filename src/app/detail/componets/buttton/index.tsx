"use client"

import { getCookieClient } from "@/lib/cookieClient"
import { getStripeJs } from "../../../../services/stripe-js"

import { api } from "@/services/apiClient"
import { setupAPIClient } from "@/services/api"

export function Button() {

    const buyItem = async () => {

        const token = await getCookieClient()

        try {
            const apiClient = setupAPIClient()


            const response = await apiClient.post("/subscribe")


            const { sessionId } = response.data


            const stripe = await getStripeJs()
            await stripe.redirectToCheckout({ sessionId: sessionId })





        } catch (err) {
            console.log(err)
        }
    }

    return (

        <div className="flex justify-center h-full w-full">
            <div className=" cursor-pointer  w-full flex justify-center mt-6 rounded-md bg-green-500 hover:scale-105 duration-300 font-bold  md:w-full">
                <button className="w-full h-full py-3 px-6 rounded-md" type="submit">Comprar</button>
            </div>
        </div>
    )
}