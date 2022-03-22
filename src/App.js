import './App.css';
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import Login from './Pages/Login';
import Shop from './Pages/Shop';
import Aos from 'aos'
import { Route, Switch } from 'react-router-dom';
import Signup from './Pages/Signup';
import ElectricGuitars from './Shop/ElectricGuitars';
import AcousticGuitars from './Shop/AcousticGuitars';
import Drums from './Shop/Drums';
import BassGuitars from './Shop/BassGuitars';
import Pianos from './Shop/Pianos';
import DjEquipment from './Shop/DjEquipment';
import AdminLogin from './Pages/AdminLogin';


function App() {
  Aos.init()
  return (
    <Switch>

      <Route exact path="/"><Home/></Route>
      <Route exact path="/cart"><Cart/></Route>
      <Route exact path="/shop"><Shop/></Route>
      <Route exact path="/login"><Login/></Route>
      <Route exact path="/signup"><Signup/></Route>
      <Route exact path="/electricguitars"><ElectricGuitars/></Route>
      <Route exact path="/acousticguitars"><AcousticGuitars/></Route>
      <Route exact path="/pianos"><Pianos/></Route>
      <Route exact path="/bassguitars"><BassGuitars/></Route>
      <Route exact path="/drums"><Drums/></Route>
      <Route exact path="/djequipment"><DjEquipment/></Route>
      <Route exact path='/adminlogin'><AdminLogin/></Route>

    </Switch>
  );
}

export default App;
