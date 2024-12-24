"use client"
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
} from "@nextui-org/react";
import Image from "next/image";

export const VSCodeLogo = () => {
  return (
    <Image
        src="/vscode.png"
        alt="Visual Studio Code Icon"
        width={16}
        height={16}
        priority
    />
  );
};

export default function Nav() {

  return (
    <Navbar isBordered className="flex justify-start h-[25px] relative z-100">
      <NavbarContent className="flex justify-center align-middle gap-4 h-[25px]" justify="center">
        <NavbarBrand>
          <VSCodeLogo />
        </NavbarBrand>
        <NavbarItem>
          <Link className="flex justify-start items-center text-[#cccccc] font-light text-xs mr-2" href="/about">
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="flex justify-start items-center text-[#cccccc] font-light text-xs mr-2" href="/experience">
            Experience
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="flex justify-start items-center text-[#cccccc] font-light text-xs mr-2" href="/skills">
            Skills
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="flex justify-start items-center text-[#cccccc] font-light text-xs mr-2" href="/projects">
            Projects
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="flex justify-start items-center text-[#cccccc] font-light text-xs mr-2" href="/contact">
            Contact
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="flex justify-start items-center text-[#cccccc] font-light text-xs mr-2" href="/hobbies">
            Hobbies
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}

