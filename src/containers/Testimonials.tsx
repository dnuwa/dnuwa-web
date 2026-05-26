import Image from "next/image";

export default function Testimonials() {
  return (
    <div className="min-h-full flex flex-col">
      <div className="my-auto">
        <p className="text-5xl p-12">Some words form our clients</p>
        <div className="flex gap-4 px-12 mb-6">
          <div>
            <Image src="/Eleanor.svg" alt="" width={80} height={80} />
          </div>
          <div>
            <p className="text-[#F0F0F0]">Eleanor Shellstrop</p>
            <p className="text-[#F0F0F0]">MP Marketing, ACME</p>
          </div>
        </div>
        <div className="grid grid-cols-2">
          <div className="border-r bg-[#2B2B2B] pl-12 pe-6 py-6">
            <p className="text-2xl">
              We were able to test our way from a 5% conversion rate, all the
              way up to 20%. Without driving any more traffic, our client is
              getting four times the leads that he was getting before.
            </p>
          </div>
          <div className="flex gap-6 p-6 text-xl">
            <div className="text-[#727272] w-[2/5]">
              <div>Project</div>
              <div>Client</div>
              <div>Case Study</div>
            </div>
            <div className="w-[3/5]">
              <div>acmeweb.com</div>
              <div>ACME inc</div>
              <div>Simpler the solution better the results</div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between px-12 pb-36 mt-top">
        <div className="flex gap-4">
          <Image src="/PrevIcon.svg" alt="" width={50} height={50} />
          <Image src="/NextIcon.svg" alt="" width={50} height={50} />
        </div>
        <div>
          <p className="text-4xl">1 of 5</p>
        </div>
      </div>
      <div className="border-l-6 border-white px-12 text-[#535353] mb-12 text-2xl">
        testimonials
      </div>
    </div>
  );
}
