import Link from "next/link"
import GameList from "@components/GameList"

const GameMenu = ({
  title,
  url,
  data,
  className,
}: {
  title: string
  url: string
  data: any[]
  className?: string
}) => {
  return (
    <div className={`max-w-[300px] md:max-w-full px-4 ${className}`}>
      <div className="flex items-center justify-between mb-2.5">
        <h2 className="text-[22px] tracking-[-0.5px]">{title}</h2>
        <Link href={url} className="flex-shrink-0">
          <span className="px-5 py-2.5 border rounded text-[9px] font-medium uppercase hover:bg-[#FFFFFF29] duration-300">View More</span>
        </Link>
      </div>
      <div className="flex flex-col gap-1">
        {data.map((el) => (
          <Link key={el.id} href={el.url}>
            <GameList
              image={el.image}
              title={el.title}
              onEpic={el.onEpic}
              available={el.available}
              discount={el.discount}
              prevPrice={el.prevPrice}
              price={el.prevPrice}
            />
          </Link>
        ))}
      </div>
    </div>
  )
}

export default GameMenu
