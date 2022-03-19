import './App.css';
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import Login from './Pages/Login';
import Shop from './Pages/Shop';
import Aos from 'aos'
import { Route, Switch } from 'react-router-dom';
import Signup from './Pages/Signup';
import CollapseButton from './Components/CollapseButton';


function App() {
  Aos.init()
  return (
    <Switch>

      <Route exact path="/"><Home/></Route>
      <Route exact path="/cart"><Cart/></Route>
      <Route exact path="/shop"><Shop/></Route>
      <Route exact path="/login"><Login/></Route>
      <Route exact path="/signup"><Signup/></Route>
      <Route exact path="/button"><CollapseButton/></Route>
    </Switch>
  );
}

export default App;
