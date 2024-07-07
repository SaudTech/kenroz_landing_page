"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import Image from "next/image";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll); // Cleanup
    };
  }, []);

  return (
    <nav
      className={`
      flex justify-between items-center md:flex-row flex-col 
      container max-w-[1300px] mx-auto fixed z-50 
      bg-gradient-to-r from-bg-primary via-bg-primary/80 to-bg-primary
      top-0 left-2/4 transform md:h-14 text-black w-full -translate-x-2/4 
      transition-all duration-300 ease-in-out bg-[#f65dfe]
      ${
        scrolled
          ? "backdrop-filter backdrop-blur-sm bg-opacity-40 bg-[#f65dfe]"
          : ""
      }
    `}
    >
      <Link href="/" className="md:mt-0 mt-3">
        <Image
          src="/just-logo.png"
          width={60}
          height={60}
          className="md:w-[60px] w-[70px]"
          alt="Kenroz"
        />
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
