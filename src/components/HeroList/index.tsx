import Image from "next/image"

const HeroList = ({
  thumb,
  title,
  className,
}: {
  thumb: string
  title: string
  className?: string
}) => {
  return (
    <div className={`flex items-center gap-4 p-3.5 rounded-2xl hover:bg-[#FFFFFF14] duration-300 cursor-pointer ${className}`}>
      <Image className="w-10 h-auto rounded" src={thumb} width={360} height={480} alt={title} />
      <p className="">{title}</p>
    </div>)
}

export default HeroList
