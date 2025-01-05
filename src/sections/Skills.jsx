import React from 'react'
import SkillTag from '../components/SkillTag'

const Skills = () => {
  return (
    <div className=' my-8'>
      <h3 className='text-neutral-700 dark:text-white text-left text-2xl font-bold mb-4'>
      Skills
      </h3>

      <div className='flex flew-row gap-2 flex-wrap justify-center'>
      <SkillTag/>
      </div>
    </div>
  )
}

export default Skills