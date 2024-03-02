import React from 'react';
import {Head} from "./components/BaseContainer/Head"
import {About} from "./pages/About";
import {Footer} from "./components/BaseContainer/Footer";
import {Home} from "./pages/Home";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {Careers} from "./pages/Careers";

function App() {
    return (
        <Router>
            <Head/>
            <div>
                <Routes>
                    <Route path = "/" element ={<Home/>}/>
                    <Route path = "/about" element ={<About/>}/>
                    <Route path = "/careers" element ={<Careers/>}/>
                </Routes>
            </div>
            <Footer/>
        </Router>
    );

}

export default App;
