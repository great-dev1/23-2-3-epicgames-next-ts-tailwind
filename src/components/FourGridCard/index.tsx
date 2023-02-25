import Image from "next/image"

const FourGridCard = ({
  title,
  image1,
  image2,
  image3,
}: {
  title: string
  image1: string
  image2: string
  image3: string
}) => {
  return (
    <div className="mx-2.5">
      <div className="px-4 py-5 rounded bg-[#202020]">
        <div className="genre relative mb-4">
          <Image className="relative z-10 w-2/5 h-auto mx-auto rounded" src={image1} width={360} height={480} alt={title} />
          <Image className="absolute top-0 left-0 w-2/5 h-auto mx-auto rounded" src={image2} width={360} height={480} alt={title} />
          <Image className="absolute top-0 right-0 w-2/5 h-auto mx-auto rounded" src={image3} width={360} height={480} alt={title} />
        </div>
        <h3 className="line-clamp-1 text-center">{title}</h3>
      </div>
    </div>
  )
}

export default FourGridCard
