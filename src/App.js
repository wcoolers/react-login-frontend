import './App.css';
// import { Link, Route, Switch } from "react-router-dom"

import Signup from './components/Signup'
import Banner from './components/Banner'

export default function App() {
    return (
       <div className="container">
            <Signup />
            <Banner />
            
       </div>
       
    )
}
