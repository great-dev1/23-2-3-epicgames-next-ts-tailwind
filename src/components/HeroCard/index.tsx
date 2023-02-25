import Image from "next/image"
import Button from "@components/Button"

const HeroCard = ({
  image,
  logo,
  title,
  feature,
  description,
  prevPrice,
  price,
  buttonCaption,
  hasWishList,
  light,
}: {
  image: string
  logo: string
  title: string
  feature: string
  description: string
  prevPrice?: string
  price?: string
  buttonCaption: string
  hasWishList: boolean
  light?: boolean
}) => {
  return (
    <div className="relative w-[300px] md:w-full h-[400px] md:h-[500px] mb-3 px-2">
      <Image className="w-full h-full rounded-2xl object-cover" src={image} width={1248} height={702} alt={title} />
      <div className={`absolute z-10 left-0 bottom-0 p-5 md:p-8 ${light && "text-[#121212]"}`}>
        <Image className="max-w-[150px] md:max-w-[200px] w-full max-h-[55px] md:max-h-[145px] h-auto mb-6 object-contain" src={logo} width={150} height={55} alt={title} />
        <p className="mb-2.5 text-xs uppercase">{feature}</p>
        <p className="max-w-xs mb-2.5 md:mb-5 text-sm md:text-lg tracking-[-0.2px]">{description}</p>
        {price && (
          <p className="mb-2.5">
            {price === "free" ? (
              <span>Free</span>
            ) : (
              <>
                Starting at {" "}
                {prevPrice && (
                  <s className="mr-1 text-base font-medium text-[#F5F5F599]">{prevPrice}</s>
                )}
                <span className="text-base font-medium">{price}</span>
              </>
            )}
          </p>
        )}
        <div className="flex items-center gap-2.5">
          <Button className={light ? "text-white bg-[#121212]" : "text-black bg-white"}>{buttonCaption}</Button>
          {hasWishList && (
            <Button className="hidden md:flex gap-1.5 hover:bg-[#FFFFFF30] duration-300">
              <i className="fa-solid fa-circle-plus text-base"></i>
              <span className="text-[9px] tracking-[1px]">ADD TO WHISHLIST</span>
            </Button>
          )}
        </div>
      </div>
      {hasWishList && (
        <button className="absolute top-4 right-4 md:hidden">
          <i className="fa-solid fa-circle-plus text-2xl"></i>
        </button>
      )}
    </div>
  )
}

export default HeroCard
