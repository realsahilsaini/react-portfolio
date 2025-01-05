import { useEffect } from "react";
import {HERO_CONTENT} from '../constant'
const Hero = () => {

    useEffect(()=>{
      window.scrollTo(0,0)
    }, [])

  return (
    <div id="hero" className="text-white flex gap-2 items-center justify-between py-8 motion-preset-blur-up">
      <div className="text-left w-[60%] sm:w-[70%]">

        <div className="flex">
        <h1 className={`
           text-neutral-700 dark:text-white font-bold text-4xl sm:text-5xl whitespace-nowrap`}>
            {HERO_CONTENT.Name}
           </h1>
        <span className="text-3xl sm:text-5xl ">
          {HERO_CONTENT.Emoji}
        </span>
        </div>
        

        <p className="text-neutral-400 mb-5">
          {HERO_CONTENT.Role}
        </p>

        <p className="dark:text-neutral-200 text-neutral-800">
          {HERO_CONTENT.About}
        </p>


      </div>

      <div className="border-2 border-neutral-400 dark:border-neutral-600 rounded-full overflow-hidden bg-white w-28 h-28 sm:w-32 sm:h-32">
        <img
          src="https://avatars.githubusercontent.com/u/85404123?v=4"
          className="rounded-full object-cover w-full h-full"
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
