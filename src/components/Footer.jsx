import Image from "next/image";
import Logo from '../../public/assets/CompanyLogo.svg'
import social from '../../public/assets/Socialplatformslogo.png'
import social2 from '../../public/assets/Socialplatformslogo-2.png'
import social3 from '../../public/assets/Socialplatformslogo-3.png'
import social1 from '../../public/assets/Socialplatformslogo-1.png'


export default function Footer() {
    return (
        <>
            <div className="footer-container w-full flex justify-center items-center flex-col py-[64px] ">

                <div className="footer-content flex justify-center items-start flex-row">

                    <div className="col1   flex justify-center items-start flex-col w-fit basis-1/3">

                        <Image className="mb-[24px]" src={Logo} width={160} height={40} />

                        <p className="w-[90%] text-[#A5ACBA]" >Generate outside the box thinking with the possibility to targtet the low.</p>

                    </div>

                    <div className="col2 block  basis-1/4">

                        <p className="text-[#F9F9F9] font-semibold mb-[24px]">Resources</p>

                        <div className=" text-[#A5ACBA] flex justify-center items-start flex-col " >
                            <p>Community</p>
                            <p>Events</p>
                            <p>Help Center</p>
                            <p>Partners</p>
                        </div>

                    </div>

                    <div className="col3 block  basis-1/4">

                        <p className="text-[#F9F9F9] font-semibold mb-[24px]">Products</p>

                        <div className=" text-[#A5ACBA] flex justify-center items-start flex-col ">
                            <p>Integrations</p>
                            <p>Solutions</p>
                            <p>Features</p>
                            <p>Enetrprise</p>
                        </div>

                    </div>

                    <div className="col4  flex justify-center items-start flex-col w-fit basis-1/3">

                        <p className="text-[#F9F9F9] font-semibold mb-[24px]">Get Email Notifications</p>

                        <p className="w-[90%] text-[#A5ACBA] mb-[24px] text-justify" >Generate outside the box thinking with the possibility to targtet the low</p>

                        <div className="border  rounded-md overflow-hidden pl-[6px] bg-white flex justify-between items-center w-[80%]" >

                            <input type="text" className=" text-black outline-none bg-transparent w-full " placeholder="Enter your email" name="" id="" />

                            <button className="bg-[#437EF7] p-[6px] " >Submit</button>

                        </div>

                    </div>

                </div>

                <div className=" border-b-2 h-[48px]  w-[90%] mb-[24px]" ></div>

                <div className="socials w-[90%] flex justify-between items-center">

                    <p>© 2023 Lookscout. All Rights Reserved.</p>

                    <div className="flex justify-center items-center gap-[24px]">

                        <Image src={social} width={24} height={24} />
                        <Image src={social1} width={24} height={24} />
                        <Image src={social2} width={24} height={24} />
                        <Image src={social3} width={24} height={24} />

                    </div>

                </div>

            </div>
        </>
    )
}
