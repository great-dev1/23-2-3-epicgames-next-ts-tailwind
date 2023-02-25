import { useState } from "react"
import type { NextPage } from "next"
import { useRouter } from "next/router"
import Head from "next/head"
import Link from "next/link"
import Image from "next/image"
import Slider from "react-slick"
import Layout from "src/layout"
import Badge from "@components/Badge"
import Button from "@components/Button"

const Star = ({ width }: { width: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className="svg css-uwwqev" viewBox="0 0 36 34" width={width}><path d="M17.7835 1.05234C17.8961 0.714958 18.3733 0.714958 18.4859 1.05234L22.4334 12.8804C22.4839 13.0316 22.6253 13.1335 22.7846 13.1335H35.5375C35.8985 13.1335 36.0461 13.5975 35.7513 13.806L25.4512 21.0917C25.318 21.1859 25.2622 21.3563 25.3138 21.5112L29.2521 33.3116C29.3654 33.651 28.9792 33.9377 28.6871 33.7311L18.3485 26.4182C18.2204 26.3276 18.049 26.3276 17.9209 26.4182L7.58236 33.7311C7.29026 33.9377 6.90407 33.651 7.01734 33.3116L10.9556 21.5112C11.0073 21.3563 10.9515 21.1859 10.8182 21.0917L0.518159 13.806C0.223381 13.5975 0.370904 13.1335 0.731971 13.1335H13.4848C13.6441 13.1335 13.7856 13.0316 13.836 12.8804L17.7835 1.05234Z" fill="#F5F5F5"></path></svg>
)

const ImagesData = [
  {
    id: 1,
    image: "/images/product-slide-1.jpg",
  },
  {
    id: 2,
    image: "/images/product-slide-2.jpg",
  },
  {
    id: 3,
    image: "/images/product-slide-3.jpg",
  },
  {
    id: 4,
    image: "/images/product-slide-4.jpg",
  },
  {
    id: 5,
    image: "/images/product-slide-5.jpg",
  },
  {
    id: 6,
    image: "/images/product-slide-6.jpg",
  },
  {
    id: 7,
    image: "/images/product-slide-7.jpg",
  },
  {
    id: 8,
    image: "/images/product-slide-8.jpg",
  },
  {
    id: 9,
    image: "/images/product-slide-9.jpg",
  },
  {
    id: 10,
    image: "/images/product-slide-10.jpg",
  },
]

const ThumbsData = [
  {
    id: 1,
    thumb: "/images/product-thumb-1.webp",
  },
  {
    id: 2,
    thumb: "/images/product-thumb-2.jpg",
  },
  {
    id: 3,
    thumb: "/images/product-thumb-3.webp",
  },
  {
    id: 4,
    thumb: "/images/product-thumb-4.webp",
  },
  {
    id: 5,
    thumb: "/images/product-thumb-5.webp",
  },
  {
    id: 6,
    thumb: "/images/product-thumb-6.webp",
  },
  {
    id: 7,
    thumb: "/images/product-thumb-7.webp",
  },
  {
    id: 8,
    thumb: "/images/product-thumb-8.jpg",
  },
  {
    id: 9,
    thumb: "/images/product-thumb-9.jpg",
  },
  {
    id: 10,
    thumb: "/images/product-thumb-10.webp",
  },
]

const PrevImageArrow = (props: any) => {
  const { onClick } = props

  return (
    <button className="hidden md:block absolute z-10 top-[calc(50%-15px)] left-4" onClick={onClick}>
      <i className="fa-solid fa-chevron-left text-xl xl:text-3xl"></i>
    </button>
  )
}

const NextImageArrow = (props: any) => {
  const { onClick } = props

  return (
    <button className="hidden md:block absolute z-10 top-[calc(50%-15px)] right-4" onClick={onClick}>
      <i className="fa-solid fa-chevron-right text-xl xl:text-3xl"></i>
    </button>
  )
}

const ImageSliderSettings = {
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: <PrevImageArrow />,
  nextArrow: <NextImageArrow />,
}

const PrevThumbArrow = (props: any) => {
  const { onClick } = props

  return (
    <button className="absolute z-10 top-[calc(50%-15px)] -left-10 w-8 h-8 rounded-full bg-[#202020] focus:border border-white" onClick={onClick}>
      <i className="fa-solid fa-chevron-left"></i>
    </button>
  )
}

const NextThumbArrow = (props: any) => {
  const { onClick } = props

  return (
    <button className="absolute z-10 top-[calc(50%-15px)] -right-10 w-8 h-8 rounded-full bg-[#202020] focus:border border-white" onClick={onClick}>
      <i className="fa-solid fa-chevron-right"></i>
    </button>
  )
}

const ThumbSliderSettings = {
  infinite: false,
  focusOnSelect: true,
  slidesToShow: 1,
  slidesToScroll: 3,
  swipeToSlide: true,
  variableWidth: true,
  prevArrow: <PrevThumbArrow />,
  nextArrow: <NextThumbArrow />,
}

const InfoData = [
  {
    id: 1,
    title: "Refund Type",
    description: "Self-Refundable",
    learnMore: true,
  },
  {
    id: 2,
    title: "Developer",
    description: "Santa Monica Stutio",
  },
  {
    id: 3,
    title: "Publisher",
    description: "PlayStation PC LLC",
  },
  {
    id: 4,
    title: "Release Date",
    description: "01/15/22",
  },
  {
    id: 5,
    title: "Platform",
    description: <i className="fa-brands fa-windows text-base"></i>,
  },
]

const FeaturesData = [
  {
    id: 1,
    category: "Genres",
    items: [
      {
        url: "/",
        caption: "Action",
      },
      {
        url: "/",
        caption: "RPG",
      },
      {
        url: "/",
        caption: "Adventure",
      },
    ]
  },
  {
    id: 2,
    category: "Features",
    items: [
      {
        url: "/",
        caption: "Cloud Saves",
      },
      {
        url: "/",
        caption: "Competitive",
      },
      {
        url: "/",
        caption: "Single Player",
      },
    ]
  },
]

const StoryData = [
  {
    id: 1,
    title: "Enter the Norse realm",
    description: "His vengeance against the Gods of Olympus years behind him, Kratos now lives as a man in the realm of Norse Gods and monsters. It is in this harsh, unforgiving world that he must fight to survive… and teach his son to do the same.",
  },
  {
    id: 2,
    title: "Grasp a second chance",
    description: "Kratos is a father again. As mentor and protector to Atreus, a son determined to earn his respect, he is forced to deal with and control the rage that has long defined him while out in a very dangerous world with his son.",
  },
  {
    id: 3,
    title: "Journey to a dark, elemental world of fearsome creatures",
    description: "From the marble and columns of ornate Olympus to the gritty forests, mountains and caves of pre-Viking Norse lore, this is a distinctly new realm with its own pantheon of creatures, monsters and gods.",
  },
  {
    id: 4,
    title: "Engage in visceral, physical combat",
    description: "With an over the shoulder camera that brings the player closer to the action than ever before, fights in God of War™ mirror the pantheon of Norse creatures Kratos will face: grand, gritty and grueling. A new main weapon and new abilities retain the defining spirit of the God of War series while presenting a vision of conflict that forges new ground in the genre.",
  },
]

const PCFeaturesData = [
  {
    id: 1,
    title: "High Fidelity Graphics",
    description: "Striking visuals enhanced on PC. Enjoy true 4K resolution, on supported devices, with unlocked framerates for peak performance. Dial in your settings via a wide range of graphical presets and options including higher resolution shadows, improved screen space reflections, the addition of GTAO and SSDO, and much more.",
  },
  {
    id: 2,
    title: "NVIDIA® DLSS and Reflex Support",
    description: "Quality meets performance. Harness the AI power of NVIDIA Deep Learning Super Sampling (DLSS) to boost frame rates and generate beautiful, sharp images on select Nvidia GPUs. Utilize NVIDIA Reflex low latency technology allowing you to react quicker and hit harder combos with the responsive gameplay you crave on GeForce GPUs.",
  },
  {
    id: 3,
    title: "Controls Customization",
    description: "Play your way. With support for the DUALSHOCK®4 and DUALSENSE® wireless controllers, a wide range of other gamepads, and fully customizable bindings for mouse and keyboard, you have the power to fine-tune every action to match your playstyle.",
  },
  {
    id: 4,
    title: "Ultra-wide Support",
    description: "Immerse yourself like never before. Journey through the Norse realms taking in breathtaking vistas in panoramic widescreen. With 21:9 ultra-widescreen support, God of War™ presents a cinema quality experience that further expands the original seamless theatrical vision.",
  },
]

const SocialLinksData = [
  {
    id: 1,
    url: "/",
    icon: <i className="fa-brands fa-square-facebook"></i>,
  },
  {
    id: 2,
    url: "/",
    icon: <i className="fa-solid fa-earth-americas"></i>,
  },
  {
    id: 3,
    url: "/",
    icon: <i className="fa-brands fa-instagram"></i>,
  },
  {
    id: 4,
    url: "/",
    icon: <i className="fa-brands fa-twitter"></i>,
  },
]

const GameFeaturesData = [
  {
    id: 1,
    icon: "/icons/paint-icon.svg",
    subtitle: "This game has Inclusive",
    title: "Character Customization",
  },
  {
    id: 2,
    icon: "/icons/dinosaur-icon.svg",
    subtitle: "This game has",
    title: "Great Boss Battles",
  },
  {
    id: 3,
    icon: "/icons/laugh-icon.svg",
    subtitle: "This game is",
    title: "Extremely Fun",
  },
  {
    id: 4,
    icon: "/icons/edit-icon.svg",
    subtitle: "This game has",
    title: "Amazing Storytelling",
  },
  {
    id: 5,
    icon: "/icons/mask-icon.svg",
    subtitle: "This game has",
    title: "Amazing Characters",
  },
  {
    id: 6,
    icon: "/icons/trophy-icon.svg",
    subtitle: "This game has",
    title: "Competitive Players",
  },
]

const Rating1 = () => (
  <svg viewBox="0 0 75 75" height="75" width="75" version="1.1" className="-rotate-90">
    <circle strokeWidth="3" stroke="#202020" cx="50%" cy="50%" r="36"></circle>
    <circle strokeWidth="3" stroke="#0074E4" cx="50%" cy="50%" r="36" strokeDasharray="226.1946710584651, 226.1946710584651" strokeDashoffset="4.523893421169306"></circle>
  </svg>
)

const Rating2 = () => (
  <svg viewBox="0 0 75 75" height="75" width="75" version="1.1" className="-rotate-90">
    <circle strokeWidth="3" stroke="#202020" cx="50%" cy="50%" r="36"></circle>
    <circle strokeWidth="3" stroke="#0074E4" cx="50%" cy="50%" r="36" strokeDasharray="226.1946710584651, 226.1946710584651" strokeDashoffset="13.571680263507918"></circle>
  </svg>
)

const Rating3 = () => (
  <svg viewBox="0 0 75 75" height="75" width="75" version="1.1" className="-rotate-90">
    <circle strokeWidth="3" stroke="#202020" cx="50%" cy="50%" r="36" strokeDasharray="51.548667764616276, 5" strokeDashoffset="-2.5"></circle>
    <circle strokeWidth="3" stroke="#0074E4" cx="50%" cy="50%" r="36" strokeDasharray="51.548667764616276, 5, 51.548667764616276, 5, 51.548667764616276, 5, 51.548667764616276, 226.1946710584651" strokeDashoffset="-2.5"></circle>
  </svg>
)

const RatingsData = [
  {
    id: 1,
    svg: <Rating1 />,
    rating: "98%",
    title: "Critics Recommend",
  },
  {
    id: 2,
    svg: <Rating2 />,
    rating: "94",
    title: "Top Critic Average",
  },
  {
    id: 3,
    svg: <Rating3 />,
    rating: "Mighty",
    title: "OpenCritic Rating",
  },
]

const ReviewsData = [
  {
    id: 1,
    title: "IGN",
    author: "Jonathon Dornbush",
    content: "10/10",
    description: "God of War's outstanding characters, world, and combat come together to form an unforgettable adventure.",
    url: "/",
  },
  {
    id: 2,
    title: "Eurogamer",
    author: "Christian Donlan",
    content: "Recommended",
    description: "Despite eye-catching changes, the heart of this series remains gloriously unaltered.",
    url: "/",
  },
  {
    id: 3,
    title: "Giant Bomb",
    author: "Dan Ryckert",
    content: "5 stars",
    description: "Sony Santa Monica makes us care about Kratos in this stunning revival of the series.",
    url: "/",
  },
]

const ReviewSliderSettings = {
  arrows: false,
  dots: true,
  infinite: false,
  slidesToShow: 2,
  swipeToSlide: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        variableWidth: true,
      }
    },
  ]
}

