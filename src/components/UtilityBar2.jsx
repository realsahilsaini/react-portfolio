import {
  RiInstagramLine,
  RiLinkedinBoxFill,
  RiTwitterXLine,
  RiHome5Line,
  RiGithubLine,
  RiLightbulbFlashLine,
  RiMoonClearLine,
} from "@remixicon/react";
import { useContext } from "react";
import { ThemeContext } from "../utils/ThemeContext";

const UtilityBar2 = () => {
  // const scrollToSection = (id) => {
  //   const element = document.getElementById(id);
  //   if (element) {
  //     element.scrollIntoView({ behavior: 'smooth' });
  //   }
  // };

  const {theme, toggleTheme} = useContext(ThemeContext);

  const BarItems = [
    {social: <RiGithubLine  size={30}  className="sm:hover:scale-125 transition-all duration-200 ease-in-out" 
    onClick={()=>window.open('https://github.com/realsahilsaini','_blank')}
    />},
    {social: <RiTwitterXLine size={30}  className="sm:hover:scale-125 transition-all duration-200 ease-in-out"
    onClick={()=>window.open('https://x.com/realsahilsaini','_blank')}
    />},
    {social: <RiLinkedinBoxFill size={30} className="sm:hover:scale-125 transition-all duration-200 ease-in-out"
    onClick={()=>window.open('https://linkedin.com/in/realsahilsaini','_blank')}
    />},
    {social: <RiInstagramLine size={30} className="sm:hover:scale-125 transition-all duration-200 ease-in-out" 
    onClick={()=>window.open('https://instagram.com/realsahilsaini','_blank')}
    />},
    // {themeBtn: <RiLightbulbFlashLine size={30} className="sm:hover:scale-125 transition-all duration-200 ease-in-out" />},
  ];

  return (
    <div className={`z-50 fixed inset-x-0 bottom-0 h-20 mx-auto bg-gradient-to-t
    from-white to-transparent
    dark:from-neutral-950 dark:to-transparent `}>

      <nav className={`z-9 flex justify-center items-center rounded-full bg-gradient-to-b
      from-stone-100 to-white
        dark:from-neutral-900
         dark:to-neutral-800
          px-2.5 sm:px-3.5 py-2.5 mx-auto w-fit group sm:hover:px-3 transition-all transform-gpu duration-300 ease-in-out border hover:cursor-pointer border-neutral-500`}>


        <div className="px-2 sm:group-hover:px-3 transition-all duration-200 ease-in-out">
          <div className="sm:hover:px-2 transition-all duration-200 ease-in-out">
            <a
              href="#hero"
              className={`
                text-neutral-600
                dark:text-neutral-100
                `}
            >
              <RiHome5Line size={30} className="sm:hover:scale-125 transition-all duration-200 ease-in-out" />
            </a>
          </div>
        </div>

        <div className="shrink-0 border-[0.5px] border-neutral-500 h-[30px]">
        </div>



        {/* ------------------------------------ */}

        {BarItems.map((item,index)=>{
          return(
            <div
            key={index}
            className="px-2 sm:group-hover:px-2.5 transition-all duration-200 ease-in-out">
          <div className="sm:hover:px-2 transition-all duration-200 ease-in-out">
            <a
              href=""
              className={`
                text-neutral-600
                dark:text-neutral-100
              `}
            >
              {/* <RiGithubLine size={30} className="hover:scale-125 transition-all duration-200 ease-in-out" /> */}

              {item.social}
            </a>
          </div>
        </div>
          )
        })}


        {/* ------------------------------------ */}


        <div className="px-2 sm:group-hover:px-2.5 transition-all duration-200 ease-in-out">
          <div className="sm:hover:px-2 transition-all duration-200 ease-in-out">
            <div
              className={`${theme ==='dark' ? 'text-neutral-100' : 'text-neutral-600'}`}
            >
              {theme === 'dark' ? <RiLightbulbFlashLine 
              onClick={toggleTheme}
              size={30} className="sm:hover:scale-125 transition-all duration-200 ease-in-out" /> 
              : 
              <RiMoonClearLine 
              onClick={toggleTheme}
              size={30} className="sm:hover:scale-125 transition-all duration-200 ease-in-out" />
              }
            </div>
          </div>
        </div>


        

      </nav>
    </div>
  );
};

export default UtilityBar2;
