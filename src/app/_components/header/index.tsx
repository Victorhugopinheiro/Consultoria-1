import { getCookieServer } from "@/lib/cookieServer";
import { MyHeader } from "./component/myHeader";
import { api } from "@/services/apiClient";




export async function Header() {
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
        <MyHeader meHeader={token ? response : false} />
    )
}