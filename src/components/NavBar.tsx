import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";

const NavBar = () => {
  return (
    <nav className="flex justify-between items-center md:flex-row flex-col container max-w-[1300px] mx-auto fixed z-50 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400  top-0 left-2/4 transform md:h-14 text-black w-full -translate-x-2/4">
      <Link href="/" className="md:mt-0 mt-3">
        <Image src="/just-logo.png" width={60} height={60} className="md:w-[60px] w-[70px]" alt="Kenroz" />
      </Link>

      <ul className="md:flex hidden space-x-6 text-lg font-medium items-center">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/features">Features</Link>
        </li>
        <li>
          <Link href="/login">
            <Button>Login</Button>
          </Link>
        </li>
        <li>
          <Link href="/login">
            <Button>Request a demo</Button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;