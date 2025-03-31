"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"
import tutor1 from "../../../../public/evolução-1.webp"
import tutor2 from "../../../../public/evolução-2.jpg"
import tutor3 from "../../../../public/evolução-3.jpg"


import useEmblaCarousel from "embla-carousel-react"
import Image from "next/image"



export function Services() {

    const testimonials = [
        {
            content:
                "Perdi 10 kg e ganhei músculos! Consultoria incrível .",
            author: "Mariana Souza",
            role: "Acompanhada por Marcos Seya",
            image: tutor1,
        },
        {
            content:
                "Energia renovada e 8 kg a menos. Nunca me senti tão bem!",
            author: "Rafael",
            role: "Acompanhada por Julia",
            image: tutor2,
        },
        {
            content: "Transformação total! Mais força e menos 5 kg em 3 meses.",
            author: "Camila fernandes",
            role: "Acompanhada por Fernanda",
            image: tutor3,
        },
    ]


    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: false,
        align: "start",
        slidesToScroll: 1,

    })

    function scrollPrev() {
        emblaApi?.scrollPrev()
    }

    function scrollNext() {
        emblaApi?.scrollNext()
    }







    return (
        <section id="depoimentos" className="bg-slate-300 py-10 my-16  text-black">
            <div className="container mx-auto px-4">
                <h1 className="text-2xl text-center font-serif font-bold mb-6 md:text-3xl lg:text-4xl">Depoimentos dos nossos clientes</h1>
                <div className="relative">
                    <div className="overflow-hidden" ref={emblaRef}>
                        <div className="flex">
                            {testimonials.map((item, index) => (
                                <div key={index} className="flex-[0_0_100%] min-w-0 px-3 lg:flex-[0_0_calc(100%/2)] ">

                                    <article className=" px-6 bg-black flex flex-col items-center p-6 space-y-6 h-full text-white rounded-2xl ">

                                        <div className="flex gap-3 w-full ">
                                            <div className="flex flex-1 h-48 relative p-3 md:flex-1 md:h-64  lg:flex-1  lg:h-64">

                                                <Image alt="Imagem cliente" src={item.image} quality={100} priority fill className=" object-cover rounded-md " />


                                            </div>



                                        </div>


                                        <div className="text-center md:w-3/4 ">


                                            <p>{item.content}</p>
                                        </div>


                                        <div className=" flex flex-col  items-center gap-1">

                                            <p className="font-bold">{item.author}</p>
                                            <p>{item.role}</p>

                                        </div>


                                        <div className="flex justify-end w-full font-bold">
                                            <p>- Em 3 meses</p>
                                        </div>


                                    </article>

                                </div>
                            ))}

                        </div>

                    </div>


                    <button className="bg-gray-800 absolute text-white rounded-full flex justify-center items-center p-2 -translate-x-1/2  -translate-y-1/2 top-1/2 left-3  " onClick={scrollPrev}>
                        <ChevronLeft className="w-6 h-6 " />
                    </button>

                    <button className="bg-gray-800 absolute text-white rounded-full flex justify-center items-center p-2 -translate-x-1/2  -translate-y-1/2 top-1/2 -right-6  " onClick={scrollNext}>
                        <ChevronRight className="w-6 h-6 " />
                    </button>

                </div>
            </div>
        </section>
    )


}