import Image from "next/image"
import Badge from "@components/Badge"

const SixGridCard = ({
  image,
  feature,
  title,
  onEpic,
  available,
  discount,
  prevPrice,
  price,
}: {
  image: string
  feature: string
  title: string
  onEpic?: boolean
  available?: string
  discount?: number
  prevPrice?: string
  price?: string
}) => {
  return (
    <div className="max-w-[220px] px-2 pb-2.5">
      <div className="card-container relative mb-2.5 rounded overflow-hidden">
        <Image className="w-full h-auto" src={image} width={640} height={854} alt={title} />
        <div className="absolute z-10 top-0 left-0 w-full h-full bg-white opacity-0 hover:opacity-10 duration-300" />
        <button className="invisible absolute top-2 right-3 duration-300">
          <i className="fa-solid fa-circle-plus text-xl"></i>
        </button>
      </div>
      <h4 className="mb-1 text-[9px] font-medium uppercase text-[#F5F5F599]">{feature}</h4>
      <h3>{title}</h3>
      {onEpic && (
        <Badge className="mt-1 bg-[#FFFFFF1A]">Now on EPIC</Badge>
      )}
      {available && (
        <p className="mt-1 text-[#F5F5F599]">{available}</p>
      )}
      <div className="flex items-center mt-2.5">
        {discount && (
          <Badge className="mr-2.5 bg-[#0074E4]">{discount}%</Badge>
        )}
        <div className="flex justify-end flex-wrap">
          {prevPrice && (
            <s className="text-[#F5F5F599]">{prevPrice}</s>
          )}
          <span className={prevPrice ? "ml-2.5" : ""}>{price}</span>
        </div>
      </div>
    </div>
  )
}

export default SixGridCard
