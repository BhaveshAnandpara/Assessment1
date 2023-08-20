
export default function SectionHeader( { title , subtitle } ) {
  return (
    <div className="section-header flex flex-col gap-[16px]">

        <h2 >{title}</h2>
        <p className="w-[65%]" >{subtitle}</p>

</div>
  )
}
