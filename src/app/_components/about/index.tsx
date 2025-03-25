import Image from "next/image";
import { Container } from "../container";
import gym from "../../../../public/transferir.jpg"
import alimento from "../../../../public/dieta.jpeg"
import useEmblaCarousel from "embla-carousel-react"
import { Flex, Text } from "@chakra-ui/react";



export function About() {



    return (
        <Container>


            <div className="flex p-6 flex-col justify-center items-center  relative  mb-[340px] mt-72 rounded-md lg:flex-row">


                <div  data-aos="fade-up" data-aos-delay="500"  className="flex z-10 lg:flex-[0_0_calc(100%/2)] text-white  rounded-md lg:-translate-y-28 lg:text-black lg:translate-x-28 ">
                    <article className="max-w-xl flex justify-center items-center p-6 opacity-100  flex-col">
                        <h1 className="text-2xl text-center font-bold z-10  mb-2">Quem somos?</h1>

                        <p  className="  max-w-96 lg:max-w-xl leading-7 text-lg z-10 ">Na consutoria Seya acreditamos que a saúde e o bem-estar são a base de uma vida plena e feliz. Nossa missão é transformar seus objetivos em resultados concretos, oferecendo um serviço personalizado de treino e nutrição.

                            Com uma equipe de especialistas altamente qualificados, criamos planos de treino adaptados às suas necessidades e metas individuais, combinados com orientações nutricionais que potencializam seus resultados. Estamos aqui para guiá-lo em cada passo do caminho, motivando e apoiando você na conquista de uma vida mais saudável e equilibrada.

                            Junte-se a nós e descubra como é possível atingir o máximo do seu potencial com a nossa consultoria de treino e nutrição. Venha transformar sua vida e alcançar seus objetivos de saúde e bem-estar de maneira eficaz e sustentável..</p>


                    </article>

                    <div className="absolute inset-0 opacity-70 rounded-md bg-slate-900 lg:bg-slate-200 ">

                    </div>
                </div>


                <div className=" flex  w-full absolute top-0 justify-center flex-[0_0_calc(100%/2)]   lg:relative lg:translate-y-28 lg:w-10/12 h-full  lg:-translate-x-28">



                    <div data-aos="fade-up" className="relative flex justify-center  items-center w-full h-full lg:h-[400px] ">
                        <Image className="object-cover  rounded-md" fill quality={100} priority src={alimento} alt="Foto de um alimento" />

                        <div className="absolute inset-0 opacity-20 rounded-md bg-slate-900 ">

                        </div>

                    </div>

                </div>



            </div>

        </Container>
    )
}