import { usePathname } from "next/navigation";
import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
} from "@nextui-org/react";
import { AcmeLogo } from "./AcmeLogo";

const NavbarC = () => {
  const router = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuItems = [
    { label: "Main", to: "/" },
    { label: "Projects", to: "/projects" },
    { label: "Blogs", to: "/blogs" },
  ];
  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      shouldHideOnScroll
      className="bg-black bg-opacity-50 backdrop-blur-3xl"
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden text-white"
        />
        <NavbarBrand>
          <Link href="/">
            <AcmeLogo />
            <p className="font-bold text-white text-inherit">AYAN</p>
          </Link>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {menuItems.map((item) => (
          <NavbarItem key={item.to} isActive={router === item.to}>
            <Link
              href={item.to}
              className={`text-white ${
                router === item.to ? "font-bold" : ""
              }`}
            >
              {item.label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem
            key={`${item.label}-${index}`}
            isActive={router === item.to}
          >
            <Link
              href={item.to}
              className={`text-foreground ${
                router === item.to ? "font-bold" : ""
              }`}
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default NavbarC;
