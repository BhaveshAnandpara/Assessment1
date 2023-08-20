import BlogCard from "./BlogCard"
import SectionHeader from "./SectionHeader"

import blog1 from '../../public/assets/blog1.jpg'
import blog2 from '../../public/assets/blog2.png'
import blog3 from '../../public/assets/blog3.png'
import BlogInfo1 from '../../public/assets/BlogInfo1.png'
import BlogInfo2 from '../../public/assets/BlogInfo2.png'
import BlogInfo3 from '../../public/assets/BlogInfo3.png'

export default function Blog() {

    let blogs = [

        {
            cover : blog1,
            title : 'Organize your digital assets with a new methodology here.',
            subtitle : 'Podcasting operational management inside of workflows to establish a framework seamless. Convergence collaboratively.',
            footer : BlogInfo1
        },
        {
            cover : BlogInfo2,
            title : 'Organize your digital assets with a new methodology here.',
            subtitle : 'Keeping your eye while performing a deep dive on the start-up mentality to derive convergence collaboratively.',
            footer : blog2
        },
        {
            cover : BlogInfo3,
            title : 'Organize your digital assets with a new methodology here.',
            subtitle : 'Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C .',
            footer : blog3
        }

    ]

    return (
        <>

            <div className="flex justify-center items-center flex-col px-[80px] py-[32px] gap-[64px]">

                <SectionHeader title={'Latest Blog Posts'} subtitle={'Completely synergize resource taxing relationships via premier niche markets. Professionally  cultivate one-to-one customer service with robust ideas.'} />

                <div className="flex justify-center gap-[32px]">

                    {
                        blogs.map( blog=>{

                            return(
                                <BlogCard cover={blog.cover} title={blog.title} subtitle={blog.subtitle} footer={blog.footer} />
                            )

                        })
                    }
                </div>


            </div>

        </>
    )
}
