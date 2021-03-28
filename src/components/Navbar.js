import { Link, useLocation } from "react-router-dom";

function Navbar (props) {
  return <nav className="sticky top-0 bg-blur-md flex items-center justify-between w-full max-w-3xl py-6 mx-auto my-6 text-gray-500 dark:text-cullen box-border leading-5 transition ease-in ">
    <div className="flex items-center justify-center h-full">
      <img className="h-10 w-10 rounded-full object-cover mr-4 items-center ring-2 ring-offset-4 dark:ring-offset-nosferatu ring-blade" src="Korvo.png" />
    </div>
    <ul className="flex w-full h-full flex-grow items-baseline">
      <Link className="font-semibold text-xl flex-grow" to="/">
        Nick Graffis
      </Link>
        <Link className="cursor-pointer font-semibold mx-2 hover:text-gray-800 dark:hover:text-blade" to="/about">About</Link>
        <Link className="cursor-pointer font-semibold mx-2 hover:text-gray-800 dark:hover:text-blade" to="/work">
          Work
        </Link>
        <Link className="cursor-pointer font-semibold mx-2 hover:text-gray-800 dark:hover:text-blade" to="/blog">
          Blog
        </Link>
        <Link className="cursor-pointer font-semibold mx-2 hover:text-gray-800 dark:hover:text-blade" to="/resume">
          Resume
        </Link>
    </ul>
  </nav>
}

export default Navbar;
