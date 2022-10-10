import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from './components/page/Home'
import Member from './components/page/Member'
import Product from './components/page/Product'

import './App.css'

function App() {
  return (
      <div>
        <Router>
            <Navigation/>
              <Routes>
                  <Route path="/home" element={<Home/>} exact/>
                  <Route path="/member" element={<Member/>}/>
                  <Route path="/product" element={<Product/>}/>
              </Routes>
        </Router>
      </div>
  );
}

export default App;