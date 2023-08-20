
import FeatureBlock from "./FeatureBlock"
import SectionHeader from "./SectionHeader"

import Icon1 from '../../public/assets/Icon1.svg'
import Icon2 from '../../public/assets/Icon2.png'
import Icon3 from '../../public/assets/Icon3.png'
import Icon4 from '../../public/assets/Icon4.png'
import Icon5 from '../../public/assets/Icon5.png'
import Icon6 from '../../public/assets/Icon6.png'

export default function Features() {

    const features = [
        {
            icon : Icon1,
            title : "Easier Work Organization",
            subtitle : "Efficiently unleash cross-media information without cross-media value. Quickly timely deliverables for real-time schemas. ",
            link : "#"
        },
        {
            icon : Icon2,
            title : "Fast Connection",
            subtitle : "Completely pursue scalable customer cross- media through potentialities. Holistically quickly installed portals.",
            link : "#"
        },
        {
            icon : Icon3,
            title : "Streamlined Processes",
            subtitle : "Objectively innovate empowered scalable manufactured products whereas parallel platforms predominate extensible.",
            link : "#"
        },
        {
            icon : Icon4,
            title : "Easier Integrations",
            subtitle : "Completely pursue scalable customer try through potentialities. Pontificate portals installed. Efficiently unleash information.",
            link : "#"
        },
        {
            icon : Icon5,
            title : "Marketing Analytics",
            subtitle : "Phosfluorescently engage worldwide methodologies with web-enabled  Interactively coordinate.",
            link : "#"
        },
        {
            icon : Icon6,
            title : "Workflow Builder",
            subtitle : "Collaboratively administrate turnkey service channels whereas virtual e-tailers. This  is objectively scalable metrics whereas.",
            link : "#"
        }
    ]


  return (
    <>

        <div className="features-container flex justify-center align-middle flex-col mx-[80px] gap-[48px]">
 
            <SectionHeader title={'Messaging for all'} subtitle={'User generated content in real-time will have multiple touchpoints for offshoring.'} />

            <div className="feature-box flex justify-center align-middle flex-wrap gap-[32px]">

                {

                    features.map(( feature ) =>{

                        return(

                            <FeatureBlock icon={feature.icon} title={feature.title} subtitle={feature.subtitle} link={feature.link} />

                        )

                    })

                }


            </div>


        </div>


    </>
  )
}
