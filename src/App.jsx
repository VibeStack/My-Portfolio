import Home from "../components/Home";
import "./App.css";
import LatestWorks from "../components/LatestWorks";
import { ScrollProvider } from "../context/scrollProvider";

function App() {
  return (
    <ScrollProvider>
      <Home />
      <LatestWorks />
    </ScrollProvider>
  );
}

export default App;
