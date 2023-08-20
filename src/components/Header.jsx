import Link from "next/link"
import Image from "next/image"
import { Inter } from "next/font/google"

import downIcon from '../../public/assets/chevron-down.svg'

export default function Header() {
  return (
    <>

        <div className="header-container  flex justify-between align-middle py-[20px] px-[160px] font-medium text-[15px]">

            <div className="text-inp-container  w-fit flex justify-between align-middle gap-[64px]">
            
                <div className="comp-logo  h-[40px] w-[160px] relative ">
                    <Image src='/assets/CompanyLogo.svg' layout="fill" objectFit='contain' />
                </div>

                <div className="text-inp  flex justify-center align-middle gap-[32px]">
                    <button> <Link className="flex justify-center" href="#">Home</Link> </button>
                    <button> <Link className="flex justify-center" href="#">Our Products</Link> </button>
                    <button> <Link className="flex justify-center" href="#">
                                Resources 
                                <Image className="ml-[8px]" src={downIcon} width={20} height={20} />
                             </Link> 
                    </button>
                    <button> <Link className="flex justify-center" href="#">Contacts</Link> </button>
                </div>

            </div>

            <div className="buttons w-fit flex justify-center align-middle gap-[24px]">
                <button className="bg-transparent " > <Link href="#" >Log in</Link> </button>
                <button className="btn" > <Link href="#" >Sign up</Link> </button>
            </div>


        </div>

    </>
  )
}
