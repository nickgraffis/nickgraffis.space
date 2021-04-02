import { Link, useCurrentRoute } from "react-navi";

function Navbar (props) {
  return <nav className="sticky hrefp-0 z-50  bg-blur-md flex items-center justify-between w-full max-w-3xl py-6 mx-auhref my-6 text-gray-500 dark:text-cullen box-border leading-5 transition ease-in ">
    <div className="flex items-center justify-center h-full">
      <img className="h-10 w-10 rounded-full object-cover mr-4 items-center ring-2 ring-offset-4 dark:ring-offset-nosferatu ring-blade" src="Korvo.png" />
    </div>
    <ul className="flex w-full h-full flex-grow items-baseline hidden lg:flex">
      <Link className="font-semibold text-xl flex-grow" href="/">
        Nick Graffis
      </Link>
        <Link className="cursor-pointer font-semibold mx-2 hover:text-gray-800 dark:hover:text-blade" href="/about">About</Link>
        <Link className="cursor-pointer font-semibold mx-2 hover:text-gray-800 dark:hover:text-blade" href="/work">
          Work
        </Link>
        <Link className="cursor-pointer font-semibold mx-2 hover:text-gray-800 dark:hover:text-blade" href="/blog">
          Blog
        </Link>
        <Link className="cursor-pointer font-semibold mx-2 hover:text-gray-800 dark:hover:text-blade" href="/resume">
          Resume
        </Link>
    </ul>
  </nav>
}

export default Navbar;
