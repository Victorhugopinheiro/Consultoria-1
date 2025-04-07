

import { Container } from "@/app/_components/container"

import { api } from "@/services/apiClient"
import { getCookieServer } from "@/lib/cookieServer"

import { MyConsultoria } from "./Component/infoConsultoria"
import { HeaderSmall } from "@/app/_components/header/component/HeaderSmall"
import { Footer } from "@/app/_components/footer"



export default async function Detail() {


    const token = await getCookieServer()

    async function control() {
        try {
            const response = await api.get("/me", {
                headers: {
                    Authorization: `Bearer ${token}`
                }

            })

            return response.data.userDetail
        } catch (err) {
            console.log("Usuário não logado")
        }
    }
    const response = await control()




    return (

        <>
            <HeaderSmall meHeader={response ? response : false} />
            <Container>
                <MyConsultoria />
            </Container>
            <Footer/>

        </>

    )
}