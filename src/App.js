import {useState, useEffect} from 'react'
import Header from './components/Header'
import Brands from "./components/Brands"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const axios = require('axios').default

const App = () => {

  const [brands, setBrands] = useState([
    {
      id: 'id',
      name: 'Name',
      country: 'Country',
      iconUrl: 'iconUrl'
    }
  ])

  // Retrieve Brands
  const fetchBrands = async () => {
    try {
      const rsp = await axios.get('http://139.196.98.81:8080/64collection/brand/list?keyword=')
      return rsp.data.data
    } catch (err) {
      console.error(err)
      return []
    }
  }

  useEffect(() => {
    const getBrands = async () => {
      const brandsFromServer = await fetchBrands()
      setBrands(brandsFromServer)
    }
    getBrands().then()
  }, [])

  return (
    <Router>
      <div className='container'>
        <Header/>
        <Switch>
          <Route path="/">
            <Brands brands={brands}/>
          </Route>
        </Switch>
      </div>
    </Router>
  );

}

export default App;
