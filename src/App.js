import './App.css';
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import Aos from 'aos'
import { Route,Router, Switch } from 'react-router-dom';


function App() {
  Aos.init()
  return (
    <Switch>
      <Route exact path="/"><Home/></Route>
      <Route exact path="/cart"><Cart/></Route>
    </Switch>
  );
}

export default App;
