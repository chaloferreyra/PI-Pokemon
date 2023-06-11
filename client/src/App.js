import './App.css';
import { Home, Landing, Detail, Form } from "./views";
import NavBar from './components/NavBar/NavBar';
import { Route, useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();


  return (
    <div className="App">
      <h1>Henry Pokemon</h1>
      
      {location.pathname !=="/" && <NavBar /> }

      <Route exact path="/" render = { () => <Landing />} />
      <Route path="/home" render= { ()=> <Home /> } />
      
      <Route path="/landing" render = { ()=> <Landing /> } />
      <Route path="/detail" render = { ()=> <Detail /> } />
      <Route path="/create" render = { ()=> <Form /> } />
        

      
        
      
    </div>
  );
}

export default App;
