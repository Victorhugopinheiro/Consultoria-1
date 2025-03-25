import { cookies } from "next/headers";


export async function getCookieServer() {
const cookieAsync = await cookies();

const token = cookieAsync.get("@consultoria")?.value


return token || null
}