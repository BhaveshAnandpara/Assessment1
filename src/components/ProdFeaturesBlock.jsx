import SectionHeader from "./SectionHeader"
import prodImg from '../../public/assets/prod-feature-img.jpg'
import Image from "next/image"

import arrow from '../../public/assets/arrow.svg'

export default function ProdFeaturesBlock({ icon , title , subtitle }) {

    return (
        <>

            <div className="prod-block-container flex justify-center items-start flex-row gap-[16px] w-[80%]">

                <Image src={icon} width={48} height={48} />

                <div className="flex justify-center gap-[12px] flex-col">

                    <h3 className="" >{title}</h3>
                    <p>{subtitle}</p>

                    <div className="flex ">
                        <p className="mr-1 text-[#437EF7]">Learn More</p>
                        <Image src={arrow} width={24} height={24} />
                    </div>

                </div>


            </div>

        </>
    )
}
