"use client";
import React, { useState } from "react";
import { animated, useTrail } from "@react-spring/web";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function RightNav() {
  const TABS = [
    { key: "intro", label: "intro", to: "#intro" },
    { key: "testimonials", label: "testimonials", to: "#testimonials" },
    { key: "solutions", label: "solutions", to: "#solutions" },
    { key: "products", label: "products", to: "#products" },
    { key: "blogs", label: "blogs", to: "#blogs" },
    { key: "contact", label: "contact", to: "#contact" },
  ];

  const SOCIALS = [
    { key: "linkedIn", icon: "/LinkedIn.svg", to: "#" },
    { key: "twitter", icon: "/Twitter.svg", to: "#" },
  ];

  const pathname = usePathname();

  const activeBasePath = () => {
    if (!pathname) return "";
    return pathname.split("/")[1] ? `/${pathname.split("/")[1]}` : "/";
  };

  const [open, setOpen] = useState(false);
  const toggleNav = () => setOpen((prev) => !prev);

  const trail = useTrail(TABS.length, {
    config: { mass: 5, tension: 2000, friction: 200 },
    opacity: open ? 1 : 0,
    x: open ? 0 : 20,
    from: { opacity: 0, x: 20 },
  });

  const socialTrails = useTrail(SOCIALS.length, {
    config: { mass: 5, tension: 2000, friction: 200 },
    opacity: open ? 1 : 0,
    x: open ? 0 : 20,
    height: open ? 40 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  });

  const scrollButotn = useTrail(1, {
    config: { mass: 5, tension: 2000, friction: 200 },
    opacity: open ? 0 : 1,
    x: open ? 20 : 0,
    height: open ? 0 : 40,
    from: { opacity: 1, x: 0, height: 40 },
  });

  return (
    <div className="w-1/6">
      {!open && (
        <div className="h-full flex flex-col">
          <div className="flex justify-center">
            <button className="flex justify-center" onClick={toggleNav}>
              <Image
                src="/MenuIcon.svg"
                alt=""
                width={130}
                height={130}
                className="p-12"
              />
            </button>
          </div>

          {scrollButotn.map(({ x, ...rest }) => (
            <animated.div
              className={"flex flex-col mt-auto mb-24"}
              style={{
                ...rest,
                transform: x.interpolate((x) => `translate3d(0,${x}px,0)`),
              }}
              key={"scrollBtn"}
            >
              <button className="mx-auto">
                <Image
                  src="/NextPage.svg"
                  alt=""
                  width={130}
                  height={130}
                  className="p-12 mx-auto"
                />
              </button>
            </animated.div>
          ))}
        </div>
      )}

      {open && (
        <div className="h-full flex flex-col text-white">
          <div className="flex justify-center">
            <button className="flex justify-center" onClick={toggleNav}>
              <Image
                src="/close-lg-svgrepo-com.svg"
                alt=""
                width={130}
                height={130}
                className="px-12 pt-12 pb-8 text-white"
              />
            </button>
          </div>

          <ul className="flex flex-col text-center space-y-2 lg:space-y-4 text-[#535353] text-sm lg:text-xl">
            {trail.map((style, index) => (
              <animated.div key={TABS[index].key} style={style}>
                <Link href={TABS[index].to}>
                  <li className="hover:text-white cursor-pointer">
                    {TABS[index].label}
                  </li>
                </Link>
              </animated.div>
            ))}
          </ul>

          <div className="mt-auto space-y-8 flex flex-col">
            {socialTrails.map(({ x, ...rest }, index) => (
              <animated.div
                className={"flex flex-col mb-12"}
                style={{
                  ...rest,
                  transform: x.interpolate((x) => `translate3d(0,${x}px,0)`),
                }}
                key={`socials_${index}`}
              >
                <button className="mx-auto">
                  <Image
                    src={SOCIALS[index].icon}
                    alt=""
                    width={130}
                    height={130}
                    className="px-12 mx-auto"
                  />
                </button>
              </animated.div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
