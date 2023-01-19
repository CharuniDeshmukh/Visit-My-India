import { Header } from "./Components/js/header";
import { Footer } from "./Components/js/footer";
import { State } from "./Components/js/state";
import { Home } from "./Components/js/home";
import { Contact } from "./Components/js/contact";
import { Register } from "./Components/js/register";
import { Login } from "./Components/js/login";
import { Contribute } from "./Components/js/contribute";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route exact path="/" element={<Home />}></Route>

        <Route exact path="/states" element={<State />}></Route>

        <Route exact path="/contact" element={<Contact />}></Route>

        <Route exact path="/register" element={<Register />}></Route>
        
        <Route exact path="/login" element={<Login />}></Route>

        <Route exact path="/contribute" element={<Contribute />}></Route>

      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
