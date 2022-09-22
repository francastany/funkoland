import NavBarHeader from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import Cart from './components/Cart/Cart';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartContextProvider from './components/Cart/CartContext';

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <NavBarHeader/>
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/category/:idCategory' element={<ItemListContainer />} />
          <Route path='/funko/:idFunko' element={<ItemDetailContainer />} />
          <Route path='/cart'element={<Cart />}/>
          <Route path='*' element={<h2>ERROR 404 NOT FOUND</h2>} />
        </Routes>
      </BrowserRouter>
      </CartContextProvider>
  )
}

export default App;

