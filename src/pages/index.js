import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '../components/Header'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import ProdFeatures from '@/components/ProdFeatures'
import DarkProdFeatures from '@/components/DarkProdFeatures'
import Card from '@/components/Card'
import SectionHeader from '@/components/SectionHeader'
import Blog from '@/components/Blog'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <main className='' >

        <section className="hero flex justify-center align-middle flex-col">

          <Header />
          <Hero />

        </section>

        <section className="features bg-white flex"> <Features /> </section>

        <section className="prod-features bg-white flex"> <ProdFeatures /> </section>

        <section className="dark-prod-features  bg-[#151B28] flex"> <DarkProdFeatures /> </section>

        <div className="flex border flex-col justify-center items-center  bg-white"> 

          <Card  /> 

          <Blog/>

        </div>

      </main>
    </>
  )
}
