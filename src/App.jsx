import Home from "../components/Home";
import "./App.css";
import LatestWorks from "../components/LatestWorks";
import { ScrollProvider } from "../context/scrollProvider";
import ExpertsView from "../components/ExpertsView";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function App() {
  return (
    <ScrollProvider>
      <Home />
      <LatestWorks />
      <ExpertsView />
      <Contact />
      <Footer />
    </ScrollProvider>
  );
}

export default App;
