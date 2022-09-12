import NavBarHeader from './components/NavBar/NavBar';
// import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';

// import ItemCount from './components/ItemCount';
// import ItemList from './conteiners/ItemList';

function App() {
  return (
    <div className="App">
      <NavBarHeader/>
        {/* <ItemListContainer/> */}
        <ItemDetailContainer />
    </div>
  )
}

export default App;

