import SectionHeader from "./SectionHeader";
import Company1 from '../../public/assets/CompanyLogo-1.png'
import Company2 from '../../public/assets/CompanyLogo-2.png'
import Company3 from '../../public/assets/CompanyLogo-3.png'
import Company4 from '../../public/assets/CompanyLogo-4.png'
import CompanyLogo from '../../public/assets/CompanyLogo.png'
import PressLogo from '../../public/assets/PressLogo.png'

import tick from '../../public/assets/tick.png'

import Image from "next/image";




export default function EndSection() {

  const companies = [PressLogo, CompanyLogo, Company1, Company2, Company3, Company4]

  return (
    <>
      <div className="flex justify-center items-center flex-col w-full gap-[64px]">

        <SectionHeader title={'Proud to Be Used By'} subtitle={'Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art customer service.'} />

        <div className="flex">

          {

            companies.map((logo) => {

              return (
                <div className="w-[128px] h-[32px] relative" >
                  <Image src={logo} layout="fill" objectFit="cover" />
                </div>
              )

            })

          }

        </div>

        <div className=" call-to-action h-[50%] flex justify-center items-center flex-col bg-[#FAFBFC] w-full py-[64px]">

          <p className="text-[#437EF7]" >1% OF THE INDUSTRY</p>

          <h2 className="mb-[32px]" >Welcome to your new digital reality that will rock your world truly at all throughout.</h2>

          <div className="border  rounded-md overflow-hidden pl-[6px] bg-white flex justify-between items-center w-[30%]" >

            <input type="text" className=" text-black outline-none bg-transparent w-full" placeholder="Enter your email" name="" id="" />

            <button className="bg-[#437EF7] p-[6px] " >Submit</button>

          </div>

          <div className="flex  justify-center items-center gap-[40px] ">

            <div className="flex justify-center items-center flex-row" >

              <Image className="mr-[12px]" src={tick} width={20} height={20} />
              <h2 className="text-[#272D37] font-medium" > Fully Secure </h2>

            </div>

            <div className="flex justify-center items-center flex-row" >

              <Image className="mr-[12px]" src={tick} width={20} height={20} />
              <h2 className="text-[#272D37] font-medium" > 24/7 Support </h2>

            </div>

            <div className="flex justify-center items-center flex-row" >

              <Image className="mr-[12px]" src={tick} width={20} height={20} />
              <h2 className="text-[#272D37] font-medium" > Done Deal </h2>

            </div>

          </div>

        </div>

      </div>
    </>
  )
}
