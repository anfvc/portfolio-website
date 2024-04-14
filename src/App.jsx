import "./App.css";
import Home from "./Components/Home/Home";
import Layout from "./Components/Layout/Layout";
import Projects from "./Components/Projects/Projects";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/projects" element={<Projects />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
