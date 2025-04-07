
import { useContext, useEffect, useState } from "react";
import { Container } from "../_components/container";
import { AuthContext } from "@/context/user/AuthContext";

import { api } from "@/services/apiClient";
import { getCookieClient } from "@/lib/cookieClient";
import { setupAPIClient } from "@/services/api";
import { ButtonChange } from "./components/buttonChange";
import { FormDashboard } from "./components/form";
import { getCookieServer } from "@/lib/cookieServer";
import { Plano } from "./components/plano";
import { Footer } from "../_components/footer";
import { HeaderSmall } from "../_components/header/component/HeaderSmall";


export default async function Dashboard() {
    const token = await getCookieServer()


    const response = await api.get("/me", {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })


    console.log(response.data.userDetail)
    return (
        <>
            <HeaderSmall meHeader={response.data.userDetail}/>
            <Container>
                <div className="flex w-full h-full  justify-center  lg:h-full">
                    <div className=" w-full grid grid-cols-1 gap-6 md   md:grid-cols-2">
                        <FormDashboard me={response.data.userDetail} />
                        <Plano me={response.data.userDetail} />
                    </div>
                </div>
                
            </Container>
            <Footer/>
        </>

    )
}