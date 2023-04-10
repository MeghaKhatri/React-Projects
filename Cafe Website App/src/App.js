import "./App.css";
import { Route , Routes } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Home from "./pages/Home";
import Snacks from "./pages/Snacks";
import Healthy from "./pages/Healthy";
import Dessert from "./pages/Dessert"
import { useState } from "react";
import Logout from "./pages/Logout";
import Login from './pages/Login';
function App() {

  const [login, setlogin] = useState(false);
  return (
   <div>
    <Navbar login={login} setlogin={setlogin}/>

    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/snacks" element={<Snacks/>}/>
      <Route path="/dessert" element={<Dessert/>}/>
      <Route path="/healthy" element={<Healthy/>}/>
      <Route path="/login" element={<Login setlogin={setlogin}/>}/>
      <Route path="/logout" element={<Logout setlogin={setlogin}/>}/>

    </Routes>
   </div>
  );
}

export default App;
