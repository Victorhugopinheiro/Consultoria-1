import Image from "next/image";
import { Header } from "./_components/header";
import { Container } from "./_components/container";
import { Planos } from "./_components/planos";
import { About } from "./_components/about";
import { Services } from "./_components/services";
import { Footer } from "./_components/footer";

export default function Home() {
  return (

  
      
     <>
       <Header/>
        <Planos/>
        <About/>
        <Services/>
        <Footer/>
     </>
 
   

  )
}
