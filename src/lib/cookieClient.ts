import { getCookie } from "cookies-next";

export async function getCookieClient() {
    
    const token = await getCookie("@consultoria")

    return token
}