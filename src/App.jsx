import Leftbar from "./components/leftbar/Leftbar";
import Navbar from "./components/navbar/Navbar";
import Rightbar from "./components/rightbar/Rightbar";
import Update from "./components/update/Update";
import "./app.css";
import { useState } from "react";
import { useEffect } from "react";
import { getUser } from "./redux/apiCalls";
import { useDispatch } from "react-redux";

const App = () => {
  const [name,setName]= useState("Hakkı")
  const dispatch= useDispatch()
useEffect(()=>{
getUser()
},[])
// console.log(getUser().getState());

  return (
    <>
      <Navbar name={name} />
      <div className="container">
        <Leftbar />
        <Update />
        <Rightbar />
      </div>
    </>
  );
};

export default App;
