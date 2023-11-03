import logo from "./logo.svg";
import "./App.css";
import { Heading } from "@chakra-ui/react";
import { Navbar } from "./Components/Navbar";
import { AllRoutes } from "./Components/AllRoutes";
import { Footer } from "./Components/footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
