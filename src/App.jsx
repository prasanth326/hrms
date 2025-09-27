import React from "react";
import "./App.css";
import Login from "./Components/Login/Login";
import Signinpage from "./Components/SigninPage/Signinpage";
import Accesspage from "./Components/AccessPage/Accesspage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Pagedetailed from "./Components/PageDetailed/Pagedetailed";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/accesspage" element={<Accesspage />}/>
        <Route path="/" element={<Accesspage />}/>
        <Route path="/:title/:id" element={<Pagedetailed />}/>
      </Routes>
    </Router>
  );
}

export default App;
