import React from "react";
import Image from "next/image";

export default function Solutions() {
  return (
    <div className="min-h-full flex flex-col" id="solutions">
      <div className="my-auto">
        <div className="p-12">
          <p className="text-5xl mb-3">What we do</p>
          <p className="text-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            feugiat, leo a scelerisque aliquet, turpis neque pellentesque arcu,
            vel dignissim turpis justo ac libero. Maecenas sagittis
          </p>
        </div>

        <div className="grid grid-cols-3 gap-12 px-12">
          <div className="bg-[#2C2C2C] p-6">
            <Image
              src="/Enterprise-solution.svg"
              alt="Enterprise solution"
              width={80}
              height={80}
              className="h-auto"
            />
            <ul className="text-[#838383] py-4 text-xl">
              <li>AWS</li>
              <li>Oracle Cloud</li>
              <li>RedHat Product integrations.</li>
            </ul>
            <p className="text-white text-2xl">Enterprise Solutions</p>
          </div>
          <div className="p-6">
            <Image
              src="/Bespoke-Applications.svg"
              alt="Bespoke applications"
              width={80}
              height={80}
              className="h-auto"
            />
            <ul className="text-[#838383] py-4 text-xl">
              <li>Mobile apps</li>
              <li>Desktop Apps</li>
              <li>IOT Solutions</li>
            </ul>
            <p className="text-white text-2xl">Enterprise Solutions</p>
          </div>
          <div className="p-6">
            <Image
              src="/Web-Application.svg"
              alt="Web application"
              width={80}
              height={80}
              className="h-auto"
            />
            <ul className="text-[#838383] py-4 text-xl">
              <li>Cloud ERP</li>
              <li>ECommerce</li>
            </ul>
            <p className="text-white text-2xl">Web Application Development</p>
          </div>
        </div>
      </div>

      <div className="border-l-6 border-white px-12 text-[#535353] mb-12 text-2xl">
        Solutions
      </div>
    </div>
  );
}
