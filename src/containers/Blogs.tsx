import React from "react";
import Image from "next/image";

export default function Blogs() {
  return (
    <div className="min-h-full flex flex-col" id="blogs">
      <div className="my-auto">
        <div className="p-12 my-auto">
          <p className="text-5xl mb-3">The things we have written about</p>
          <p className="text-2xl">over at blog.infinitum350.com</p>
        </div>

        <div className="grid grid-cols-2 gap-12 pl-12">
          <div className="grid gap-4">
            <Image
              src="/Enterprise-solution.svg"
              alt="Enterprise solution"
              width={80}
              height={80}
              className="h-auto"
            />
            <p className="text-2xl">Lessons From the past</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              feugiat, leo a scelerisque aliquet, turpis neque pellentesque arcu
            </p>
          </div>
          <div className="grid gap-4">
            <Image
              src="/Bespoke-Applications.svg"
              alt="Bespoke applications"
              width={80}
              height={80}
              className="h-auto"
            />
            <p className="text-2xl">A day of a QA analyst</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              feugiat, leo a scelerisque aliquet, turpis neque pellentesque arcu
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-between px-12 mt-top">
        <div className="flex gap-4">
          <Image src="/PrevIcon.svg" alt="" width={50} height={50} className="my-auto" />
          <Image src="/NextIcon.svg" alt="" width={50} height={50} className="my-auto" />
        </div>
        <div className="flex">
          <Image src="/carousel--horizontal.svg" alt="" width={50} height={50} className="my-auto" />
        </div>
      </div>
      <div className="border-l-6 border-white px-12 text-[#535353] mb-12 mt-auto text-2xl">
        blogs
      </div>
    </div>
  );
}
