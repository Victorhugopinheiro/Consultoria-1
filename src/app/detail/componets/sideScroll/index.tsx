import useEmblaCarousel from "embla-carousel-react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image, { StaticImageData } from "next/image"
import ImagemConsultoria from "../../../../../public/testeFrutas/consultoria01.jpg"
import ImagemConsultoria2 from "../../../../../public/prof-2.jpg"
import ImagemConsultoria3 from "../../../../../public/testeFrutas/consultoria03.jpeg"
import { useEffect, useState } from "react"





export function SideScroll() {

    const testimonials = [
        {

            role: "Acompanhada por Marcos Seya",
            foto: ImagemConsultoria
        },
        {

            role: "Acompanhada por Julia",
            foto: ImagemConsultoria2,

        },
        {

            role: "Acompanhada por Fernanda",
            foto: ImagemConsultoria3,

        },
    ]


   




    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: false,
        align: "start",
        slidesToScroll: 1
    })

    function scrollPrev() {
        emblaApi?.scrollPrev()
    }

    function scrollNext() {
        emblaApi?.scrollNext()
    }



    return (
        <section className=" h-full w-full flex justify-start ">
            <div className=" h-full">
                <div className="relative h-full  ">
                    <div className="overflow-hidden h-full" ref={emblaRef}>
                        <div className="flex  h-full ">
                            {testimonials.map((item) => (
                                <section className=" flex-[0_0_100%] min-w-0  lg:flex-[0_0_100%]" key={item.role}>

                                   

                                    <div className="flex flex-1 h-full  ">
                                        <Image className="object-cover rounded-[6px_0px_0px_6px]" priority quality={100} src={item.foto} alt="Imagem Ilustrativa" />
                                    </div>

                                </section>
                            ))}
                        </div>
                    </div>



                    <button className="bg-gray-600 absolute text-white rounded-full flex justify-center items-center p-2 -translate-x-1/2  -translate-y-1/2 top-1/2 left-3  " onClick={scrollPrev}>
                        <ChevronLeft className="w-6 h-6 " />
                    </button>

                    <button className="bg-gray-600 absolute text-white rounded-full flex justify-center items-center p-2 -translate-x-1/2  -translate-y-1/2 top-1/2 -right-5  " onClick={scrollNext}>
                        <ChevronRight className="w-6 h-6 " />
                    </button>
                </div>
            </div>
        </section>
    )
}