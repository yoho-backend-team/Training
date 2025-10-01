import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Nav from './webTask/Nav'
import Home from './webTask/Home'
import About from './webTask/About'
import Speakers from './webTask/Speakers'
import Shedules from './webTask/Shedules'
import Pricing from './webTask/Pricing'
import Venue from './webTask/Venue'
import Contact from './webTask/Contact'
import Tickets from './webTask/BuyTickets'

function App() {

  return (
    <>
    <BrowserRouter>
    <Nav/>
    <Routes>
      <Route path ='/' element = {<Home/>}/>
      <Route path ='about' element = {<About/>}/>
      <Route path ='speaker' element = {<Speakers/>}/>
      <Route path ='shedules' element = {<Shedules/>}/>
      <Route path ='pricing' element = {<Pricing/>}/>
      <Route path ='venue' element = {<Venue/>}/>
      <Route path ='contact' element = {<Contact/>}/>
      <Route path ='tickets' element = {<Tickets/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
