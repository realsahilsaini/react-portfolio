import React, { useEffect } from 'react'
import { useScramble } from 'use-scramble'

const About = () => {

  const { ref, replay } = useScramble({
    text: "Hey there! I'm a full-stack developer with a passion for building innovative web applications using the MERN stack. I’ve created seamless front-end experiences with React and solid back-end systems with Node.js and Express, bringing ideas to life through code. On top of that, I’m diving deep into the Web3 space, exploring the exciting possibilities of decentralized technology. Alongside coding, I’m also into the no-code movement, where I’ve built practical applications that solve real-life problems, simplifying processes and adding real value. Whether it's through traditional web development or leveraging no-code tools, I'm always excited to push the boundaries of what's possible. Let’s create something awesome together!",
    range: [33,47],
    thick:  1,
    speed: 1,
    step: 10,
    scramble: 10,
    // seed: 0,
    chance: 0.70,
    overdrive: true,
    overflow: true,
    playOnMount: false,
    ignore: [" "]
  })


  useEffect(() => {
    const interval = setInterval(() => {
      replay();
    }, 5000); // Adjust the interval time as needed (5000ms = 5 seconds)

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, [replay]);

  


  // const { ref } = useScramble({
  //   text: "And thou wouldst ask my counsel, “What am I to do? what scheme can I devise. where find one?” to save thyself being stripped of thy command and losing thy fair fame. Next when Calchas bade thee offer thy daughter in sacrifice to Artemis.",
  //   range: [33,47],
  //   speed: 0.5,
  //   tick: 1,
  //   step: 4,
  //   scramble: 10,
  //   seed: 0,
  //   chance: 1,
  //   overdrive: false,
  //   overflow: false,
  // })
  
  
  
  


  return (
    <div className='py-4 motion-preset-focus motion-duration-1000'>
      <h2 style={{ textShadow: '0 0 2px #f00, 0 0 4px #f00, 0 0 6px #f00, 0 0 8px #f00' }}
       className='text-left text-2xl text-white font-bold'>About</h2>

      <p className='tracking-wide text-white text-sm mt-2 md:tracking-tighter'
      ref={ref} onMouseOver={replay} 
      
      >
        Hey there! I'm a self-taught full-stack developer with a passion for building innovative web applications using the MERN stack. I’ve created seamless front-end experiences with React and solid back-end systems with Node.js and Express, bringing ideas to life through code. On top of that, I’m diving deep into the Web3 space, exploring the exciting possibilities of decentralized technology. Alongside coding, I’m also into the no-code movement, where I’ve built practical applications that solve real-life problems, simplifying processes and adding real value. Whether it's through traditional web development or leveraging no-code tools, I'm always excited to push the boundaries of what's possible. Let’s create something awesome together!
      </p>
    </div>
  )
}

export default About