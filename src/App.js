import 'bootstrap/dist/css/bootstrap.min.css';

import NavBarHeader from './components/NavBar';
// import ItemListContainer from './components/ItemListContainer';
// import ItemCount from './components/ItemCount';
import ItemList from './conteiners/ItemList';

function App() {
  return (
    <div className="App">
      <NavBarHeader/>
{/*       <ItemListContainer 
        greetings="Próximamente aquí estará el contenido =D"
      /> */}
      <ItemList />
{/*       <ItemCount 
        start={1}
        stock={10}
      /> */}
    </div>
  )
}

export default App;

