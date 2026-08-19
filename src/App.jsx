// import { useState } from 'react'


// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
      

//        <BrowserRouter>
//       <nav>
//         <Link to="/">Home</Link> |{" "}
//         <Link to="/about">About</Link> |{" "}
//         <Link to="/contact">Contact</Link>
//       </nav>

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//       </Routes>
//     </BrowserRouter>
//     </>
//   )
// }

// export default App

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { Navbar } from 'react-bootstrap';
import Navbar1 from './Components/Navbar1'
import Hero from './Components/Hero'
import Cards from './Components/Cards'




function App() {


  return (
    <>

<Navbar1  />
<Hero  />
<Cards  />


    </>
  )
}

export default App