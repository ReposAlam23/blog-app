import './App.css';
import Home from './components/Home';
import {Routes, Route, BrowserRouter} from "react-router-dom"
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import { useEffect, useState } from 'react';

function App() {
  const [users, setUsers] = useState([])

  const fetchUser= async()=>{
    await fetch("https://jsonplaceholder.typicode.com/users")
          .then((data)=>data.json())
          .then((value)=>{
              setUsers(value);
            })
    }
    useEffect(()=>{
      fetchUser()
    }, [])

  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home users={users} />} />
        <Route path="/profile/:id/:name" element={<Profile users={users}/>}/>  
      </Routes>
      </BrowserRouter>  
    </div>
  );
}

export default App;
