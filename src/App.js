import Navbar from "./components/navbar/navbar";
import Intro from "./components/intro/intro";
import Skills from "./components/skills/skills";
import About from "./components/about/about";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro />
      <About />
      <Skills />
    </div>
  );
}

export default App;
