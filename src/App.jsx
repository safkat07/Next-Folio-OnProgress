
import './App.css'
import About from './Components/About/About'
import Header from './Components/Header/Header'
import Home from './Components/Home/Home'
import Skill from './Components/Skill/Skill'

function App() {


  return (
    <>
      <Header></Header>
      <main className='main'>
      <Home></Home>
      <About></About>
      <Skill></Skill>
      </main>
    </>
  )
}

export default App
