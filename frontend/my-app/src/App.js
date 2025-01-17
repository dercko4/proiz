import { BrowserRouter } from "react-router-dom"; 
import AppRouter from "./components/AppRouter";  
import Header from "./components/header";

function App() { 
  return (
    
    <BrowserRouter> 
      <Header/>
      <AppRouter/> 
      
    </BrowserRouter> 
  ); 
} 

export default App;