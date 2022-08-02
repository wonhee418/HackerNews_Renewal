import Header from "./components/Header.js";
import FlotingBtn from "./components/FlotingBtn.js";
import Home from "./pages/home.js";
import Newest from "./pages/newest.js";
import Ask from "./pages/ask.js";
import Detail from "./pages/detail.js";
import Show from "./pages/show.js";
import Job from "./pages/job.js";
import Error from "./pages/error.js";
import { GlobalStyle } from "./style/GlobalStyle.js";
import "./App.css";
import "./style/darkStyle.scss";
import "./style/item.scss";

import { Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  let [mode, setMode] = useState(false);

  return (
    <div className="App">
      <GlobalStyle />
      <Header setMode={setMode} mode={mode} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<Newest />} />
        <Route path="/ask" element={<Ask />} />
        <Route path="/show" element={<Show />} />
        <Route path="/job" element={<Job />} />
        <Route path="/detail/*" element={<Detail />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <FlotingBtn />
    </div>
  );
}

export default App;
