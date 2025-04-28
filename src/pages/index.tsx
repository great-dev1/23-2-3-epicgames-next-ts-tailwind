import { useState, useRef } from "react"
import type { NextPage } from "next"
import Head from "next/head"
import Link from "next/link"
import Image from "next/image"
import Slider from "react-slick"
import Layout from "src/layout"
import Button from "@components/Button"
import HeroCard from "@components/HeroCard"
import HeroList from "@components/HeroList"
import SixGridCard from "@components/SixGridCard"
import TwoGridCard from "@components/TwoGridCard"
import FreeCard from "@components/FreeCard"
import ThreeGridCard from "@components/ThreeGridCard"
import GameMenu from "@components/GameMenu"

const HeroSlidesData = [
  {
    id: 1,
    url: "/",
    image: "/images/hogwarts-legacy-lg.avif",
    thumb: "/images/hogwarts-legacy-sm.avif",
    logo: "/images/hogwarts-legacy-logo.png",
    title: "Hogwarts Legacy - Deluxe Edition",
    feature: "Early access February 7",
    description: "Pre-Purchase to play 72 Hours earlier, plus get the Onyx Hippogriff Mount, Dark Arts Pack, and Dark Arts Garrison Hat.",
    price: "$452.00",
    buttonCaption: "Pre-Purchase Now",
    hasWishList: true,
  },
  {
    id: 2,
    url: "/",
    image: "/images/february-savings-lg.avif",
    thumb: "/images/february-savings-sm.avif",
    logo: "/images/february-savings-logo.png",
    title: "February Savings",
    feature: "Save Up To 75%",
    description: "Save big on hit Games and Add-Ons during February Savings. Offers end February 16, 11am ET.",
    buttonCaption: "Save Now",
    hasWishList: false,
    light: true,
  },
  {
    id: 3,
    url: "/",
    image: "/images/fortnite-lg.avif",
    thumb: "/images/fortnite-sm.avif",
    logo: "/images/fortnite-logo.png",
    title: "Fortnite",
    feature: "Now available",
    description: "Son Gohan and Piccolo power up the return of Fortnite x Dragon Ball.",
    buttonCaption: "Play for free",
    hasWishList: false,
  },
  {
    id: 4,
    url: "/",
    image: "/images/dying-light-lg.avif",
    thumb: "/images/dying-light-sm.avif",
    logo: "/images/dying-light-logo.png",
    title: "Dying Light 2 Stay Human",
    feature: "Save 50%",
    description: "It's time to celebrate the first anniversary of Dying Light 2: Stay Human! Participate in new in-game events and more.",
    prevPrice: "$469.00",
    price: "$234.50",
    buttonCaption: "Buy now",
    hasWishList: true,
  },
  {
    id: 5,
    url: "/",
    image: "/images/the-sims-lg.avif",
    thumb: "/images/the-sims-sm.jpg",
    logo: "/images/the-sims-logo.png",
    title: "The Sims 4",
    feature: "Now available",
    description: "The Sims 4 is the ultimate life simulatin game. Download it for free and play with life",
    price: "free",
    buttonCaption: "Play for free",
    hasWishList: true,
  },
  {
    id: 6,
    url: "/",
    image: "/images/deliver-us-mars-lg.jpg",
    thumb: "/images/deliver-us-mars-sm.avif",
    logo: "/images/deliver-us-mars-logo.png",
    title: "Deliever Us Mars",
    feature: "Now available",
    description: "Experience an atmospheric sci-fi adventure taking you on a suspense-fueled, high-stakes mission to recover the ARK colony ships.",
    price: "$167.00",
    buttonCaption: "Buy Now",
    hasWishList: true,
  },
]

const HeroSliderSettings = {
  arrows: false,
  autoplay: true,
  autoplaySpeed: 6000,
  fade: true,
  swipeToSlide: true,
  responsive: [
    {
      breakpoint: 768, // max-width: 768px
      settings: {
        autoplay: false,
        dots: true,
        fade: false,
        variableWidth: true,
      }
    }
  ]
}

