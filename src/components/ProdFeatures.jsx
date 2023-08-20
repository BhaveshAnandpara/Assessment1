import SectionHeader from "./SectionHeader"
import prodImg from '../../public/assets/prod-feature-img.jpg'
import Image from "next/image"
import ProdFeaturesBlock from "./ProdFeaturesBlock"

import Icon1 from '../../public/assets/prod-icon1.png'
import Icon2 from '../../public/assets/prod-icon2.png'
import Icon3 from '../../public/assets/prod-icon3.png'

export default function ProdFeatures() {

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

                <SectionHeader title={'Redefining Product Features'} subtitle={'Keeping your eye on the ball while performing a deep dive on the start-up mentality to  derive convergence on cross-platform integration.'} />

                <div className="feature-box flex justify-center align-middle flex-row gap-[32px]">


                    <div className="prod-feature-list flex justify-center align-middle flex-col flex-wrap gap-[32px]">

                        {

                            prodFeatures.map((feature) => {

                                return (

                                    <ProdFeaturesBlock icon={feature.icon} title={feature.title} subtitle={feature.subtitle} link={feature.link} />

                                )

                            })

                        }

                    </div>


                    <div className="block relative h-[100%] w-[40%]" >
                        <Image src={prodImg} layout='fill' />
                    </div>

                </div>



            </div>


        </>
    )
}
