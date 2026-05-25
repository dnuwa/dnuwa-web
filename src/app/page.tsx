import Image from "next/image";
import { Roboto_Condensed } from "next/font/google";

const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div
      className={`${robotoCondensed.className} h-screen p-12 dark:bg-black overflow-hidden`}
    >
      <main className="h-full">
        <div className="h-full bg-[#202020] text-center sm:text-left">
          <div className="flex w-full h-full">
            <div className="w-1/5 h-full flex flex-col">
              <div className="flex justify-center">
                <Image
                  src="/logo.svg"
                  alt=""
                  width={1000}
                  height={1000}
                  className="p-12"
                />
              </div>

              <button className="mt-auto flex flex-col p-12">
                <Image
                  src="/launchIcon.svg"
                  alt=""
                  width={500}
                  height={500}
                  className="w-1/4 mx-auto mb-6"
                />
                <span>
                  let me launch <br></br>your idea
                </span>
              </button>
            </div>

            <div className="w-3/5 h-full flex flex-col bg-[#242424]">
              <div className="mt-auto p-12">
                <p className="text-2xl mb-3">Engineering for the Future</p>
                <h4 className="text-5xl">
                  Developing Sustainable & Evolving <br></br> Digital Ecosystems
                </h4>
              </div>
              <div className="border-l-6 border-white px-12 text-[#535353] mb-12 text-2xl">
                intro
              </div>
            </div>

            <div className="w-1/5 h-full flex flex-col">
              <div className="flex justify-center">
                <button className="flex justify-center">
                  <Image
                    src="/MenuIcon.svg"
                    alt=""
                    width={130}
                    height={130}
                    className="p-12"
                  />
                </button>
              </div>

              <button className="mt-auto flex flex-col p-12">
                <Image
                  src="/NextPage.svg"
                  alt=""
                  width={130}
                  height={130}
                  className="p-12 mx-auto"
                />
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
