import Link from "next/link"
import Image from "next/image"

const Header = () => {
  return (
    <header className="flex items-center bg-[#2a2a2a] shadow">
      <Link href="/">
        <Image className="w-[30px] h-auto mx-5 opacity-80 hover:opacity-100 duration-300" src="/images/logo.png" width={100} height={116} alt="logo" />
      </Link>

      <div className="flex-grow items-center hidden md:flex">
        <Link href="/">
          <span className="inline-block px-[14px] pt-[18px] pb-3 border-b-[5px] border-[#0078f2] text-[10.5px] tracking-[1px] text-[#ccc] hover:text-white duration-300">STORE</span>
        </Link>

        <Link href="/">
          <span className="inline-block px-[14px] pt-[18px] pb-3 border-b-[5px] border-transparent hover:border-[#0078f2] text-[10.5px] tracking-[1px] text-[#ccc] hover:text-white duration-300">SUPPORT</span>
        </Link>

        <div className="w-4 h-8 ml-4 border-l"></div>

        <Link href="/">
          <span className="inline-block px-[14px] pt-[18px] pb-3 border-b-[5px] border-transparent hover:border-[#0078f2] text-[10.5px] tracking-[1px] text-[#ccc] hover:text-white duration-300">UNREAL ENGINE</span>
        </Link>

        <Link href="/" className="ml-auto">
          <span className="inline-block px-5 py-3.5 text-[#ccc] hover:text-white duration-300">
            <i className="fa-solid fa-globe"></i>
          </span>
        </Link>

        <Link href="/">
          <span className="flex items-center gap-2.5 px-5 py-[18px] text-[#ccc] hover:text-white duration-300">
            <i className="fa-solid fa-user"></i>
            <span className="text-[10.5px] tracking-[1px]">SIGN IN</span>
          </span>
        </Link>

        <Link href="/">
          <span className="inline-block px-7 py-[18px] text-[10.5px] tracking-[1px] text-[#ccc] hover:text-white bg-[#0078f2] hover:bg-[#007dfc] duration-300">DOWNLOAD</span>
        </Link>
      </div>

      <button className="md:hidden ml-auto px-4 py-2.5 text-2xl text-white bg-[#0078f2] hover:bg-[#007dfc] duration-300">
        <i className="fa-solid fa-bars"></i>
      </button>
    </header>
  )
}

export default Header
