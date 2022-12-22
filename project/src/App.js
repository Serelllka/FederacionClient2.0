import React, {useState} from 'react'
import {BrowserRouter} from 'react-router-dom'
import Navbar from './components/UI/navbar/navbar'
import AppRouter from './components/AppRouter'

function App() {
    const loadTime = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart
    console.log("page load time: ", loadTime)

    if (!localStorage.getItem('condemnations')) {
        localStorage.setItem('condemnations', "[]")
    }
    const [active, setActive] = useState(true)
    return (
        <BrowserRouter>
            <div className="intro">
                {active &&
                    <Navbar/>
                }
                <div className="container intro__middle">
                    <AppRouter setActive={setActive}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
