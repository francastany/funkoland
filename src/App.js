import 'bootstrap/dist/css/bootstrap.min.css';

import NavBarHeader from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBarHeader/>
      <ItemListContainer 
        greetings="Próximamente aquí estará el contenido =D"
      />
    </div>
  )
}

export default App;

