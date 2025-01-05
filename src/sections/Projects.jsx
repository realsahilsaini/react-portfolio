import React from 'react'
import SectionHead from '../components/SectionHead'
import ProjectCard from '../components/ProjectCard'
import { PROJECTS } from '../constant'

const Projects = () => {
  return (
    <div className='py-4 mt-8'>
      <SectionHead sectionName='My Projects'/>

      <h2 className='text-neutral-700 dark:text-white tracking-tight text-center text-5xl font-bold mt-2'>
      Check out my latest work
      </h2>

      <p className='text-neutral-400 mt-4 text-center'>
      I've worked on a variety of projects, from simple websites to complex web applications. Here are a few of my favorites.
      </p>

      <div className='grid grid-cols-1 sm:grid-cols-2 sm:flex-row gap-4 mt-8'>

        {
          PROJECTS.map((project, index)=>(
            <ProjectCard key={index} projectName={project.ProjectTitle} projectMedia={project.ProjectMedia} projectDescription={project.Description} techStack={project.TechStack} gitHubLink={project.GitHubLink} projectWebsite={project.ProjectWebsite} />
          ))
        }
        
        
      </div>
    </div>
  )
}

export default Projects