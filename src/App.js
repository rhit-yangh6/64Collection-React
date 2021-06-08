import Header from './components/Header'
import Brands from "./components/Brands"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {

  return (
    <Router>
      <div className='container'>
        <Header/>
        <Switch>
          <Route exact path="/">
            <Brands />
          </Route>
          <Route path="/brand">

          </Route>
        </Switch>
      </div>
    </Router>
  );

}

export default App;
