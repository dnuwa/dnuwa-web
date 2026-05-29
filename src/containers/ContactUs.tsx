import Image from "next/image";

export default function ContactUs() {
  return (
    <div className="min-h-full flex flex-col" id="contact">
      <div className="flex ps-12 my-auto">
        <div className="w-4/6">
          <div className="mb-6">
            <p className="text-3xl mb-2">Let us launch your next Idea</p>
            <p>drop us your details we will contact you as soon as possible</p>
          </div>
          <div className="flex flex-col space-y-6">
            <input
              type="text"
              placeholder="Your Name"
              className="bg-[#2E2E2E] p-4 w-1/2"
            />
            <input
              type="text"
              placeholder="Email"
              className="bg-[#2E2E2E] p-4 w-1/2"
            />
            <input
              type="text"
              placeholder="Contact No"
              className="bg-[#2E2E2E] p-4 w-1/2"
            />
            <button className="flex justify-between p-3 w-1/4 bg-[#2E2E2E]">
              <span className="my-auto text-xl">Send</span>
              <Image
                src="/LaunchIconSend.svg"
                alt="Bespoke applications"
                width={30}
                height={30}
                className="h-auto"
              />
            </button>
          </div>
        </div>
        <div className="w-2/6 py-6 ps-6 bg-[#2B2B2B] border-l border-[#777777]">
          <ul className="space-y-8">
            <li>
              <p className="text-lg">call Us</p>
              <p className="text-[#838383] text-xl">+94 77 112 2032</p>
            </li>
            <li>
              <p className="text-lg">Email Us</p>
              <p className="text-[#838383] text-xl">+94 77 112 2032</p>
            </li>
            <li>
              <p className="text-lg">We are located at</p>
              <p className="text-[#838383] text-xl">37A, Hotel Rd,</p>
              <p className="text-[#838383] text-xl">Mt Lavinia. Colombo</p>
            </li>
          </ul>
        </div>
      </div>
      <ul className="px-12 text-[#606060]">
        <li className="flex gap-6">
          <span>Cookie Policy</span>
          <span>Privacy Policy</span>
        </li>
        <li className="flex gap-6">
          <span>Infinium360 Technologies.</span>{" "}
          <span>All rights reservedy</span>
        </li>
      </ul>
      <div className="border-l-6 border-white px-12 text-[#535353] mb-12 mt-auto text-2xl">
        contact us
      </div>
    </div>
  );
}
