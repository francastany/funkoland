import NavBarHeader from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>

      <NavBarHeader/>
      <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/category/:idCategory' element={<ItemListContainer />} />
        <Route path='/funko/:idFunko' element={<ItemDetailContainer />} />
        <Route path='*' element={<h2>ERROR 404 NOT FOUND</h2>} />
      </Routes>

    </BrowserRouter>
  )
}

export default App;

