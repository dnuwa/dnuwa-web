import React from "react";
import Image from "next/image";

export default function Products() {
  return (
    <div className="min-h-full flex flex-col">
      <div className="grid grid-cols-2 py-12">
        <div className="p-12 my-auto">
          <p className="text-5xl mb-3">Our Tailored Products</p>
          <p className="text-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            feugiat, leo a scelerisque aliquet, turpis neque pellentesque arcu,
            vel dignissim turpis justo ac libero. Maecenas sagittis
          </p>
        </div>

        <div className="grid gap-12 px-12">
          <div className="bg-[#2C2C2C] p-6 grid gap-4">
            <Image
              src="/Enterprise-solution.svg"
              alt="Enterprise solution"
              width={80}
              height={80}
              className="h-auto"
            />
            <p>confero.i0</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              feugiat, leo a scelerisque aliquet, turpis neque pellentesque arcu
            </p>
          </div>
          <div className="p-6 grid gap-4">
            <Image
              src="/Bespoke-Applications.svg"
              alt="Bespoke applications"
              width={80}
              height={80}
              className="h-auto"
            />
            <p>commerce360.com</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              feugiat, leo a scelerisque aliquet, turpis neque pellentesque arcu
            </p>
          </div>
        </div>
      </div>

      <div className="border-l-6 border-white px-12 text-[#535353] mb-12 mt-auto text-2xl">
        Products
      </div>
    </div>
  );
}
