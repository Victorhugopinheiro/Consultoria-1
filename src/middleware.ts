import { NextRequest, NextResponse } from "next/server";
import { getCookieServer } from "./lib/cookieServer";
import { api } from "./services/apiClient";



export async function middleware(req: NextRequest) {

    console.log("Passou na middleware")

    const { pathname } = req.nextUrl

    if (pathname.startsWith("/_next") || pathname === "/") {
        NextResponse.next()
    }

    const token = await getCookieServer()

    if (pathname.startsWith("/dashboard")) {
        if (!token) {
            return NextResponse.redirect(new URL("/", req.url))
        }
    }


    if (pathname.startsWith("/login") || pathname.startsWith("/register")) {
        if (token) {
            return NextResponse.redirect(new URL("/", req.url))
        }
    }



    validateToken(token)


    if (!validateToken) {
        return NextResponse.redirect(new URL("/", req.url))
    }

    return NextResponse.next()
}


async function validateToken(token: string) {
    if (!token) return false

    try {
        await api.get("/me", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        return true
    } catch (err) {
        return false
    }
}

