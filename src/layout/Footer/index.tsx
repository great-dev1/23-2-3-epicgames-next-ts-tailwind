import Link from "next/link"
import Image from "next/image"

const SocialLinks = [
  {
    url: "/",
    icon: <i className="fa-brands fa-square-facebook"></i>,
  },
  {
    url: "/",
    icon: <i className="fa-brands fa-twitter"></i>,
  },
  {
    url: "/",
    icon: <i className="fa-brands fa-youtube"></i>,
  },
]

const ResourcesLinks = [
  {
    url: "/",
    caption: "Support-A-Creator",
  },
  {
    url: "/",
    caption: "Distribute on Epic Games",
  },
  {
    url: "/",
    caption: "Careers",
  },
  {
    url: "/",
    caption: "Company",
  },
  {
    url: "/",
    caption: "Fan Art Policy",
  },
  {
    url: "/",
    caption: "UX Research",
  },
  {
    url: "/",
    caption: "Store EULA",
  },
  {
    url: "/",
    caption: "Online Services",
  },
  {
    url: "/",
    caption: "Community Rules",
  },
  {
    url: "/",
    caption: "Epic Newsroom",
  },
]

const EpicGamesLinks = [
  {
    url: "/",
    caption: "Battle Breakers",
  },
  {
    url: "/",
    caption: "Fortnite",
  },
  {
    url: "/",
    caption: "Infinity Blade",
  },
  {
    url: "/",
    caption: "Robo Recall",
  },
  {
    url: "/",
    caption: "Shadow Complex",
  },
  {
    url: "/",
    caption: "Unreal Tournament",
  },
]

const PolicyLinks = [
  {
    url: "/",
    caption: "Terms of Service",
  },
  {
    url: "/",
    caption: "Privacy Policy",
  },
  {
    url: "/",
    caption: "Store Refund Policy",
  },
]

const LogoLinks = [
  {
    url: "/",
    icon: "/images/logo.png"
  }
]

const Footer = () => {
  return (
    <footer className="px-6 py-4 md:px-[72px] md:pt-5 md:pb-14 bg-[#202020]">
      <div className="flex items-center gap-3 mb-6">
        {SocialLinks.map((el, idx) => (
          <a key={idx} href={el.url} className="text-3xl hover:text-[#0078f2] duration-300">
            {el.icon}
          </a>
        ))}

        <button className="w-[34px] h-[34px] ml-auto border-2" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <i className="fa-solid fa-chevron-up text-lg"></i>
        </button>
      </div>

      <div className="flex flex-col md:flex-row gap-6 mb-10 pb-6 border-b border-[#333]">
        <div>
          <h4 className="mb-1 font-bold text-[#CCC6]">Resources</h4>
          <div className="flex flex-wrap gap-x-6">
            <ul>
              {ResourcesLinks.slice(0, 4).map((el, idx) => (
                <li key={idx}>
                  <Link href={el.url} className="leading-6 text-[#e7e7e7] hover:text-[#0078f2] duration-300">{el.caption}</Link>
                </li>
              ))}
            </ul>
            <ul>
              {ResourcesLinks.slice(4, 7).map((el, idx) => (
                <li key={idx}>
                  <Link href={el.url} className="leading-6 text-[#e7e7e7] hover:text-[#0078f2] duration-300">{el.caption}</Link>
                </li>
              ))}
            </ul>
            <ul>
              {ResourcesLinks.slice(7).map((el, idx) => (
                <li key={idx}>
                  <Link href={el.url} className="leading-6 text-[#e7e7e7] hover:text-[#0078f2] duration-300">{el.caption}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div>
          <h4 className="mb-1 font-bold text-[#CCC6]">Made By Epic Games</h4>
          <div className="flex flex-wrap gap-x-10">
            <ul>
              {EpicGamesLinks.slice(0, 3).map((el, idx) => (
                <li key={idx}>
                  <Link href={el.url} className="leading-6 text-[#e7e7e7] hover:text-[#0078f2] duration-300">{el.caption}</Link>
                </li>
              ))}
            </ul>
            <ul>
              {EpicGamesLinks.slice(3).map((el, idx) => (
                <li key={idx}>
                  <Link href={el.url} className="leading-6 text-[#e7e7e7] hover:text-[#0078f2] duration-300">{el.caption}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <p className="max-w-[572px] mb-8 text-xs leading-6 text-[#ccc]">
        © 2023, Epic Games, Inc. All rights reserved. Epic, Epic Games, the Epic Games logo, Fortnite, the Fortnite logo, Unreal, Unreal Engine, the Unreal Engine logo, Unreal Tournament, and the Unreal Tournament logo are trademarks or registered trademarks of Epic Games, Inc. in the United States of America and elsewhere. Other brands or product names are the trademarks of their respective owners.
      </p>

      <div className="flex flex-col md:flex-row items-center justify-between gap-y-6">
        <ul className="flex flex-col md:flex-row items-center gap-x-4">
          {PolicyLinks.map((el, idx) => (
            <li key={idx}>
              <Link href={el.url} className="text-xs leading-6 text-[#e7e7e7] hover:text-[#0078f2] duration-300">{el.caption}</Link>
            </li>
          ))}
        </ul>

        <ul className="flex items-center gap-4">
          {LogoLinks.map((el, idx) => (
            <li key={idx}>
              <a href={el.url}>
                <Image className="w-7 h-auto opacity-80 hover:opacity-100 duration-300" src={el.icon} width={100} height={116} alt="logo" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}

export default Footer
