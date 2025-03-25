"use client"

import { StaticImageData } from "next/image";
import { createContext, ReactNode, useState } from "react";

interface CompraProps {
    itemsCompra: PropsGrid | undefined
    setItems: (item:PropsGrid) => void;
}

interface PropsGrid {
    
    plano: string;
    valor: string;
    imagem: string | StaticImageData


}



export const OrderContext = createContext({} as CompraProps)

export function OrderProvider({ children }: { children: ReactNode }) {

    const [itemsCompra, setItemsCompra] = useState<PropsGrid>()

    function setItems(items:PropsGrid){
        setItemsCompra(items)
    }

    return (
        <OrderContext.Provider value={{ itemsCompra, setItems }}>
            {children}
        </OrderContext.Provider>
    )

}