const FebruarySavingsData = [
  {
    id: 1,
    url: "/",
    image: "/images/dying-light.webp",
    feature: "Base game",
    title: "Dying Light 2 Stay Human",
    discount: -50,
    prevPrice: "$469",
    price: "$234.50",
  },
  {
    id: 2,
    url: "/",
    image: "/images/spider-man.avif",
    feature: "Base game",
    title: "Marvel's Spider-Man Remastered",
    discount: -33,
    prevPrice: "$468",
    price: "$313.56",
  },
  {
    id: 3,
    url: "/",
    image: "/images/god-of-war.webp",
    feature: "Base game",
    title: "God of War",
    discount: -40,
    prevPrice: "$398",
    price: "$238.80",
  },
  {
    id: 4,
    url: "/",
    image: "/images/goat-simulator.webp",
    feature: "Base game",
    title: "Goat Simulator 3",
    discount: -25,
    prevPrice: "$230",
    price: "$172.50",
  },
  {
    id: 5,
    url: "/",
    image: "/images/cyberpunk.webp",
    feature: "Base game",
    title: "Cyberpunk 2077",
    discount: -50,
    prevPrice: "$395.99",
    price: "$197.99",
  },
  {
    id: 6,
    url: "/",
    image: "/images/gotham-knights.webp",
    feature: "Base game",
    title: "Gotham Knights",
    discount: -55,
    prevPrice: "$388",
    price: "$174.60",
  },
  {
    id: 7,
    url: "/",
    image: "/images/saints-row.webp",
    feature: "Base game",
    title: "Saints Row",
    discount: -45,
    prevPrice: "$264",
    price: "$145.20",
  },
  {
    id: 8,
    url: "/",
    image: "/images/pc-building-simulator.avif",
    feature: "Base game",
    title: "PC Building Simulator 2",
    discount: -15,
    prevPrice: "$159",
    price: "$135.15",
  },
  {
    id: 9,
    url: "/",
    image: "/images/uncharted.webp",
    feature: "Base game",
    title: "UNCHARTED: Legacy of Thieves Collection",
    discount: -30,
    prevPrice: "$398",
    price: "$278.60",
  },
  {
    id: 10,
    url: "/",
    image: "/images/madden.webp",
    feature: "Base game",
    title: "Madden NFL 23",
    discount: -70,
    prevPrice: "$399",
    price: "$119.70",
  },
]

const SixGridSliderSettings = {
  arrows: false,
  infinite: false,
  slidesToShow: 6,
  slidesToScroll: 6,
  swipeToSlide: true,
  responsive: [
    {
      breakpoint: 1440,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 5,
      }
    },
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
      }
    },
  ]
}

const TwoGridData = [
  {
    id: 1,
    url: "/",
    image: "/images/publisher-sale.avif",
    title: "2K Publisher Sale",
    description: "Save big on Borderlands, Tiny Tina's Wonderlands, Civilization, and more.",
    group: true,
  },
  {
    id: 2,
    url: "/",
    image: "/images/dead-space.avif",
    title: "Dead Space - Out Now",
    description: "The completely rebuilt sci-fi survival horror classic returns.",
    price: "$399",
  },
]

const TwoGridSliderSettings = {
  arrows: false,
  infinite: false,
  slidesToShow: 2,
  slidesToScroll: 2,
  swipeToSlide: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
      }
    },
  ]
}

const FreeGamesData = [
  {
    id: 1,
    url: "/",
    image: "/images/city-of-gangsters-wd.avif",
    feature: "Free Now",
    title: "City of Gangsters",
    description: "Free Now - Feb 10 at 12:00 AM",
  },
  {
    id: 2,
    url: "/",
    image: "/images/dishonored-wd.webp",
    feature: "Free Now",
    title: "Dishonored: Death of the Outsider",
    description: "Free Now - Feb 10 at 12:00 AM",
  },
  {
    id: 3,
    url: "/",
    image: "/images/recipe-for-disaster-wd.avif",
    feature: "Comming Soon",
    title: "Recipe for Disaster",
    description: "Free Feb 10 - Feb 17",
  },
]

