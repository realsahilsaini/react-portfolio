
import Hero from './Hero'
import About from './About'
import WorkExperience from './WorkExperience'
import UtilityBar from '../components/UtilityBar'
import Education from './Education'
import Skills from './Skills'
import Projects from './Projects'
import MasonryGrid from './MasonryGrid'
import UtilityBar2 from '../components/UtilityBar2'


const Container = () => {

  return (
    <main className={`relative antialiased max-w-2xl mx-auto scroll-smooth px-4 pb-24`}>
        <Hero/>
    {/* <About /> */}
        <MasonryGrid/>


      <WorkExperience/>
      
    {/* <UtilityBar/> */}
    <UtilityBar2/>
    <Education />
    <Skills />
    <Projects />
    </main>
  )
}

export default Container