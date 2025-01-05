import {SKILLS} from '../constant'

const SkillTag = () => {

  // const skills = [
  //   'React',
  //   'Node.js',
  //   'Express',
  //   'MongoDB',
  //   'Tailwind CSS',
  //   'Framer Motion',
  //   'GSAP',
  //   'Python', 
  //   'TypeScript',
  //   'Docker',
  //   'Kubernetes',
  // ]


  return (
    <>

{
      SKILLS.map((skill, index) => (
        <div key={index} className='inline-flex text-neutral-700  items-center rounded-md border bg-white px-2.5 py-0.5 text-xs font-semibold transition- all duration-300 border-transparent shadow-md dark:shadow-md dark:shadow-neutral-700 hover:bg-gray-200/80'>
      {skill}
    </div>
      ))
    }

    </>
  )
}

export default SkillTag