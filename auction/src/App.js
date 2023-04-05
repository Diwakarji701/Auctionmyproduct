import Navbar from "./Navbar/Navbar.js"
import Intro from "./Intro/Intro.js";
import Registration from "./Login/registration.js"
import SignUp from "./Login/signup.js";
import OTP from "./Login/OTP.js";
import Live1 from "./Live1/Live1.js";
import Category from "./Category/Category.js";
import { BrowserRouter,Routes, Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar/>}></Route>
      </Routes>
      <Routes>
        <Route path="/login" element={<Registration/>}></Route>
      </Routes>
      <Routes>
        <Route path="/signup" element={<SignUp/>}></Route>
      </Routes>
      <Routes>
        <Route path="/OTP" element={<OTP/>}></Route>
      </Routes>
      <Routes>
      <Route path="/" element={<Intro/>}></Route>
      </Routes>
      <Routes>
        <Route path="/" element={<Live1/>}></Route>
      </Routes>
      <Routes>
        <Route path="/" element={<Category/>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
