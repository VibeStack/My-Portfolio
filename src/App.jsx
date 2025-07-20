import Home from "../components/Home";
import "./App.css";
import LatestWorks from "../components/LatestWorks";
import { ScrollProvider } from "../context/scrollProvider";
import ExpertsView from "../components/ExpertsView";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Skills from "../components/Skills";

function App() {
  return (
    <ScrollProvider>
      <Home />
      <LatestWorks />
      <Skills />
      <ExpertsView />
      <Contact />
      <Footer />
    </ScrollProvider>
  );
}

export default App;
