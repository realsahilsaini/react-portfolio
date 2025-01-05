import {EDUCATION} from '../constant'
import EducationComponent from "../components/EducationComponent";

const Education = () => {
  return (
    <div className="text-neutral-700 dark:text-white my-8">
      <h2 className="text-left text-2xl font-bold">Education</h2>


      {
        EDUCATION.map((education, index)=>(
          <EducationComponent key={index} 
          institute={education.Institute}
          degree={education.Degree}
          field={education.Field}
          period={`${education.Period.Start} - ${education.Period.End}`}
          />
        ))
      }




      {/* -------------------------------- */}
    </div>
  )
}

export default Education