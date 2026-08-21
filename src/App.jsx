import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { Navbar } from 'react-bootstrap';
import Navbar1 from './Components/Navbar1'
import Hero from './Components/Hero'
import Cards from './Components/Cards'
import Product from './Pages/Product'



function App() {


  return (
    <>

<Navbar1  />
<Hero  />
<Cards  />
{/* <Product  /> */}

    </>
  )
}

export default App