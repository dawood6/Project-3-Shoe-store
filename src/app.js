import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NotFound from './Components/NotFound';
import ProuductShoe from './Components/ProuductShoe';
import ProuductIndex from './Components/ProuductIndex';
import Prouduct from './Components/Prouduct';
import Home from './Components/Home';
import Contact from './Components/contact';
import Navbar from './Components/Navbar';

const App = () => {
    return (
        <Router>
            <Navbar />
            <br /><br />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/prouduct' element={<Prouduct />} >
                    <Route path='/' element={<ProuductIndex />} />
                    <Route path=':slug' element={<ProuductShoe />} />
                </Route>
                <Route path='/contact' element={<Contact />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </Router >
    )
}
export default App