const TopSellersData = [
  {
    id: 1,
    url: "/",
    image: "/images/hogwarts-legacy-sm.avif",
    title: "Hogwarts Legacy",
    available: "Avaliable 02/11/23",
    price: "$388",
  },
  {
    id: 2,
    url: "/",
    image: "/images/cyberpunk-sm.webp",
    title: "Cyberpunk 2077",
    discount: -50,
    prevPrice: "$395.99",
    price: "$197.99",
  },
  {
    id: 3,
    url: "/",
    image: "/images/grand-theft-auto-sm.webp",
    title: "Grand Theft Auto V: Premium Edition",
    available: "Coming Soon",
    price: "$388",
  },
  {
    id: 4,
    url: "/",
    image: "/images/borderlands-sm.avif",
    title: "Borderlands 3",
    onEpic: true,
    available: "Avaliable 02/06/23",
  },
  {
    id: 5,
    url: "/",
    image: "/images/god-of-war-sm.webp",
    title: "God of War",
    price: "Free",
  },
]

const MostPopularData = [
  {
    id: 1,
    url: "/",
    image: "/images/grand-theft-auto.webp",
    feature: "Base game",
    title: "Grand Theft Auto V: Premium Edition",
    price: "$246",
  },
  {
    id: 2,
    url: "/",
    image: "/images/valorant.webp",
    feature: "Base game",
    title: "VALORANT",
    price: "Free",
  },
  {
    id: 3,
    url: "/",
    image: "/images/naraka.avif",
    feature: "Base game",
    title: "NARAKA: BLADEPOINT",
    price: "$159",
  },
  {
    id: 4,
    url: "/",
    image: "/images/red-dead-redemption.jpg",
    feature: "Base game",
    title: "Red Dead Redemption 2",
    price: "$468",
  },
  {
    id: 5,
    url: "/",
    image: "/images/fifa-23.webp",
    feature: "Base game",
    title: "EA SPORTS FIFA 23 Standard Edition",
    price: "$469",
  },
  {
    id: 6,
    url: "/",
    image: "/images/dishonored.webp",
    feature: "Base game",
    title: "Dishonored: Death of the Outsider",
    discount: -100,
    prevPrice: "$233",
    price: "Free",
  },
  {
    id: 7,
    url: "/",
    image: "/images/bloons-td.webp",
    feature: "Base game",
    title: "Bloons TD 6",
    discount: -30,
    prevPrice: "$60.99",
    price: "$42.69",
  },
  {
    id: 8,
    url: "/",
    image: "/images/among-us.webp",
    feature: "Base game",
    title: "Among Us",
    price: "$21.99",
  },
  {
    id: 9,
    url: "/",
    image: "/images/star-wars.jpg",
    feature: "Base game",
    title: "STAR WARS Battlefront II: Celebration Edition",
    discount: -80,
    prevPrice: "$319",
    price: "$63.80",
  },
  {
    id: 10,
    url: "/",
    image: "/images/borderlands.webp",
    feature: "Edition",
    title: "Borderlands 3: Ultimate Edition",
    discount: -80,
    prevPrice: "$775.99",
    price: "$155.19",
  },
]

const Achievements = [
  {
    id: 1,
    url: "/",
    image: "/images/season.webp",
    feature: "Base game",
    title: "SEASON: A letter to the future",
    discount: -10,
    prevPrice: "$127.88",
    price: "$115.09",
  },
  {
    id: 2,
    url: "/",
    image: "/images/garden-in.avif",
    feature: "Base game",
    title: "Garden In",
    price: "$51.28",
  },
  {
    id: 3,
    url: "/",
    image: "/images/colossal-cave.avif",
    feature: "Base game",
    title: "Colossal Cave",
    price: "$175.99",
  },
  {
    id: 4,
    url: "/",
    image: "/images/nhra.jpg",
    feature: "Base game",
    title: "NHRA Championship Drag Racing - Speed For All",
    discount: -60,
    prevPrice: "$219.99",
    price: "$87.99",
  },
  {
    id: 5,
    url: "/",
    image: "/images/peppa-pig.jpg",
    feature: "Base game",
    title: "My Friend Peppa Pig",
    price: "$248",
  },
  {
    id: 6,
    url: "/",
    image: "/images/my-little-pony.webp",
    feature: "Base game",
    title: "MY LITTLE PONY A Maretime Bay Adventure",
    price: "$248",
  },
  {
    id: 7,
    url: "/",
    image: "/images/paw-patrol.webp",
    feature: "Base game",
    title: "PAW Patrol Mighty Pups Save Adventure Bay",
    price: "$187",
  },
  {
    id: 8,
    url: "/",
    image: "/images/high-on-life.webp",
    feature: "Base game",
    title: "High On Life",
    price: "$263.99",
  },
  {
    id: 9,
    url: "/",
    image: "/images/ixion.webp",
    feature: "Base game",
    title: "IXION",
    price: "$153.99",
  },
  {
    id: 10,
    url: "/",
    image: "/images/hello-neighbor.avif",
    feature: "Base game",
    title: "Hello Neighbor 2",
    price: "$175.99",
  },
]

