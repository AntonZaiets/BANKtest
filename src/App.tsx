import React from 'react';
import {Head} from "./components/BaseContainer/Head"
import {NavLink} from "react-router-dom";
import { Routes as Link } from "./constants/routes";
import {About} from "./pages/About";
import {Footer} from "./components/BaseContainer/Footer";
import {Home} from "./pages/Home";

const routes = [

]
function App() {
    return (
        <div>
            <Head/>
            {/*<About/>*/}
            <Home/>
            {/*<Footer/>*/}
        </div>
    );

}

export default App;
