import { getCookie } from "cookies-next";

export async function getCookieClient() {
    
    const token = getCookie("@consultoria")

    return token
}