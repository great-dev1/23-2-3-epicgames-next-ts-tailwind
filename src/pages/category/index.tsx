import { useState, useEffect, useRef } from "react"
import type { NextPage } from "next"
import Head from "next/head"
import Link from "next/link"
import Slider from "react-slick"
import Layout from "src/layout"
import FourGridCard from "@components/FourGridCard"
import SixGridCard from "@components/SixGridCard"

const PopularGenresData = [
  {
    id: 1,
    url: "/",
    title: "Action Games",
    image1: "/images/atone-sm.avif",
    image2: "/images/deliver-us-mars-sm.avif",
    image3: "/images/rhythm-sprout-sm.avif",
  },
  {
    id: 2,
    url: "/",
    title: "Action-Adventure Games",
    image1: "/images/atone-sm.avif",
    image2: "/images/deliver-us-mars-sm.avif",
    image3: "/images/rhythm-sprout-sm.avif",
  },
  {
    id: 3,
    url: "/",
    title: "Adventure Games",
    image1: "/images/atone-sm.avif",
    image2: "/images/deliver-us-mars-sm.avif",
    image3: "/images/rhythm-sprout-sm.avif",
  },
  {
    id: 4,
    url: "/",
    title: "Casual Games",
    image1: "/images/atone-sm.avif",
    image2: "/images/deliver-us-mars-sm.avif",
    image3: "/images/rhythm-sprout-sm.avif",
  },
  {
    id: 5,
    url: "/",
    title: "City Builder Games",
    image1: "/images/atone-sm.avif",
    image2: "/images/deliver-us-mars-sm.avif",
    image3: "/images/rhythm-sprout-sm.avif",
  },
  {
    id: 6,
    url: "/",
    title: "Co-Op Games",
    image1: "/images/atone-sm.avif",
    image2: "/images/deliver-us-mars-sm.avif",
    image3: "/images/rhythm-sprout-sm.avif",
  },
  {
    id: 7,
    url: "/",
    title: "Cross Platform Games",
    image1: "/images/atone-sm.avif",
    image2: "/images/deliver-us-mars-sm.avif",
    image3: "/images/rhythm-sprout-sm.avif",
  },
  {
    id: 8,
    url: "/",
    title: "Dungeon Crawler Games",
    image1: "/images/atone-sm.avif",
    image2: "/images/deliver-us-mars-sm.avif",
    image3: "/images/rhythm-sprout-sm.avif",
  },
]

const FourGridSliderSettings = {
  arrows: false,
  infinite: false,
  slidesToShow: 4,
  slidesToScroll: 4,
  swipeToSlide: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    }
  ]
}

const MenuData = [
  {
    id: 1,
    content: "All",
  },
  {
    id: 2,
    content: "New Release",
  },
  {
    id: 3,
    content: "Coming Soon",
  },
  {
    id: 4,
    content: "Alphabetical",
  },
  {
    id: 5,
    content: "Price: High to Low",
  },
  {
    id: 6,
    content: "Price: Low to High",
  },
]

