
import { useEffect } from "react";

import './App.css';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import { Header } from './Components/Header';
import { Home } from './Components/Home';
import { Checkout } from './Components/Checkout';
import { Signin } from './Components/Signin';
import { useStateValue} from "./Components/StateProvider";
import { auth } from "./Components/firebase";
import Categories from "./Components/Categories";

function App() {
  const [{basket}, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribte = auth.onAuthStateChanged((authUser) => {
      if(authUser){
         dispatch({
           type: "SET_USER",
           user: authUser,
         });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        }); 
      }
    
    });
    return () => {
      unsubscribte();
    }
  }, []);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/signin" exact>
              <Signin />
          </Route>

          <Route path="/" >
            <Header />
            {/* <Categories /> */}
            <Home />
          </Route>



        </Switch>

      </div>
    </Router>
  );
}

export default App;
