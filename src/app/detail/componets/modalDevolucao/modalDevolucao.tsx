import { AuthContext } from "@/context/user/AuthContext";
import { ShieldClose } from "lucide-react";
import { useContext } from "react";
import { BsDoorClosed } from "react-icons/bs";
import { LuDoorClosed } from "react-icons/lu";

export function ModalDevolucao() {

    const { closeButton, height } = useContext(AuthContext)

    return (
        <div className={!height ? "absolute mx-auto flex justify-center max-w-7xl w-full h-full top-36 z-40 px-1" : "absolute mx-auto flex justify-center max-w-7xl w-full h-full top-36 z-40 px-1"}>
            <div className={!height ? "w-full h-3/4 sticky top-10 bg-slate-900 text-white rounded-md p-2 flex flex-col justify-center items-center md:w-4/5 lg:w-3/4" : "w-full h-3/4 sticky top-10 bg-slate-900 text-white rounded-md p-2 flex flex-col justify-center items-center md:w-5/5  lg:h-4/5"}>
                <div className="flex justify-end w-full">
                    <button className="flex justify-end" onClick={closeButton}><ShieldClose /></button>
                </div>
                <div className="flex justify-center w-full items-center gap-16 p-2 ">
                    <h1 className="text-3xl text-center font-bold">Prazo de devolução </h1>


                </div>
                <div className="flex flex-col gap-6  h-full">
                    <p className="text-1xl border-t border-slate-800 py-1">O prazo para desistir é de 7 dias corridos, a contar do recebimento do produto ou da assinatura do contrato </p>

                    <p className="text-1xl border-t border-slate-800 py-1">Não é necessária justificativa para a desistência  </p>

                    <p className="text-1xl border-t border-slate-800 py-1">
                        Não há custos adicionais para o consumidor  </p>

                    <p className="text-1xl border-t border-slate-800 py-1">
                        O consumidor tem direito à devolução integral do valor pago, incluindo frete  </p>
                </div>

                <p className="text-slate-400 text-sm">
                    A lei da devolução está prevista no Código de Defesa do Consumidor (CDC), Lei nº 8.078, de 11 de setembro de 1990.
                </p>
            </div>
        </div>
    )
}