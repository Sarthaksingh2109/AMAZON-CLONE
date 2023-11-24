import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './Components/Header';
import Home from './Components/Home';
import Checkout from './Components/Checkout';
import Login from './Components/Login';
import { useStateValue } from './Components/StateProvider';
import { useEffect } from 'react';
import { auth } from './Components/firebase';

function App() {
  const [{user}, dispatch] = useStateValue();

  useEffect(() =>{
   const unsubscribe = auth.onAuthStateChanged((authUser)=> {
      if (authUser){
    dispatch({
      type: "SET_USER",
      user: authUser
    })
      } else {
        dispatch({
          type: "SET_USER",
          user: null
        });
      }
    });

    return () =>{
      unsubscribe();
    }

  }, [])


  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path='/' element={
            <>
              <Header />
              <Home />
            </>
          } />
          <Route path='/checkout' element={
            <>
              <Header />
              <Checkout/>
            </>
          } />
          <Route path='/login' element={
          
          <>
          <Login/>
          </>
          } />
        </Routes>
      </div>
    </Router>

  );
}

export default App;
