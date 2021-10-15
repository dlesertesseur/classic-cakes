import './App.css';
import NavBar from './components/NavBar.jsx'
import ItemListContainer from './components/containers/ItemListContainer.jsx'

function App() {
  return (
    <>
      <NavBar/>
      <ItemListContainer greeting="HOLA CODERS !!!"/>
    </>
  );
}

export default App;
