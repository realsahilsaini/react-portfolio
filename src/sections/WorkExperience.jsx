import React from 'react'
import Work from '../components/Work'
import { Work_Experiences } from '../constant'

const WorkExperience = () => {
  return (
    <div className="text-neutral-700 dark:text-white my-4 motion-preset-blur-up motion-delay-75">
    <h2 className="text-left text-2xl font-bold">
      Work Experience
    </h2>


      {
        Work_Experiences.map((work, index)=>(
          <Work
          key={index}
          title={work.Company}
          imgSrc="https://portfolio-magicui.vercel.app/atomic.png"
          position={work.Role}
          description={work.Description}
          period={`${work.Period.Start} - ${work.Period.End}`}
        />
        ))
      }

    
    </div>
  )
}

export default WorkExperience