const GamesData = [
  {
    id: 1,
    url: "/",
    image: "/images/atone-sm.avif",
    feature: "Base Game",
    title: "Atone",
    onEpic: true,
    price: "$72",
  },
  {
    id: 2,
    url: "/",
    image: "/images/borderlands-sm.jfif",
    feature: "Base Game",
    title: "Borderlands",
    price: "$61.58",
  },
  {
    id: 3,
    url: "/",
    image: "/images/cyberpunk-sm.webp",
    feature: "Base Game",
    title: "Cyberpunk",
    onEpic: true,
    discount: -20,
    prevPrice: "$34.99",
    price: "$27.99",
  },
  {
    id: 4,
    url: "/",
    image: "/images/deliver-us-mars-sm.avif",
    feature: "Base Game",
    title: "Deliver Us Mars",
    onEpic: true,
    available: "Available 02/06/23",
  },
  {
    id: 5,
    url: "/",
    image: "/images/dying-light-sm.avif",
    feature: "Base Game",
    title: "Dying Light",
    discount: -20,
    prevPrice: "$187",
    price: "$149.60",
  },
  {
    id: 6,
    url: "/",
    image: "/images/endwar-sm.avif",
    feature: "Base Game",
    title: "Tom Clancy's Endwar",
    onEpic: true,
    price: "$72",
  },
  {
    id: 7,
    url: "/",
    image: "/images/fortnite-sm.avif",
    feature: "Base Game",
    title: "Fortnite",
    onEpic: true,
    price: "Free",
  },
  {
    id: 8,
    url: "/",
    image: "/images/god-of-war-sm.webp",
    feature: "Base Game",
    title: "God of War",
    price: "$76.88",
  },
  {
    id: 9,
    url: "/",
    image: "/images/atone-sm.avif",
    feature: "Base Game",
    title: "Atone",
    onEpic: true,
    price: "$72",
  },
  {
    id: 10,
    url: "/",
    image: "/images/borderlands-sm.jfif",
    feature: "Base Game",
    title: "Borderlands",
    price: "$61.58",
  },
  {
    id: 11,
    url: "/",
    image: "/images/cyberpunk-sm.webp",
    feature: "Base Game",
    title: "Cyberpunk",
    onEpic: true,
    discount: -20,
    prevPrice: "$34.99",
    price: "$27.99",
  },
  {
    id: 12,
    url: "/",
    image: "/images/deliver-us-mars-sm.avif",
    feature: "Base Game",
    title: "Deliver Us Mars",
    onEpic: true,
    available: "Available 02/06/23",
  },
  {
    id: 13,
    url: "/",
    image: "/images/dying-light-sm.avif",
    feature: "Base Game",
    title: "Dying Light",
    discount: -20,
    prevPrice: "$187",
    price: "$149.60",
  },
  {
    id: 14,
    url: "/",
    image: "/images/endwar-sm.avif",
    feature: "Base Game",
    title: "Tom Clancy's Endwar",
    onEpic: true,
    price: "$72",
  },
  {
    id: 15,
    url: "/",
    image: "/images/fortnite-sm.avif",
    feature: "Base Game",
    title: "Fortnite",
    onEpic: true,
    price: "Free",
  },
  {
    id: 16,
    url: "/",
    image: "/images/god-of-war-sm.webp",
    feature: "Base Game",
    title: "God of War",
    price: "$76.88",
  },
]

const FiltersData = [
  {
    id: 1,
    category: "Events",
    items: [
      "February Savings",
      "Rockstar Publisher Sale",
      "THQ Publisher Sale",
    ],
  },
  {
    id: 2,
    category: "Genre",
    items: [
      "Action",
      "Adventure",
      "Casual",
      "Fighting",
      "Puzzle",
    ],
  },
  {
    id: 3,
    category: "Platform",
    items: [
      "Mac OS",
      "Windows",
    ],
  },
]

