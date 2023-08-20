import Image from 'next/image'
import HeroImg from '../../public/assets/hero-img.svg'

export default function Hero() {
    return (

        <div className=" hero-container h-[100%] flex justify-between align-middle flex-row  gap-[64px]" >

            <div className="hero-base ml-[112px] flex justify-between align-middle flex-col mt-[48px] mb-[80px]" >

                <div className="hero-content w-fit mt-[48px]">

                    <h1 className="title w-[90%]" >Your Supercharged Design Workflow.</h1>
                    <p className="subtitle mt-[24px]" >We’ve been told it is not possible to overachieve our customers’ expectations. We have not reinvented the wheel, we decided to build upon it.</p>

                    <button className="btn mt-[32px]"> Get Started</button>

                </div>

                <div className="hero-support w-fit  flex justify-start align-middle  flex-col gap-[16px]">

                    <p>Who supports us</p>

                    <div className="comp flex justify-between align-middle gap-[10px]">

                        <Image src={'/assets/gitlab.svg'} height={28} width={112} />
                        <Image src={'/assets/slack.svg'} height={28} width={112} />
                        <Image src={'/assets/netflix.svg'} height={28} width={112} />
                        <Image src={'/assets/paypal.svg'} height={28} width={112} />

                    </div>

                </div>

            </div>

            <div className="hero-img relative h-[100%] w-[70%]">

                <Image src={HeroImg} layout='fill' objectFit="cover" />

            </div>

        </div>
    )
}
