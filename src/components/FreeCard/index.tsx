import Image from "next/image"

const FreeCard = ({
  image,
  feature,
  title,
  description,
}: {
  image: string
  feature: string
  title: string
  description: string
}) => {
  return (
    <div>
      <div className="mb-6 rounded overflow-hidden">
        <div className="relative">
          <Image className="w-full h-auto" src={image} width={854} height={480} alt={title} />
          <div className="absolute z-10 top-0 left-0 w-full h-full bg-white opacity-0 hover:opacity-10 duration-300" />
        </div>
        <p className={`p-[5px] text-center text-xs font-bold uppercase ${feature === "Free Now" ? "bg-[#0078f2]" : "bg-black"} `}>{feature}</p>
      </div>
      <h3 className="mb-1">{title}</h3>
      <p className="text-[#F5F5F599]">{description}</p>
    </div>
  )
}

export default FreeCard