const RecentlyUpdatedData = [
  {
    id: 1,
    url: "/",
    image: "/images/way-of-the-hunter.webp",
    feature: "Base game",
    title: "Way of the Hunter",
    discount: -25,
    prevPrice: "$185",
    price: "$138.75",
  },
  {
    id: 2,
    url: "/",
    image: "/images/anno.webp",
    feature: "Base game",
    title: "Anno 1800 Standard Edition",
    price: "$438",
  },
  {
    id: 3,
    url: "/",
    image: "/images/genshin.avif",
    feature: "Base game",
    title: "Genshin Impact",
    price: "Free",
  },
  {
    id: 4,
    url: "/",
    image: "/images/kof.webp",
    feature: "Base game",
    title: "THE KING OF FIGHTERS XV",
    price: "$468",
  },
  {
    id: 5,
    url: "/",
    image: "/images/kao.webp",
    feature: "Base game",
    title: "Kao the Kangaroo",
    price: "$199",
  },
  {
    id: 6,
    url: "/",
    image: "/images/auto-chess.avif",
    feature: "Base game",
    title: "Auto Chess",
    price: "Free",
  },
  {
    id: 7,
    url: "/",
    image: "/images/idle-champions.webp",
    feature: "Base game",
    title: "Idle Champions of the Forgotten Realms",
    price: "Free",
  },
  {
    id: 8,
    url: "/",
    image: "/images/eve-online.webp",
    feature: "Base game",
    title: "EVE Online",
    price: "Free",
  },
  {
    id: 9,
    url: "/",
    image: "/images/northgard.webp",
    feature: "Base game",
    title: "Northgard",
    price: "$131.99",
  },
  {
    id: 10,
    url: "/",
    image: "/images/sackboy.avif",
    feature: "Base game",
    title: "Sackboy: A Big Adventure",
    discount: -33,
    prevPrice: "$468",
    price: "$313.56",
  },
]

const NowStoreData = [
  {
    id: 1,
    url: "/",
    image: "/images/the-sims.avif",
    feature: "Base game",
    title: "The Sims 4",
    onEpic: true,
    price: "Free",
  },
  {
    id: 2,
    url: "/",
    image: "/images/endwar.avif",
    feature: "Base game",
    title: "Tom Clancy's EndWar",
    onEpic: true,
    price: "$72",
  },
  {
    id: 3,
    url: "/",
    image: "/images/snowtopia.avif",
    feature: "Base game",
    title: "Snowtopia - Ski Resort Builder",
    onEpic: true,
    price: "$109",
  },
  {
    id: 4,
    url: "/",
    image: "/images/anna-quest.avif",
    feature: "Base game",
    title: "Anna's Quest",
    onEpic: true,
    price: "$128",
  },
  {
    id: 5,
    url: "/",
    image: "/images/radioactive-dwarfs.webp",
    feature: "Base game",
    title: "Radioactive Dwarfs - Evil From The Sewers",
    onEpic: true,
    discount: -50,
    prevPrice: "$21.99",
    price: "$10.99",
  },
  {
    id: 6,
    url: "/",
    image: "/images/terra-invicta.avif",
    feature: "Base game",
    title: "Terra Invicta",
    onEpic: true,
    price: "$299",
  },
  {
    id: 7,
    url: "/",
    image: "/images/risen.avif",
    feature: "Base game",
    title: "Risen",
    onEpic: true,
    price: "$95",
  },
  {
    id: 8,
    url: "/",
    image: "/images/hell-is-others.avif",
    feature: "Base game",
    title: "Hell is Others",
    onEpic: true,
    price: "$65.99",
  },
  {
    id: 9,
    url: "/",
    image: "/images/learning-factory.jpg",
    feature: "Base game",
    title: "Learning Factory",
    discount: -30,
    prevPrice: "$76.88",
    price: "$53.81",
  },
  {
    id: 10,
    url: "/",
    image: "/images/rain-world.avif",
    feature: "Base game",
    title: "Rain World",
    discount: -50,
    prevPrice: "$87.99",
    price: "$43.99",
  },
]

