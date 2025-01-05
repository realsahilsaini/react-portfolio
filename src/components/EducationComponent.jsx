import { RiArrowRightSLine } from "@remixicon/react";


const EducationComponent = ({institute, degree, field, period}) => {
  return (
    <div className="flex flex-col grow text-neutral-700 dark:text-white">
        <div className="flex justify-between mt-4">
          <div className="flex flex-none justify-center items-center">
            <img
              src="https://portfolio-magicui.vercel.app/atomic.png"
              width={50}
              className="rounded-full"
              alt=""
            />
          </div>

          <div className="ml-4 gap-2 flex grow flex-col group">

            <div className="flex justify-between items-baseline">
              <div className="flex flex-row justify-between items-center">

              <h2 className="text-left text-xs font-semibold inline-flex justify-center items-center whitespace-nowrap">
                {institute}
                <span 
              className="text-xs inline-flex opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100 rotate-0">
                <RiArrowRightSLine size={16} />
              </span>
              </h2>
              
              </div>

              <p className="text-neutral-400 text-xs text-right whitespace-nowrap">
                {period}
              </p>
            </div>

            <div>
              <p className="text-left text-xs whitespace-normal">
                {degree} in {field}
              </p>
            </div>

          </div>
        </div>
      </div>
  )
}

export default EducationComponent