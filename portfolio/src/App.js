import "./App.css";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Introduction from "./components/Introduction";
import CircularProgressBar from "./components/CircularProgressBar";
import SkillsPage from "./components/SkillsPage";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="overflow-hidden">
      <Navbar></Navbar>
      <Introduction></Introduction>
      <SkillsPage></SkillsPage>
      {/* <CircularProgressBar></CircularProgressBar> */}
      <Projects></Projects>
      <Experience></Experience>
      <Contact></Contact>
    </div>
  );
}

export default App;