const ThreeGridData = [
  {
    id: 1,
    url: "/",
    image: "/images/the-sims-wd.jpg",
    title: "The Sims™4 Expansion",
    description: "The Sims™ 4 Growing Together Expansion Pack arrives March 16.",
    price: "$279",
  },
  {
    id: 2,
    url: "/",
    image: "/images/redfall-wd.avif",
    title: "Redfall - Pre-Purchase Now",
    description: "Uncover the Truth, Take Back Redfall in this new open-world, co-op FPS from Arkane Austin.",
    price: "$498",
  },
  {
    id: 3,
    url: "/",
    image: "/images/forspoken-wd.avif",
    title: "Forspoken",
    description: "Lead Frey on an unforgettable journey in her search for a way home after being transported to a fantastical land.",
    price: "$568",
  },
]

const ThreeGridSliderSettings = {
  arrows: false,
  infinite: false,
  slidesToShow: 3,
  slidesToScroll: 3,
  swipeToSlide: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
      }
    },
  ]
}

const Gift = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="svg css-uwwqev" viewBox="0 0 32 32" width="35" height="35"><g fill="currentColor" fillRule="evenodd"><path d="M30.443 16.605H19.72v-3.46h10.724v3.46zm-2.075 12.308c0 .397-.576.838-1.402.838h-7.247V17.99h8.648v10.924zm-14.876.838h4.843v-18.68h-4.843v18.68zm-10.033-.838V17.99h8.649v11.762H4.861c-.826 0-1.402-.441-1.402-.838zM1.384 13.146h10.724v3.46H1.384v-3.46zm1.773-4.324c0-1.622 1.319-2.94 2.94-2.94 2.752 0 5.093 3.78 5.575 5.88H6.097a2.944 2.944 0 0 1-2.94-2.94zm22.573-2.94c1.621 0 2.94 1.318 2.94 2.94 0 1.621-1.319 2.94-2.94 2.94h-5.574c.481-2.1 2.822-5.88 5.574-5.88zm5.405 5.88h-2.244a4.304 4.304 0 0 0 1.163-2.94 4.329 4.329 0 0 0-4.324-4.325c-2.89 0-5.227 2.813-6.341 5.294a.686.686 0 0 0-.362-.105H12.8a.686.686 0 0 0-.362.105c-1.114-2.481-3.45-5.294-6.34-5.294a4.329 4.329 0 0 0-4.325 4.325c0 1.136.444 2.168 1.163 2.94H.692a.692.692 0 0 0-.692.692v4.843c0 .382.31.692.692.692h1.384v10.924c0 1.246 1.223 2.222 2.785 2.222h22.105c1.562 0 2.785-.976 2.785-2.222V17.99h1.384c.382 0 .692-.31.692-.692v-4.843a.692.692 0 0 0-.692-.692zM15.914 4.151c.381 0 .691-.31.691-.692V.692a.692.692 0 0 0-1.383 0v2.767c0 .382.31.692.692.692"></path><path d="M19.546 5.362a.69.69 0 0 0 .49-.203l1.037-1.037a.692.692 0 1 0-.978-.979l-1.038 1.038a.692.692 0 0 0 .489 1.181M11.792 5.16a.69.69 0 0 0 .978 0 .692.692 0 0 0 0-.979l-1.038-1.038a.692.692 0 1 0-.978.979l1.038 1.037z"></path></g></svg>
)

