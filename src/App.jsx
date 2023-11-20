
import './App.css'
import About from './Components/About/About'
import Header from './Components/Header/Header'
import Home from './Components/Home/Home'

function App() {


  return (
    <>
      <Header></Header>
      <main className='main'>
      <Home></Home>
      <About></About>
      </main>
    </>
  )
}

export default App
