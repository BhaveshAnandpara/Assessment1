import Image from 'next/image'
import logo from '../../public/assets/CompanyLogoDark.png'
import avatar from '../../public/assets/Avatar.png'


export default function Card() {
  return (
    <>

        <div className=" card flex flex-col  justify-center items-center w-fit bg-[#F8F9FB] mx-[112px] my-[64px] p-[32px] gap-[32px] ">

            <Image src={logo} width={128} height={32} />

            <p className='   w-[80%]  text-center' >Thank you for making it painless, pleasant and most of all hassle free! I love LookScout. I can't say enough about LookScout.<br/> Great job, I will definitely be ordering again!</p>

            <Image src={avatar} width={146} height={42} />

        </div>

    </>
  )
}
