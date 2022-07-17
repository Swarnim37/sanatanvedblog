import React from "react";
import Link from "next/link";

const NavBar = () => {
  return (
    <>
      <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center font-bold mb-10 ">
        <Link href="/">
          <a className="mr-5 hover:text-white-900">Home</a>
        </Link>
        <Link href="https://www.sanatanved.com">
          <a target="_blank" className="mr-5 hover:text-white-900">
            Go to main website
          </a>
        </Link>
        <Link href="https://www.sanatanved.com/services">
          <a target="_blank" className="mr-5 hover:text-white-900">
            Services
          </a>
        </Link>
      </nav>
    </>
  );
};

export default NavBar;
