
import Image from "next/image"
import { Facebook, Instagram } from "lucide-react"
import { BsWhatsapp } from "react-icons/bs"




export function Footer() {
    return (
        <section className=" relative bg-black">
            <div className="container mx-auto">
                <div className="text-white mx-auto  flex justify-center">





                    <div className="grid grid-cols-1 w-full items-center justify-center py-5 px-3 border-t-gray-200 border-opacity-35 border-t gap-6 md:grid-cols-2 lg:grid-cols-3 text-white">


                        <div className=" flex flex-col items-center justify-center gap-2  ">
                            <h3 className="text-2xl font-bold">Consutoria Seya</h3>

                            <p>Extraindo seu potencial máximo.</p>

                            <a className="py-1 px-3 w-fit bg-green-500 rounded-md">Contato via WhatssApp</a>
                        </div>


                        <div className=" flex flex-col items-center justify-center  ">
                            <h3 className="text-2xl font-bold">Contatos</h3>

                            <p>Email: teste@teste.com</p>
                            <p>Telefone: (xx) 97678-8673</p>
                            <p>Endereço: Rua Tal, 190, centro, Sbc</p>


                        </div>

                        <div className=" flex flex-col items-center justify-center  ">
                            <h3 className="text-2xl font-bold">Redes sociais</h3>

                            <div className="flex gap-3 mt-2">
                                <Facebook size={16} />
                                <Instagram size={16} />
                                <BsWhatsapp size={16} />
                            </div>



                        </div>



                    </div>
                </div>

            </div>

        </section>
    )
}