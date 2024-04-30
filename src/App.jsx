import "./App.css";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import Tech from "./Components/Tech/Tech";
import Projects from "./Components/Projects/Projects";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Tech />
        <Projects />
      </main>
    </>
  );
}

export default App;
