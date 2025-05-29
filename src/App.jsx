import { TimelineWithIcon } from "./components/test";
import { NavigationBar } from "./components/NavigationBar";
import { AboutMe } from "./components/AboutMe";

function App() {
  return (
    <div>
      <NavigationBar />
      <AboutMe />

      {/* Work Experience Section */}
      <div id="experience" className="scroll-mt-24">
        <TimelineWithIcon />
      </div>
    </div>
  );
}

export default App;
