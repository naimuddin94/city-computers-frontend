"use client";
import { navigation } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const NavItems = () => {
  let pathname = usePathname() || "/";

  const [hoveredPath, setHoveredPath] = useState(pathname);
  return (
    <>
      {navigation.map((item) => {
        const isActive = item.href === pathname;

        return (
          <Link
            key={item.href}
            className={`px-4 py-2 rounded-md text-sm lg:text-base relative no-underline duration-300 ease-in ${
              isActive ? "text-orange-500" : "text-white"
            }`}
            data-active={isActive}
            href={item.href}
            onMouseOver={() => setHoveredPath(item.href)}
            onMouseLeave={() => setHoveredPath(pathname)}
          >
            <span>{item.label}</span>
            {item.href === hoveredPath && (
              <motion.div
                className="absolute bottom-0 left-0 h-full bg-[#32ff7e]/25 rounded-md z-10"
                layoutId="navbar"
                aria-hidden="true"
                style={{
                  width: "100%",
                }}
                transition={{
                  type: "spring",
                  bounce: 0.25,
                  stiffness: 130,
                  damping: 9,
                  duration: 0.3,
                }}
              />
            )}
          </Link>
        );
      })}
    </>
  );
};

export default NavItems;
