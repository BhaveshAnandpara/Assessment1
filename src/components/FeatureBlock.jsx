import Image from "next/image";
import arrow from '../../public/assets/arrow.svg'

export default function FeatureBlock({ icon , title , subtitle }) {

    return (
        <>

            <div className="block-container  flex justify-center flex-col gap-[16px] w-[30%]">

                <div className="flex justify-center gap-[20px] flex-col">

                    <Image src={icon} width={48} height={48} />
                    <h3 className="" >{title}</h3>
                    <p>{subtitle}</p>

                </div>

                <div className="flex ">
                    <p className="mr-1 text-[#437EF7]">Learn More</p>
                    <Image src={arrow} width={24} height={24} />
                </div>

            </div>

        </>
    )
}
