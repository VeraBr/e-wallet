import './App.css';
import {Routes, Route} from "react-router-dom";
import Cards from './pages/Cards';
import AddCard from './pages/AddCard';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getUsers } from './components/cardListSlice';


function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers())
  }, [])

  return (
    <div className="App">
      <header>
        <h1>E-WALLET</h1>
      </header>

      <Routes>
        <Route path="/" element={<Cards />} />
        <Route path="/addcard" element={<AddCard />} />
      </Routes>
    </div>
  );
}

export default App;