const Home: NextPage = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0)
  const heroSlider = useRef<Slider | null>(null)
  const feburuarySlider1 = useRef<Slider | null>(null)
  const mostPopularSlider = useRef<Slider | null>(null)
  const achievementsSlider = useRef<Slider | null>(null)
  const recentlyUpdatedSlider = useRef<Slider | null>(null)
  const nowStoreSlider = useRef<Slider | null>(null)

  const setActiveSlide = (idx: number) => {
    setActiveIndex(idx)
    heroSlider.current?.slickGoTo(idx)
  }

  return (
    <div>
      <Head>
        <title>Epic Games Store | Download & Play PC Games, Mods, DLC & More – Epic Games</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        {/* Hero */}
        <section>
          <div className="container pb-20 md:pb-12">
            <div className="grid grid-cols-12 gap-2 xl:gap-8">
              <div className="col-span-12 md:col-span-8">
                <Slider
                  ref={heroSlider}
                  beforeChange={(current, next) => setActiveIndex(next)}
                  {...HeroSliderSettings}
                >
                  {HeroSlidesData.map((el) => (
                    <Link key={el.id} href={el.url}>
                      <HeroCard
                        image={el.image}
                        logo={el.logo}
                        title={el.title}
                        feature={el.feature}
                        description={el.description}
                        prevPrice={el.prevPrice}
                        price={el.price}
                        buttonCaption={el.buttonCaption}
                        hasWishList={el.hasWishList}
                        light={el.light}
                      />
                    </Link>
                  ))}
                </Slider>
              </div>

              <div className="hidden md:block md:col-span-4">
                <div className="flex flex-col gap-1">
                  {HeroSlidesData.map((el, idx) => (
                    <div key={el.id} onClick={() => setActiveSlide(idx)}>
                      <HeroList
                        thumb={el.thumb}
                        title={el.title}
                        className={activeIndex === idx ? "bg-[#FFFFFF14]" : ""}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* February Savings Spotlight */}
        <section>
          <div className="container pb-12">
            <div className="flex items-center justify-between mb-[18px]">
              <Link href="/">
                <h2>
                  <span className="text-lg font-normal">February Savings Spotlight</span>
                  <i className="fa-solid fa-chevron-right ml-1 text-xs"></i>
                </h2>
              </Link>
              <div className="hidden md:flex gap-2.5 text-xs">
                <button className="w-[30px] h-[30px] rounded-full bg-[#202020] focus:border border-white" onClick={() => feburuarySlider1.current?.slickPrev()}>
                  <i className="fa-solid fa-chevron-left"></i>
                </button>
                <button className="w-[30px] h-[30px] rounded-full bg-[#202020] focus:border border-white" onClick={() => feburuarySlider1.current?.slickNext()}>
                  <i className="fa-solid fa-chevron-right"></i>
                </button>
              </div>
            </div>

            <Slider ref={feburuarySlider1} {...SixGridSliderSettings}>
              {FebruarySavingsData.map((el) => (
                <Link key={el.id} href={el.url}>
                  <SixGridCard
                    image={el.image}
                    feature={el.feature}
                    title={el.title}
                    discount={el.discount}
                    prevPrice={el.prevPrice}
                    price={el.price}
                  />
                </Link>
              ))}
            </Slider>
          </div>
        </section>

        {/* Two Grid */}
        <section>
          <div className="container pb-20 md:pb-12">
            <Slider {...TwoGridSliderSettings}>
              {TwoGridData.map((el) => (
                <Link key={el.id} href={el.url}>
                  <TwoGridCard
                    image={el.image}
                    title={el.title}
                    description={el.description}
                    price={el.price}
                    group={el.group}
                  />
                </Link>
              ))}
            </Slider>
          </div>
        </section>

        {/* Free Games */}
        <section>
          <div className="container pb-12">
            <div className="p-4 md:px-10 md:py-8 rounded bg-[#FFFFFF1A]">
              <div className="flex items-center gap-3 mb-6">
                <Gift />
                <h2 className="mr-auto text-lg">Free Games</h2>
                <Link href="/">
                  <span className="px-5 py-2 border rounded text-xs font-medium uppercase hover:bg-[#FFFFFF29] duration-300">View More</span>
                </Link>
              </div>

              <div className="flex flex-col md:flex-row gap-8 md:gap-4">
                {FreeGamesData.map((el) => (
                  <Link key={el.id} href={el.url}>
                    <FreeCard
                      image={el.image}
                      feature={el.feature}
                      title={el.title}
                      description={el.description}
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Top Sellers, Most Played and Top Upcoming WishListed */}
        <section>
          <div className="container pb-20 md:pb-12">
            <Slider {...ThreeGridSliderSettings}>
              <GameMenu
                title="Top Sellers"
                url="/"
                data={TopSellersData}
              />
              <GameMenu
                title="Most Played"
                url="/"
                data={TopSellersData}
                className="border-l border-r border-[#FFFFFF1a]"
              />
              <GameMenu
                title="Top Upcoming Wishlisted"
                url="/"
                data={TopSellersData}
              />
            </Slider>
          </div>
        </section>

        {/* Most Popular */}
        < section >
          <div className="container pb-12">
            <div className="flex items-center justify-between mb-[18px]">
              <Link href="/">
                <h2>
                  <span className="text-lg font-normal">Most Popular</span>
                  <i className="fa-solid fa-chevron-right ml-1 text-xs"></i>
                </h2>
              </Link>
              <div className="hidden md:flex gap-2.5 text-xs">
                <button className="w-[30px] h-[30px] rounded-full bg-[#202020] focus:border border-white" onClick={() => mostPopularSlider.current?.slickPrev()}>
                  <i className="fa-solid fa-chevron-left"></i>
                </button>
                <button className="w-[30px] h-[30px] rounded-full bg-[#202020] focus:border border-white" onClick={() => mostPopularSlider.current?.slickNext()}>
                  <i className="fa-solid fa-chevron-right"></i>
                </button>
              </div>
            </div>

            <Slider ref={mostPopularSlider} {...SixGridSliderSettings}>
              {MostPopularData.map((el) => (
                <Link key={el.id} href={el.url}>
                  <SixGridCard
                    image={el.image}
                    feature={el.feature}
                    title={el.title}
                    discount={el.discount}
                    prevPrice={el.prevPrice}
                    price={el.price}
                  />
                </Link>
              ))}
            </Slider>
          </div>
        </section >

        {/* New Releases, Top Player Rated and Coming Soon */}
        <section>
          <div className="container pb-20 md:pb-12">
            <Slider {...ThreeGridSliderSettings}>
              <GameMenu
                title="New Releases"
                url="/"
                data={TopSellersData}
              />
              <GameMenu
                title="Top Player Rated"
                url="/"
                data={TopSellersData}
              />
              <GameMenu
                title="Coming Soon"
                url="/"
                data={TopSellersData}
              />
            </Slider>
          </div>
        </section>

        {/* Three Grid */}
        <section>
          <div className="container pb-20 md:pb-12">
            <Slider {...ThreeGridSliderSettings}>
              {ThreeGridData.map((el) => (
                <Link key={el.id} href={el.url}>
                  <ThreeGridCard
                    image={el.image}
                    title={el.title}
                    description={el.description}
                    price={el.price}
                  />
                </Link>
              ))}
            </Slider>
          </div>
        </section>

        {/* Games with Achievements */}
        < section >
          <div className="container pb-12">
            <div className="flex items-center justify-between mb-[18px]">
              <Link href="/">
                <h2>
                  <span className="text-lg font-normal">Games with Achievements</span>
                  <i className="fa-solid fa-chevron-right ml-1 text-xs"></i>
                </h2>
              </Link>
              <div className="hidden md:flex gap-2.5 text-xs">
                <button className="w-[30px] h-[30px] rounded-full bg-[#202020] focus:border border-white" onClick={() => achievementsSlider.current?.slickPrev()}>
                  <i className="fa-solid fa-chevron-left"></i>
                </button>
                <button className="w-[30px] h-[30px] rounded-full bg-[#202020] focus:border border-white" onClick={() => achievementsSlider.current?.slickNext()}>
                  <i className="fa-solid fa-chevron-right"></i>
                </button>
              </div>
            </div>

            <Slider ref={achievementsSlider} {...SixGridSliderSettings}>
              {Achievements.map((el) => (
                <Link key={el.id} href={el.url}>
                  <SixGridCard
                    image={el.image}
                    feature={el.feature}
                    title={el.title}
                    discount={el.discount}
                    prevPrice={el.prevPrice}
                    price={el.price}
                  />
                </Link>
              ))}
            </Slider>
          </div>
        </section >

        {/* Recently Updated */}
        < section >
          <div className="container pb-12">
            <div className="flex items-center justify-between mb-[18px]">
              <h2 className="text-lg font-normal">
                Recently Updated
              </h2>
              <div className="hidden md:flex gap-2.5 text-xs">
                <button className="w-[30px] h-[30px] rounded-full bg-[#202020] focus:border border-white" onClick={() => recentlyUpdatedSlider.current?.slickPrev()}>
                  <i className="fa-solid fa-chevron-left"></i>
                </button>
                <button className="w-[30px] h-[30px] rounded-full bg-[#202020] focus:border border-white" onClick={() => recentlyUpdatedSlider.current?.slickNext()}>
                  <i className="fa-solid fa-chevron-right"></i>
                </button>
              </div>
            </div>

            <Slider ref={recentlyUpdatedSlider} {...SixGridSliderSettings}>
              {RecentlyUpdatedData.map((el) => (
                <Link key={el.id} href={el.url}>
                  <SixGridCard
                    image={el.image}
                    feature={el.feature}
                    title={el.title}
                    discount={el.discount}
                    prevPrice={el.prevPrice}
                    price={el.price}
                  />
                </Link>
              ))}
            </Slider>
          </div>
        </section >

        {/* Now On The Epic Games Store */}
        < section >
          <div className="container pb-12">
            <div className="flex items-center justify-between mb-[18px]">
              <h2 className="text-lg font-normal">
                Now On The Epic Games Store
              </h2>
              <div className="hidden md:flex gap-2.5 text-xs">
                <button className="w-[30px] h-[30px] rounded-full bg-[#202020] focus:border border-white" onClick={() => nowStoreSlider.current?.slickPrev()}>
                  <i className="fa-solid fa-chevron-left"></i>
                </button>
                <button className="w-[30px] h-[30px] rounded-full bg-[#202020] focus:border border-white" onClick={() => nowStoreSlider.current?.slickNext()}>
                  <i className="fa-solid fa-chevron-right"></i>
                </button>
              </div>
            </div>

            <Slider ref={nowStoreSlider} {...SixGridSliderSettings}>
              {NowStoreData.map((el) => (
                <Link key={el.id} href={el.url}>
                  <SixGridCard
                    image={el.image}
                    feature={el.feature}
                    title={el.title}
                    onEpic={el.onEpic}
                    discount={el.discount}
                    prevPrice={el.prevPrice}
                    price={el.price}
                  />
                </Link>
              ))}
            </Slider>
          </div>
        </section >

        {/* Explore Our Catalog */}
        <section>
          <div className="container pb-24">
            <div className="grid grid-cols-12 gap-5 md:gap-8">
              <div className="col-span-12 md:col-span-7">
                <Link href="/">
                  <div className="relative rounded-2xl overflow-hidden">
                    <Image className="w-full h-auto" src="/images/catalog.jpg" width={1920} height={1080} alt="catalog" />
                    <div className="absolute z-10 top-0 left-0 w-full h-full bg-white opacity-0 hover:opacity-10 duration-300" />
                  </div>
                </Link>
              </div>
              <div className="col-span-12 md:col-span-5 flex flex-col justify-center">
                <Link href="/">
                  <h2 className="mb-2.5 md:mb-8 text-lg">Explore Our Catalog</h2>
                </Link>
                <p className="mb-12 text-[#F5F5F599]">
                  Browse by genre, features, price, and more to find your next favorite game.
                </p>
                <Link href="/" className="hidden md:block">
                  <Button className="text-black bg-white">Browse All</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </Layout >
    </div >
  )
}

export default Home
