import React, {useState} from 'react';
import { BrowserRouter} from 'react-router-dom';
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
          <div className="container intro__middle">
            <AppRouter setActive={setActive}/>
          </div>
        </div>
      </BrowserRouter>
  );
}

export default App;
