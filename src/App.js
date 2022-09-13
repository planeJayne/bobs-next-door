import './App.css';
import Search from './components/Search'
import NewStoreForm from './components/NewStoreForm';
import StoreList from './components/StoreList';
import React, {useState, useEffect} from 'react';
import Store from './components/Store';

function App() {
  const [stores, setStores]= useState([])

  useEffect(() => {
      fetch('http://localhost:8085/stores')
      .then((r) => r.json())
      .then((data) => setStores(data))
  }, []) 


  return (
    <div className="main-container">
      <img src="/images/bobsburgers.png" />
      <h1>Neighbor Stores</h1>
      <Search />
      <NewStoreForm />
      <StoreList stores={stores} />
    </div>
  );
}

export default App;
