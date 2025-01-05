import './App.css'

import  Container  from './sections/Container'


function App() {

  // Write a useeffect such that whenver page reloads it should be stay at top
  // useEffect(()=>{
  //   window.scrollTo(0,0)
  // }, [])

  return (
    <main>
      {/* <h1 className="text-3xl text-white font-bold underline border-2 bg-slate-500">
      Hello world!
    </h1> */}

        <Container/>
    </main>
  )
}

export default App
