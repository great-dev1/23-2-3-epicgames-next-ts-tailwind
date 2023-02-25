import Image from "next/image"

const ThreeGridCard = ({
  image,
  title,
  description,
  price,
}: {
  image: string
  title: string
  description: string
  price: string
}) => {
  return (
    <div className="max-w-[315px] md:max-w-full mb-3 px-2 md:px-4">
      <div className="card-container relative mb-5 rounded-2xl overflow-hidden">
        <Image className="w-full h-auto" src={image} width={640} height={854} alt={title} />
        <div className="absolute z-10 top-0 left-0 w-full h-full bg-white opacity-0 hover:opacity-10 duration-300" />
        <button className="invisible absolute top-2 right-3 duration-300">
          <i className="fa-solid fa-circle-plus text-xl"></i>
        </button>
      </div>
      <div className="px-4 md:px-5">
        <h3 className="mb-2.5 text-lg">{title}</h3>
        <p className="mb-5 text-[#F5F5F599]">{description}</p>
        <h4 className="text-[22px]">{price}</h4>
      </div>
    </div>
  )
}

export default ThreeGridCard
