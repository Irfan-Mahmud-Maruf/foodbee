
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Contract from './components/Contract/Contract';
import Details from './components/Details/Details';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import MenuItems from './components/MenuItems/MenuItems';
import Service from './components/Service/Service';
import Singin from './components/Singin/Singin';
import SingUp from './components/SingUp/SingUp';
import AuthProvider from './Context/AuthProvider';


function App() {
  return (


    <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/singin">
            <Singin></Singin>
          </Route>
          <Route path="/singup">
            <SingUp></SingUp>
          </Route>
          <Route path="/service">
            <Service></Service>
          </Route>
          <Route path="/details/:id">
            <Details></Details>
          </Route>
          <Route path="/menuitems">
            <MenuItems></MenuItems>
          </Route>
          <Route path="/contract">
            <Contract></Contract>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>


    </AuthProvider>




  );
}

export default App;
