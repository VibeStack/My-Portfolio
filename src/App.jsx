import Home from "../components/Home";
import "./App.css";
import LatestWorks from "../components/LatestWorks";
import { ScrollProvider } from "../context/scrollProvider";
import ExpertsView from "../components/ExpertsView";

function App() {
  return (
    <ScrollProvider>
      <Home />
      <LatestWorks />
      <ExpertsView />
    </ScrollProvider>
  );
}

export default App;
