import React from 'react';
import './style/style.scss'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './pages/Main';
import Catalog from './pages/Catalog';
import Cart from './pages/Cart';
import Product from './pages/Product';
import Registration from './pages/Registration';
import Bottom from './components/Bottom';


function App() {

  
  return (
    <div className="App">
        <Header/> 
        <BrowserRouter>
          <Routes>
            <Route path='/Catalog' element={<Main/>} />
            <Route path='/' element={ <Catalog/>} />
            <Route path='/Cart' element={ <Cart/>} />
            <Route path='/Product' element={ <Product/>} />
            <Route path='/Registration' element={ <Registration/>} />
          </Routes>
        </BrowserRouter>
        <Bottom/>
        <Footer/>
    </div>
  );
}

export default App;
