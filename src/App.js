import { BrowserRouter, Routes, Route } from "react-router-dom";
import Persona from "./components/Persona.js";

import Home from './views/Home';
import Contact from './views/Contact';
import Stadistics from './views/Stadistics';
import Person from './views/Person';


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/person/:id' element={<Person />} />
        <Route path='/stadistics' element={<Stadistics />} />
        <Route path='/contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};


export default App;