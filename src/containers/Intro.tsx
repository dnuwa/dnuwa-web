import React from "react";
import { useSpring, config } from '@react-spring/web'

export default function Intro() {

  //app loading state
  // const { isFinishedLoading } = useContext(AppLoadingContext);

  // //animation prop for subheader
  // const subHeaderAnimation = useSpring({
  //   opacity: isFinishedLoading && visible ? 1 : 0,
  //   transform: isFinishedLoading && visible ? 'translate(0% , 0%)' : 'translate(30% , -54%)',
  //   from: { opacity: 0, transform: 'translate(30% , -54%)' },
  //   config: config.gentle,
  //   delay: 100,
  // });

  // const mainHeaderAnimation = useSpring({
  //   opacity: isFinishedLoading && visible ? 1 : 0,
  //   transform: isFinishedLoading && visible ? 'translate(0% , 0%)' : 'translate(30% , -54%)',
  //   from: { opacity: 0, transform: 'translate(30% , -54%)' },
  //   delay: 300,
  //   config: config.gentle,
  // });


  return (
    <div className="min-h-full flex flex-col" id="intro">
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
  );
}
