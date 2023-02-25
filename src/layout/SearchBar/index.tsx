import Link from "next/link"

const SearchBar = () => {
  return (
    <section className="sticky z-20 top-0 bg-[#121212]">
      <div className="container flex items-center gap-6 py-[30px]">
        <div className="flex items-center gap-3 h-[40px] p-3.5 rounded-full md:bg-[#202020]">
          <i className="fa-solid fa-search text-[#F5F5F599]"></i>
          <input className="hidden md:block text-[13px] bg-transparent focus-visible:outline-0" name="search" placeholder="Search store" />
        </div>
        <Link href="/">
          <span className="p-1">Discover</span>
        </Link>
        <Link href="/">
          <span className="p-1 text-[#F5F5F599] hover:text-[#F5F5F5] duration-300">Browse</span>
        </Link>
        <Link href="/">
          <span className="p-1 text-[#F5F5F599] hover:text-[#F5F5F5] duration-300">News</span>
        </Link>
      </div>
    </section>
  )
}

export default SearchBar
