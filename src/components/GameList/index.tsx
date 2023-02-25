import Image from "next/image"
import Badge from "@components/Badge"

const GameList = ({
  image,
  title,
  onEpic,
  available,
  discount,
  prevPrice,
  price,
}: {
  image: string
  title: string
  onEpic?: boolean
  available?: string
  discount?: number
  prevPrice?: string
  price?: string
}) => {
  return (
    <div className="card-container relative flex items-center gap-4 px-5 py-2.5 rounded-2xl hover:bg-[#FFFFFF14] duration-300">
      <Image className="w-[60px] h-auto rounded" src={image} width={360} height={480} alt={title} />
      <div className="flex flex-col gap-1">
        <h3 className="line-clamp-1">{title}</h3>
        <div className="flex items-center flex-wrap gap-1">
          {onEpic && (
            <Badge className="mr-2.5 bg-[#FFFFFF1A]">Now on EPIC</Badge>
          )}
          {available && (
            <h4 className="text-[#F5F5F599]">{available}</h4>
          )}
        </div>
        <div className="flex items-center">
          {discount && (
            <Badge className="mr-2.5 bg-[#0074E4]">{discount}%</Badge>
          )}
          {prevPrice && (
            <s className="mr-2.5 text-[#F5F5F599]">{prevPrice}</s>
          )}
          {price && (
            <h4 className="text-xs">{price}</h4>
          )}
        </div>
      </div>
      <button className="invisible absolute top-3 left-14 duration-300">
        <i className="fa-solid fa-circle-plus text-lg"></i>
      </button>
    </div>
  )
}

export default GameList