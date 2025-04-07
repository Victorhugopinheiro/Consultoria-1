import { AuthContext } from "@/context/user/AuthContext"
import { getCookieClient } from "@/lib/cookieClient"
import { setupAPIClient } from "@/services/api"
import { getStripeJs } from "@/services/stripe-js"
import { useContext } from "react"
import { Button } from "../buttton"




export function FormComponent() {


    const { myPlano, contextPlano, openModal, controlModal, closeButton } = useContext(AuthContext)


    const planos = [
        {
            plano: "Mensal"
        },
        {
            plano: "Trimestral"
        },
        {
            plano: "Semestral"
        }
    ]



    function changeValue(e: string) {
        myPlano(e)
    }


    async function handleSubmit(formData: FormData) {

        const select = formData.get("selectName")




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
        <form action={handleSubmit} className=" bg-white w-full h-full">
            <select onChange={(e) => changeValue(e.target.value)} name="selectName" className="border p-2 w-full rounded-md border-gray-500 bg-slate-100 text- mx-auto flex justify-center md:w-full lg:h-full">
                {planos.map((item, index) => (
                    <option value={item.plano} id={item.plano} key={item.plano} className=" w-full rounded-md">{item.plano}</option>
                ))}

            </select>
            <Button />
        </form>
    )
}