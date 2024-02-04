import Header from './Components/Header'
import Navbar from './Components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import "./App.css";
import Footer from './Components/Footer';
import Login from './Authentication/Login';
import { useState } from 'react';
import Pricing from './Components/Pricing';
import Signup from './Authentication/Signup'

function App() {
  const [tabName,setActiveTab]=useState("Home");
  return(
  <>
  <Header tabName={tabName} setActiveTab={setActiveTab}></Header>
  {(tabName=="Home") && <Navbar/> }
  {(tabName=="Features") && <Navbar/> }
  {(tabName=="Pricing") && <Pricing/> }
  {(tabName=="FAQS") && <Navbar/> }
  {(tabName=="About") && <Navbar/> }
  {(tabName=="Login") && <Login setActiveTab={setActiveTab}/> } 
  {tabName=="Signup" && <Signup></Signup>}
  <Footer></Footer>
  </>
  );
}

export default App;
