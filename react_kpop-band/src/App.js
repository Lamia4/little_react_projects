
import './App.css';
import { BrowserRouter, Route, Switch, Nav, NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Components/Header";
import Homepage from "./Pages/Homepage";
import Band from "./Pages/Band"

function App() {
  return (
    <div className="App">
      
    <BrowserRouter>
      <Header/>
  
    <Switch>
      <Route exact path ="/" component = { Homepage }/>
      <Route path ="/:bandName" component = { Band } />

    </Switch>
    
    </BrowserRouter>


    </div>
  );
}

export default App;
