import "./App.css";
import Home from "./Views/Home/Home";
import Layout from "./Components/Layout/Layout";
import Projects from "./Views/Projects/Projects";
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
