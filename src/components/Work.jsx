import { RiArrowRightSLine } from '@remixicon/react';
import React, { useState } from 'react';


const Work = ({ title, imgSrc, position, description, period }) => {
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);

  const handleClick = () => {
    setIsDescriptionVisible(!isDescriptionVisible);
  };

  return (


      <div className="flex flex-col grow mt-2 text-neutral-700 dark:text-white">
        <div className="flex justify-between mt-4">
          <div className="flex flex-none justify-center items-start">
            <img
              src={imgSrc}
              width={50}
              className="rounded-full"
              alt=""
            />
          </div>

          <div className="ml-4 flex grow flex-col group" onClick={handleClick}>
            <div className="flex justify-between items-baseline">
              <div className="flex flex-row justify-between items-center">
                <h2 className="text-left text-xs font-semibold inline-flex justify-center items-center">
                  {title}
                  <span className={`text-xs inline-flex opacity-0 transition-all duration-500 ease-out group-hover:translate-x-1 group-hover:opacity-100 
                    ${isDescriptionVisible ? 'rotate-90' : null}`}>
                    <RiArrowRightSLine size={16} />
                  </span>
                </h2>
              </div>

              <p className="text-neutral-400 text-xs text-right whitespace-normal">
                {period}
              </p>
            </div>

            <p className="text-left text-xs mt-2">
              {position}
            </p>

            <div className={`transition-max-height duration-500 ease-in-out overflow-hidden ${isDescriptionVisible ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
              <p id="workDescription" className="text-left text-xs mt-4 text-neutral-700 dark:text-white">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>

  );
};

export default Work;

/*
The div wrapping the description applies transition styles for smooth height and opacity changes.
The className is conditionally set based on isDescriptionVisible:
If isDescriptionVisible is true, the div has max-h-96 and opacity-100, making it visible.
If isDescriptionVisible is false, the div has max-h-0 and opacity-0, hiding it.
The p element inside the div displays the description prop with additional transition styles.

*/