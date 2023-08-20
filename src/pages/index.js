import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '../components/Header'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import ProdFeatures from '@/components/ProdFeatures'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <main className='' >

        <section className="hero flex justify-center align-middle flex-col">

          <Header />
          <Hero />

        </section>

        <section className="features bg-white flex">

          <Features />

        </section>

        <section className="prod-features bg-white flex">

          <ProdFeatures />

        </section>

      </main>
    </>
  )
}