const Category: NextPage = () => {
  const slider = useRef<Slider | null>(null)
  const [showMenu, setShowMenu] = useState<boolean>(false)
  const [sort, setSort] = useState<string>("New Release")
  const [openCategories, setOpenCategories] = useState<string[]>(["Events"])
  const [activeFilters, setActiveFilters] = useState<string[]>([])
  const [showFilter, setShowFilter] = useState<boolean>(false)

  const toggleCategory = (category: string) => {
    let temp = openCategories
    if (openCategories.includes(category)) {
      let index = openCategories.findIndex((el) => el === category)
      temp.splice(index, 1)
    } else {
      temp.push(category)
    }
    setOpenCategories([...temp])
  }

  const toggleFilter = (filter: string) => {
    let temp = activeFilters
    if (activeFilters.includes(filter)) {
      let index = activeFilters.findIndex((el) => el === filter)
      temp.splice(index, 1)
    } else {
      temp.push(filter)
    }
    setActiveFilters([...temp])
  }

  const resetFilter = () => {
    setActiveFilters([])
  }

  // Show/hide filter panel on browser resize
  useEffect(() => {
    const handleWindowResize = () => {
      if (window.innerWidth < 768) {
        setShowFilter(false)
      } else {
        setShowFilter(true)
      }
    }
    window.addEventListener('resize', handleWindowResize)
    return () => {
      window.removeEventListener('resize', handleWindowResize)
    }
  })

  // Hide filter panel on mobile / Show on tablet, laptop and desktop
  useEffect(() => {
    if (window.innerWidth < 768) {
      setShowFilter(false)
    } else {
      setShowFilter(true)
    }
  }, [])

  return (
    <div>
      <Head>
        <title>Epic Games Store | Official Site</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        {/* Popular Genres */}
        <section>
          <div className="container pt-[30px] pb-[50px]">
            <div className="flex items-center justify-between mb-[18px]">
              <Link href="/">
                <h2>
                  <span className="text-lg font-normal">Popular Genres</span>
                </h2>
              </Link>
              <div className="flex gap-2.5 text-xs">
                <button className="w-[30px] h-[30px] rounded-full bg-[#202020] focus:border border-white" onClick={() => slider.current?.slickPrev()}>
                  <i className="fa-solid fa-chevron-left"></i>
                </button>
                <button className="w-[30px] h-[30px] rounded-full bg-[#202020] focus:border border-white" onClick={() => slider.current?.slickNext()}>
                  <i className="fa-solid fa-chevron-right"></i>
                </button>
              </div>
            </div>

            <div className="-mx-2.5">
              <Slider ref={slider} {...FourGridSliderSettings}>
                {PopularGenresData.map((el) => (
                  <Link key={el.id} href={el.url}>
                    <FourGridCard
                      title={el.title}
                      image1={el.image1}
                      image2={el.image2}
                      image3={el.image3}
                    />
                  </Link>
                ))}
              </Slider>
            </div>
          </div>
        </section>

        <section>
          <div className="container flex md:gap-8 pb-[50px]">
            {/* Product Grid */}
            <main className="flex-grow">
              <div className="flex items-center justify-between py-4">
                <div className="relative">
                  <button className="opacity-[0.75] hover:opacity-100 duration-300" onClick={() => setShowMenu(!showMenu)}>
                    <span className="text-[#F5F5F599]">Show:</span>{" "}
                    <span>{sort}</span>{" "}
                    <i className={`fa-solid fa-chevron-down text-xs ${showMenu ? "-rotate-180" : ""} duration-300`}></i>
                  </button>
                  {showMenu && (
                    <ul className="absolute z-20 min-w-[150px] w-max mt-3 p-2.5 rounded bg-[#202020] shadow-xl">
                      {MenuData.map((el) => (
                        <li key={el.id}>
                          <button className={`px-5 py-1.5 text-[13px] ${el.content === sort ? "" : "text-[#F5F5F599]"} hover:text-[#F5F5F5] hover:underline duration-300`} onClick={() => {
                            setSort(el.content)
                            setShowMenu(false)
                          }}>
                            {el.content}
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <button className="md:hidden" onClick={() => setShowFilter(true)}>
                  <span className="mr-2">Filter</span>
                  <i className="fa-solid fa-bars-staggered"></i>
                </button>
              </div>

              <div className="grid grid-cols-12">
                {GamesData.map((el) => (
                  <div key={el.id} className="col-span-6 lg:col-span-3 xl:col-span-2 mb-4 md:mb-8">
                    <Link href={el.url}>
                      <SixGridCard
                        image={el.image}
                        feature={el.feature}
                        title={el.title}
                        onEpic={el.onEpic}
                        available={el.available}
                        discount={el.discount}
                        prevPrice={el.prevPrice}
                        price={el.price}
                      />
                    </Link>
                  </div>
                ))}
              </div>

              <ul className="flex justify-center py-6">
                <li className="px-3 font-bold text-[#F5F5F5]">
                  <Link href="/">1</Link>
                </li>
                <li className="px-3 text-[#F5F5F599] hover:font-bold hover:text-[#F5F5F5] duration-300">
                  <Link href="/">2</Link>
                </li>
                <li className="px-3 text-[#F5F5F599] hover:font-bold hover:text-[#F5F5F5] duration-300">
                  <Link href="/">3</Link>
                </li>
                <li className="px-3 text-[#F5F5F599] hover:font-bold hover:text-[#F5F5F5] duration-300">
                  <Link href="/">4</Link>
                </li>
                <li className="px-3 text-[#F5F5F599] hover:font-bold hover:text-[#F5F5F5] duration-300">
                  <Link href="/">5</Link>
                </li>
                <li className="px-3 text-[#F5F5F599] hover:font-bold hover:text-[#F5F5F5] duration-300">
                  <Link href="/">...</Link>
                </li>
                <li className="px-3 text-[#F5F5F599] hover:font-bold hover:text-[#F5F5F5] duration-300">
                  <Link href="/">42</Link>
                </li>
                <li className="px-3 text-[#F5F5F599] hover:font-bold hover:text-[#F5F5F5] duration-300">
                  <Link href="/">
                    <i className="fa-solid fa-chevron-right"></i>
                  </Link>
                </li>
              </ul>
            </main>

            {/* Filters */}
            {showFilter && (
              <aside className="fixed md:relative z-20 top-0 left-0 flex-shrink-0 w-full h-full md:w-[245px] bg-[#121212] overflow-auto">
                <div className="flex flex-col h-full">
                  <div className="p-8 md:p-0">
                    <div className="flex items-center justify-between py-4">
                      <span>Filters ({activeFilters.length})</span>
                      <button className="hidden md:block p-1 text-xs" onClick={resetFilter}>RESET</button>
                    </div>

                    <div className="pb-4 border-b border-[#F5F5F51A]">
                      <div className="flex items-center gap-3 h-[40px] p-3.5 rounded bg-[#202020]">
                        <i className="fa-solid fa-search text-[#F5F5F599]"></i>
                        <input className="text-[13px] bg-transparent focus-visible:outline-0" name="search" placeholder="Keywords" />
                      </div>
                    </div>

                    {FiltersData.map((el) => (
                      <div key={el.id} className="pb-1 border-b border-[#F5F5F51A]">
                        <button className="flex items-center justify-between w-full px-3 py-5 border border-transparent focus:border-white rounded text-[#F5F5F599] hover:text-[#F5F5F5] duration-300" onClick={() => toggleCategory(el.category)}>
                          <span className="text-xs uppercase">{el.category}</span>
                          <i className={`fa-solid fa-chevron-down text-xs ${openCategories.includes(el.category) ? "-rotate-180" : ""} duration-300`}></i>
                        </button>
                        {openCategories.includes(el.category) && (
                          <ul className="flex flex-col gap-1 mt-1">
                            {el.items.map((item, idx) => (
                              <li key={idx}>
                                <button className={`flex items-center justify-between w-full p-3 rounded text-[#F5F5F599] hover:text-[#F5F5F5] ${activeFilters.includes(item) ? "bg-[#FFFFFF1A]" : ""} duration-300`} onClick={() => toggleFilter(item)}>
                                  <span>{item}</span>
                                  {activeFilters.includes(item) && (
                                    <i className="fa-solid fa-check text-xs"></i>
                                  )}
                                </button>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>

                  <div className="md:hidden flex items-center justify-around mt-auto p-6 bg-[#202020]">
                    <button className="px-4 py-3" onClick={() => {
                      resetFilter()
                      setShowFilter(false)
                    }}>RESET</button>
                    <button className="px-4 py-3 rounded text-xs bg-[#0074e4]" onClick={() => setShowFilter(false)}>DONE</button>
                  </div>
                </div>
              </aside>
            )}
          </div>
        </section>
      </Layout>
    </div>
  )
}

export default Category