const MinimumSpecData = [
  {
    id: 1,
    title: "OS",
    content: "Windows 10 64-bit",
  },
  {
    id: 2,
    title: "Processor",
    content: "Intel i5-2500k (4 core 3.3 GHz) or AMD Ryzen 3 1200 (4 core 3.1 GHz)",
  },
  {
    id: 3,
    title: "Memory",
    content: "8 GB DDR",
  },
  {
    id: 4,
    title: "Storage",
    content: "70 GB HDD (SSD Recommended)",
  },
  {
    id: 5,
    title: "Direct X",
    content: "DirectX 11 (feature level 11_1)",
  },
  {
    id: 6,
    title: "Graphics",
    content: "NVIDIA GTX 960 (4 GB) or AMD R9 290X (4 GB)",
  },
]

const RecommendedSpecData = [
  {
    id: 1,
    title: "OS",
    content: "Windows 10 64-bit",
  },
  {
    id: 2,
    title: "Processor",
    content: "Intel i5-6600k (4 core 3.5 GHz) or AMD Ryzen 5 2400 G (4 core 3.6 GHz)",
  },
  {
    id: 3,
    title: "Memory",
    content: "8 GB DDR",
  },
  {
    id: 4,
    title: "Storage",
    content: "70 GB HDD",
  },
  {
    id: 5,
    title: "Direct X",
    content: "DirectX 11 (feature level 11_1)",
  },
  {
    id: 6,
    title: "Graphics",
    content: "Intel i5-6600k (4 core 3.5 GHz) or AMD Ryzen 5 2400 G (4 core 3.6 GHz)",
  },
]

