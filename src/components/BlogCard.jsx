import Image from 'next/image'
import Blog1 from '../../public/assets/blog1.jpg'
import BlogInfo from '../../public/assets/BlogInfo1.png'

export default function BlogCard({ cover , title , subtitle , footer }) {
  return (
    <>
        <div className="flex justify-center items-center flex-col w-[30%] gap-[24px]">

            <div className='w-full relative h-[240px]  overflow-hidden rounded-lg'>
                <Image src={cover} layout='fill' objectFit='cover' />
            </div>

            <div className="blog-content ">

                <h2 className='mb-[16px]' >{title}</h2>

                <p >{ subtitle }</p>

            </div>

            <div className=' h-[40px] w-[100%] relative' >
                <Image src={footer} layout='fill' />
            </div>

        </div>

    </>
  )
}
