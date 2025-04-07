import { Container } from "../container";
import { Grid } from "./_components/grid";
import abs1 from "../../../../public/abs1.webp"

import fruta1 from "../../../../public/testeFrutas/maça-1.png"
import banana1 from "../../../../public/testeFrutas/banana-01.jpeg"
import banana2 from "../../../../public/testeFrutas/banana02.webp"
import pera1 from "../../../../public/testeFrutas/peraReal.png"
import morango from "../../../../public/testeFrutas/MorangoReal.jpg"


import treino1 from "../../../../public/treino1.jpg"
import Image from "next/image";


export function Planos() {
    return (

        <>

            <div className="relative w-full">




                <div id="planos" className="w-3/12  flex justify-start  items-start -top-36 right-0  absolute h-svh ">
                    <div data-aos="fade-up" data-aos-delay="500" className="flex relative w-full h-36  justify-start items-start  md:h-96">
                        <Image className="object-contain hidden border-none opacity-100" fill src={pera1} alt="Frutas background" />
                    </div>
                </div>

                <div id="planos" className="w-3/12  flex justify-start  items-start  -top-20 left-0 absolute h-svh ">
                    <div data-aos="fade-up" data-aos-delay="500" className="flex relative w-full h-36  justify-start items-start  md:h-36">
                        <Image className="object-contain hidden border-none opacity-100" fill src={morango} alt="Frutas background" />
                    </div>
                </div>



                <Container>
                    <section className="mt-36 mb-64 px-2 relative z-20 ">


                        <article className="text-black w-full  ">
                            <h1 className="text-2xl font-bold mb-4 text-center font-serif md:text-4xl">Planos</h1>
                            <div className="flex z-20 w-full justify-center relative ">
                                <Grid imagem={treino1} plano="Consultoria" valor="R$1900" porcentagem="5" />


                            </div>
                        </article>



                    </section>

                </Container>
            </div>

        </>
    )
}