const Product: NextPage = () => {
  const router = useRouter()
  const { pid } = router.query
  const [nav1, setNav1] = useState<any>()
  const [nav2, setNav2] = useState<any>()
  const [showDetail, setShowDetail] = useState<boolean>(false)

  return (
    <div>
      <Head>
        <title>God of War | Download & Play God of War – Epic Games Store</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        {/* Title and Features */}
        <section>
          <div className="container py-5 md:pb-12">
            <h2 className="mb-2.5 md:mb-4 text-[26px] md:text-[40px]">God of War</h2>
            <div className="flex items-center gap-4">
              {/* Reveiw */}
              <div className="flex items-center gap-1">
                <div className="flex">
                  <Star width={16} />
                  <Star width={16} />
                  <Star width={16} />
                  <Star width={16} />
                  <Star width={16} />
                </div>
                <span className="px-1 py-0.5 rounded text-xs font-bold text-[#F5F5F599] bg-[#FFFFFF1A]">4.9</span>
              </div>
              {/* Character Customization */}
              <div className="hidden md:flex items-center gap-2">
                <Image src="/icons/paint-icon.svg" width={20} height={20} alt="paint" />
                <span>Character Customization</span>
              </div>
              {/* Great Boss Battles */}
              <div className="hidden md:flex items-center gap-2">
                <Image src="/icons/dinosaur-icon.svg" width={20} height={20} alt="paint" />
                <span>Great Boss Battles</span>
              </div>
            </div>
          </div>
        </section>

        <main className="pb-24">
          <div className="container grid grid-cols-12 md:gap-x-8 xl:gap-x-16 pb-12">
            <div className="md:order-last col-span-12 md:col-span-5 xl:col-span-4">
              {/* Right Panel */}
              <section className="sticky top-[100px] flex flex-col gap-2.5">
                <div className="md:py-5">
                  <Image className="hidden md:block mx-auto" src="/images/god-of-war-logo.webp" width={160} height={160} alt="god of war" />
                  <Image className="md:hidden w-full h-auto rounded" src="/images/god-of-war-mobile.webp" width={480} height={270} alt="god of war" />
                </div>
                <Badge className="self-center md:self-start bg-[#FFFFFF1A]">Base Game</Badge>
                <div className="flex items-center justify-center md:justify-start">
                  <Badge className="self-start mr-2.5 bg-[#0074E4]">-40%</Badge>
                  <s className="mr-2.5 text-[#F5F5F599]">$398</s>
                  <h4 className="text-xs">$238.80</h4>
                </div>
                <p className="text-center md:text-left text-xs">Sale ends 2/17/2023 at 12:00 AM</p>
                <Button className="bg-[#0074E4]">Buy Now</Button>
                <Button className="border hover:bg-[#FFFFFF29] duration-300">Add to Cart</Button>
                <Button className="gap-1.5 border hover:bg-[#FFFFFF29] duration-300">
                  <i className="fa-solid fa-circle-plus text-lg"></i>
                  <span>Add to Wishlist</span>
                </Button>
                <ul>
                  {InfoData.map((el) => (
                    <li key={el.id} className="flex items-center py-2.5 border-b border-[#FFFFFF1A]">
                      <span className="mr-auto text-[#F5F5F599]">{el.title}</span>
                      <span>{el.description}</span>
                      {el.learnMore && (
                        <Link href="/">
                          <i className="fa-regular fa-circle-question ml-2.5 text-base"></i>
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
                <div className="flex gap-2.5 pt-2.5 pb-5">
                  <Link href="/" className="flex-grow">
                    <div className="flex items-center justify-center gap-2 px-5 py-2 border rounded text-xs font-medium uppercase hover:bg-[#FFFFFF29] duration-300">
                      <i className="fa-solid fa-share-nodes"></i>
                      <span>Share</span>
                    </div>
                  </Link>
                  <Link href="/" className="flex-grow">
                    <div className="flex items-center justify-center gap-2 px-5 py-2 border rounded text-xs font-medium uppercase hover:bg-[#FFFFFF29] duration-300">
                      <i className="fa-solid fa-flag"></i>
                      <span>Report</span>
                    </div>
                  </Link>
                </div>
              </section>
            </div>

            <div className="col-span-12 md:col-span-7 xl:col-span-8 flex flex-col gap-y-12">
              {/* Sliders */}
              <section>
                {/* Image Slider */}
                <div>
                  <Slider
                    asNavFor={nav2}
                    ref={imageSlider => setNav1(imageSlider)}
                    {...ImageSliderSettings}
                  >
                    {ImagesData.map((el) => (
                      <Image key={el.id} className="w-full h-auto rounded" src={el.image} width={1920} height={1080} alt="product image" />
                    ))}
                  </Slider>

                </div>

                {/* Thumb Slider */}
                <div className="relative mt-5 px-10">
                  <Slider
                    asNavFor={nav1}
                    ref={slider2 => setNav2(slider2)}
                    {...ThumbSliderSettings}
                  >
                    {ThumbsData.map((el) => (
                      <div key={el.id} className="max-w-[100px] mx-2">
                        <Image className="w-full h-auto rounded cursor-pointer" src={el.thumb} width={94} height={53} alt="product thumb" />
                      </div>
                    ))}
                  </Slider>
                </div>
              </section>

              {/* Overview */}
              <section>
                <p className="mb-12 text-base md:text-lg">
                  His vengeance against the Gods of Olympus years behind him, Kratos now lives as a man in the realm of Norse Gods and monsters. It is in this harsh, unforgiving world that he must fight to survive… and teach his son to do the same.
                </p>
                <div className="grid grid-cols-12 gap-4">
                  {FeaturesData.map((el) => (
                    <div key={el.id} className="col-span-6 px-5 border-l">
                      <h3 className="text-[#F5F5F599]">{el.category}</h3>
                      <ul className="flex flex-wrap gap-x-2">
                        {el.items.map((item, idx) => (
                          <li key={idx} className="underline hover:no-underline duration-300">
                            <Link href={item.url}>{item.caption}</Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>

              {/* Story and PC Features */}
              <section>
                <div className={`${showDetail ? "" : "max-h-[400px]"} overflow-hidden`}>
                  <h3 className="mb-5 xl:text-base">God of War</h3>
                  {StoryData.map((el) => (
                    <div key={el.id}>
                      <h4 className="mb-5 xl:text-base">{el.title}</h4>
                      <p className="mb-5 text-[#F5F5F599]">{el.description}</p>
                    </div>
                  ))}

                  <h3 className="mb-5 xl:text-base">PC FEATURES</h3>
                  {PCFeaturesData.map((el) => (
                    <div key={el.id}>
                      <h4 className="mb-5 xl:text-base">{el.title}</h4>
                      <p className="mb-5 text-[#F5F5F599]">{el.description}</p>
                    </div>
                  ))}
                </div>

                <div className="relative">
                  <button className="flex items-center justify-center gap-1 h-[50px] px-5 rounded text-xs font-medium tracking-[0.5px] uppercase w-full bg-[#FFFFFF33] hover:bg-[#FFFFFF50] duration-300" onClick={() => setShowDetail(!showDetail)
                  }>
                    <span>{showDetail ? "Show Less" : "Show More"}</span>
                    {showDetail ? (
                      <i className="fa-solid fa-chevron-up"></i>
                    ) : (
                      <i className="fa-solid fa-chevron-down"></i>
                    )}
                  </button>
                  {!showDetail && (
                    <div className="absolute top-[-100px] w-full h-[100px] bg-gradient-to-b from-[#12121200] to-[#121212]" />
                  )}
                </div>
              </section>
            </div>
          </div>

          <div className="container grid grid-cols-12 md:gap-x-8 xl:gap-x-16 pb-12">
            <div className="col-span-12 xl:col-span-8 flex flex-col gap-y-12">
              {/* Follow Us */}
              <section>
                <h3 className="mb-5 text-base">Follow Us</h3>
                <div className="flex items-center justify-center gap-8 md:gap-10 p-5 xl:px-15 xl:py-9 rounded text-2xl md:text-3xl text-[#F5F5F599] bg-[#202020]">
                  {SocialLinksData.map((el) => (
                    <Link key={el.id} href={el.url} className="hover:text-[#F5F5F5] duration-300">
                      {el.icon}
                    </Link>
                  ))}
                </div>
              </section>

              {/* Epic Player Ratings */}
              <section>
                <h3 className="mb-2.5 text-base">Epic Player Ratings</h3>
                <p className="mb-[30px] text-[#F5F5F599]">Captured from players in the Epic Games ecosystem.</p>
                <div className="flex items-center justify-center gap-4 mb-[30px]">
                  <span className="text-5xl md:text-6xl">4.9</span>
                  <div className="flex gap-1">
                    <Star width={38} />
                    <Star width={38} />
                    <Star width={38} />
                    <Star width={38} />
                    <Star width={38} />
                  </div>
                </div>
                <div className="grid grid-cols-12 gap-5 xl:gap-8">
                  {GameFeaturesData.map((el) => (
                    <div key={el.id} className="col-span-12 md:col-span-6">
                      <div className="flex xl:flex-col items-center gap-5 px-[22px] py-6 xl:py-8 rounded-lg xl:text-center bg-[#202020]">
                        <Image className="w-[42px] xl:w-[60px] h-auto" src={el.icon} width={64} height={64} alt={el.title} />
                        <div>
                          <h4 className="mb-1 text-xs text-[#F5F5F599]">{el.subtitle}</h4>
                          <h3 className="text-lg font-bold">{el.title}</h3>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Ratings */}
              <section>
                <h3 className="mb-10 text-base">Ratings</h3>
                <div className="flex flex-col md:flex-row gap-5 mb-[30px]">
                  <div className="flex gap-5">
                    {RatingsData.map((el) => (
                      <div key={el.id} className="flex flex-col items-center gap-2.5 text-center">
                        <div className="relative">
                          {el.svg}
                          <span className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 text-base">{el.rating}</span>
                        </div>
                        <h3 className="text-base">{el.title}</h3>
                      </div>
                    ))}
                  </div>
                  <Link href="/" className="self-end ml-auto">
                    <div className="flex items-center gap-2 text-xs text-[#F5F5F599] hover:text-[#F5F5F5] duration-300">
                      <span>SEE ALL REVIEWS</span>
                      <i className="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
                    </div>
                  </Link>
                </div>

                <div className="-mx-2 mb-20">
                  <Slider {...ReviewSliderSettings}>
                    {ReviewsData.map((el) => (
                      <div key={el.id} className="max-w-[290px] md:max-w-full mb-2 px-2.5">
                        <div className="p-5 rounded bg-[#202020]">
                          <h3>{el.title}</h3>
                          <h4 className="mb-5 pb-5 border-b border-[#FFFFFF1A] text-[#F5F5F599]">{el.author}</h4>
                          <h4 className="mb-5">{el.content}</h4>
                          <p className="line-clamp-2 mb-10 text-[#F5F5F599]">"{el.description}"</p>
                          <Link href={el.url} className="flex items-center gap-1 text-[#F5F5F599]">
                            <span className="uppercase underline hover:no-underline duration-300">Read Full Review</span>
                            <i className="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
                          </Link>
                        </div>
                      </div>
                    ))}
                  </Slider>
                </div>

                <p className="text-xs text-[#F5F5F599]">Reviews provided by OpenCritic</p>
              </section>

              {/* Specifications */}
              <section>
                <h3 className="mb-5 text-base">Specifications</h3>
                <div className="p-5 rounded bg-[#202020]">
                  <div className="border-b border-[#FFFFFF1A]">
                    <Link href="/">
                      <span className="inline-block py-[30px] border-b-[3px] hover:border-[#F5F5F599] text-[10px] tracking-[1px] font-bold uppercase duration-300">Windows</span>
                    </Link>
                  </div>

                  <div className="py-10 border-b border-[#F5F5F51A]">
                    <div className="grid grid-cols-12 gap-5">
                      <div className="col-span-6">
                        <h3 className="mb-[30px] text-[#F5F5F599]">Minimum</h3>
                        {MinimumSpecData.map((el) => (
                          <div key={el.id} className="mb-5">
                            <h4 className="text-[#F5F5F599]">{el.title}</h4>
                            <p>{el.content}</p>
                          </div>
                        ))}
                      </div>
                      <div className="col-span-6">
                        <h3 className="mb-[30px] text-[#F5F5F599]">Recommended</h3>
                        {RecommendedSpecData.map((el) => (
                          <div key={el.id} className="mb-5">
                            <h4 className="text-[#F5F5F599]">{el.title}</h4>
                            <p>{el.content}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-[#F5F5F599]">Languages Supported</h4>
                      <p>
                        AUDIO: English, French, German, Italian, Japanese, Polish, Portuguese, Portuguese - Brazil, Russian, Spanish - Spain, Spanish - Latin America<br />
                        TEXT: English, Dutch, French, German, Italian, Japanese, Korean, Polish, Portuguese, Portuguese - Brazil, Russian, Spanish - Spain, Spanish - Latin America, Turkish, Chinese - Traditional, Hungarian, Czech, Greek
                      </p>
                    </div>
                  </div>

                  <div className="pt-10 text-center">
                    <p className="mb-2.5 text-[#F5F5F599]">
                      © 2018, 2021 Sony Interactive Entertainment LLC. God of War is a registered trademark or trademark of Sony Interactive Entertainment LLC and related companies.
                    </p>
                    <Link href="/">Privacy Policy</Link>
                  </div>
                </div>
              </section>
            </div>
          </div>

        </main>
      </Layout>
    </div>
  )
}

export default Product
