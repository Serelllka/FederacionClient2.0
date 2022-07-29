import React, {useState} from 'react';
import { BrowserRouter, useLocation, Route, Routes} from 'react-router-dom';
import AuthPage from './pages/AuthPage';
import MainPage from './pages/MainPage';
import Navbar from './components/UI/navbar/navbar';
import AppRouter from './components/AppRouter';

function App() {
  const [active, setActive] = useState(true)
  return (
      <BrowserRouter>
        <div className="intro">
          {active &&
            <Navbar/>
          }
          <div class="container intro__middle">
            <AppRouter setActive={setActive}/>
          </div>
        </div>
      </BrowserRouter>
  );
}

export default App;
