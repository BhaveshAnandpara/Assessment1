import SectionHeader from "./SectionHeader"
import DarProdImg from '../../public/assets/dark-prod-img.png'
import Image from "next/image"
import ProdFeaturesBlock from "./ProdFeaturesBlock"

import Icon1 from '../../public/assets/prod-icon1.png'
import Icon2 from '../../public/assets/prod-icon2.png'
import Icon3 from '../../public/assets/prod-icon3.png'

export default function DarkProdFeatures() {

    const prodFeatures = [
        {
            icon: Icon1,
            title: "Explore ideas together",
            subtitle: "Engage audience segments and finally create actionable insights. Amplify vertical integration.",
            link: "#"
        },
        {
            icon: Icon2,
            title: "Bring those ideas to life",
            subtitle: "Engage audience segments and finally create actionable insights. Amplify vertical integration.",
            link: "#"
        },
        {
            icon: Icon3,
            title: "Ship better outcomes",
            subtitle: "Engage audience segments and finally create actionable insights. Amplify vertical integration.",
            link: "#"
        }
    ]

    return (
        <>

            <div className="prod-features-container w-full flex justify-center align-middle flex-col mx-[80px] gap-[48px]">

                <div className="feature-box flex justify-center align-middle flex-row gap-[80px] px-[32px]">

                    <div className="block relative h-[40vw] w-[50vw]" >
                        <Image src={DarProdImg} layout='fill' />
                    </div>


                    <div className="dark-prod-feature-list flex justify-center align-middle flex-col flex-wrap gap-[32px]">

                        {

                            prodFeatures.map((feature) => {

                                return (

                                    <ProdFeaturesBlock  icon={feature.icon} title={feature.title} subtitle={feature.subtitle} link={feature.link} />

                                )

                            })

                        }

                    </div>



                </div>



            </div>


        </>
    )
}
