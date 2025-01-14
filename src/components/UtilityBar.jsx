import {
  RiLinkedinBoxFill,
  RiTwitterXLine,
  RiGithubLine,
  RiLightbulbFlashLine,
} from "@remixicon/react";
import { useContext, useState } from "react";
import barImgOpen from "../assets/bar-img.jpg";
import barImgclosed from "../assets/bar-gif.gif";
import { ThemeContext } from "../utils/ThemeContext";


const UtilityBar = () => {
  // const scrollToSection = (id) => {
  //   const element = document.getElementById(id);
  //   if (element) {
  //     element.scrollIntoView({ behavior: 'smooth' });
  //   }
  // };
  const {theme, toggleTheme} = useContext(ThemeContext);

  const BarItems = [

    // {social: <RiHome5Line size={28} />},
    {social: <RiGithubLine size={28} />},
    {social: <RiTwitterXLine size={28} />},
    {social: <RiLinkedinBoxFill size={28} />},
    {themeBtn: <RiLightbulbFlashLine size={28} />},
    // {social: <RiInstagramLine size={28} />},
    
    // <RiGithubLine size={28} />,
    // <RiTwitterXLine size={28} />,
    // <RiLinkedinBoxFill size={28} />,
    // <RiInstagramLine size={28} />,
  ];

  const [isExpanded, setIsExpanded] = useState(false);
  // const [isDarkMode, setIsDarkMode] = useState(true);

  // console.log(isDarkMode);
  

  return (
    <div className={`fixed inset-x-0 bottom-0 h-20 mx-auto bg-gradient-to-t ${theme === 'dark' ? 'from-neutral-950 via-neutral-900 to-neutral-800' : 'from-white via-white/80 to-transparent'}`}>
      <nav
        className={`z-9 ${theme === 'dark' ? 'bg-black/90' : 'bg-neutral-100/80'}  backdrop-blur-[1px] flex justify-center items-center  overflow-hidden rounded-full mx-auto group  transition-all transform-gpu duration-500 ease-in-out border hover:cursor-pointer border-neutral-700 ${
          isExpanded ? "w-72 px-4 py-2.5" : "w-14 py-3"
        }`}
        // onMouseEnter={() => setIsExpanded(true)}
        // onMouseLeave={() => setIsExpanded(false)}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div
          className={` rounded-full  overflow-hidden transition-all duration-700 ease-in-out absolute
        ${isExpanded ? "w-14 left-0" : "w-16 left-1/2 -translate-x-1/2"}`}
        >
          {/* <img
            src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExMzEwOXp1cHo5Z2liZmNkMmllcGg3MWI2YTJyd245OXJnaWJ4MXZqciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/5xtDarw13NgjZf4sCxG/giphy.gif"
            alt=""
          /> */}

          <img
            src={barImgOpen}
            className={`absolute mix z-50 w-full h-full transition-opacity duration-[1500ms] ease-in-out ${
              isExpanded ? "opacity-100" : "opacity-0"
            }`}
            alt="Open"
          />
          <img
            src={barImgclosed}
            className={` w-full h-full transition-opacity duration-500 ease-in-out ${
              isExpanded ? "opacity-0" : "opacity-100"
            }`}
            alt="Closed"
          />
        </div>

        <div className="z-10 flex flex-row ml-8">
          {BarItems.map((item, index) => (
            <div
              key={index}
              className={`px-2  transition-all ease-in-out  ${
                isExpanded
                  ? "visible opacity-100 duration-[1500ms]"
                  : "invisible opacity-0 duration-200"
              }`}
            >
              <div className="hover:px-2 hover:scale-125 transition-all duration-200 ease-in-out"
              >
                {item.social ? 
              <a
              href="#hero"
              // onClick={() => theme}
              className={`text-neutral-400 hover:px-4 transition-all duration-200 ease-in-out`}
            >
              {item.social}
            </a>
            : 
            <a
                  onClick={() => toggleTheme()}
                  className={`text-neutral-400 hover:px-4 transition-all duration-200 ease-in-out`}
                >

                  {item.themeBtn}
                </a>  
              }
              </div>
            </div>
          ))}
        </div>

        {/* <div className="px-2 group-hover:px-3 transition-all duration-500 ease-in-out">
              <div className="hover:px-2 transition-all duration-200 ease-in-out">
                <a
                  href=""
                  className="text-white hover:px-4  transition-all duration-200 ease-in-out"
                >
                  <RiGithubLine
                    size={30}
                    className="hover:scale-125 transition-all duration-200 ease-in-out"
                  />
                </a>
              </div>
            </div> */}

        {/* <div className="px-2 group-hover:px-3 transition-all duration-200 ease-in-out">
              <div className="hover:px-2 transition-all duration-200 ease-in-out">
                <a
                  href=""
                  className="text-white hover:px-4  transition-all duration-200 ease-in-out"
                >
                  <RiTwitterXLine
                    size={30}
                    className="hover:scale-125 transition-all duration-200 ease-in-out"
                  />
                </a>
              </div>
            </div> */}

        {/* <div className="px-2 group-hover:px-3 transition-all duration-200 ease-in-out">
              <div className="hover:px-2  transition-all duration-200 ease-in-out">
                <a
                  href=""
                  className="text-white hover:px-2  transition-all duration-200 ease-in-out"
                >
                  <RiLinkedinBoxFill
                    size={30}
                    className="hover:scale-125 transition-all duration-200 ease-in-out"
                  />
                </a>
              </div>
            </div> */}

        {/* <div className="px-2 group-hover:px-3 transition-all duration-200 ease-in-out">
              <div className="hover:px-2  transition-all duration-200 ease-in-out">
                <a
                  href=""
                  className="text-white hover:px-2  transition-all duration-200 ease-in-out"
                >
                  <RiInstagramLine
                    size={30}
                    className="hover:scale-125 transition-all duration-200 ease-in-out"
                  />
                </a>
              </div>
            </div> */}

        {/* <div className="shrink-0 border-[0.5px] border-neutral-500 h-[30px]"></div> */}
      </nav>
    </div>
  );
};

export default UtilityBar;
