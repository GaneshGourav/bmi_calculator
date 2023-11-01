import logo from './logo.svg';
import './App.css';
import { Heading } from '@chakra-ui/react';
import { Navbar } from './Components/Navbar';
import { AllRoutes } from './Components/AllRoutes';

function App() {
  return (
    <div className="App">
    
     <Navbar/>
     <AllRoutes/>
    </div>
  );
}

export default App;
