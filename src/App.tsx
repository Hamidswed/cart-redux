import React from 'react';
import Counter from './features/counter/Counter'
import Products from './Components/Products';
import Header from './Components/Header';
import { cartSlice } from './features/counter/cartSlice';
import { useSelector } from 'react-redux';
import { RootState } from './app/store';
import Cart from './Components/Cart';
import { Routes , Route} from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Store from './pages/Store';
import CartView from './pages/CartView';

function App() {
  const carts = useSelector((state:RootState) => state.cart.value)

  return (
    <div className="bg-gray-600 h-screen">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/store' element={<Store/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/cartview' element={<CartView/>}/>
        <Route path='/store' element={<Store/>}/>
      </Routes>
    </div>
  );
}

export default App;
