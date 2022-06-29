import React from 'react';
import { BrowserRouter, Route,useRouteMatch,useParams,Routes,Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Quiz from './components/Quiz';
import Home from './components/Home';

function App() {
  return (
  //   <div>
  //   <BrowserRouter>
  //   <Header/>
  //   <Routes>
  //   <Route path='/' element={<Front/>} />
  //   <Route path='/Vegetable' element={<Vegetable/>} />
  //   <Route path='/fashion' element={<Fashion/>}/>
  //   <Route path='grocery' element={<Grocery/>}/>
  //   <Route path='fashion/grocstore' element={
  //     <Homefash/>
  //     }/>
  //     <Route path='Vegetable/grocstore' element={
  //       <Home/>
  //       }/>
  //       <Route path='grocery/grocstore' element={
  //         <Home/>
  //         }/>
  //         <Route path='cart' element={<Cart/>}/>
  //   </Routes>
  //  </BrowserRouter>
  //   </div>

<div>
<BrowserRouter>
      <div className='App'>
        <Header />
        <Routes>
      
          <Route path='quiz' element={<Quiz/>}/>
           
          
          <Route path='/' element={<Home/>}/>
        
        </Routes>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
