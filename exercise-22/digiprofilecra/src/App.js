import logo from "./logo.svg";
import "./App.css";
import DigiNav from "./components/DigiNav";
import Avatar from "./components/Avatar";
import ContactInfo from "./components/ContactInfo";
import SummarySection from "./components/Summary";
import Expertise from "./components/Expertise";
import ProExperience from "./components/ProExperience";
import Accomplishments from "./components/Accomplishments";
import ProjectResults from "./components/ProjectResults";
import TechSummary from "./components/TechSummary";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import ContactMe from "./components/ContactMe";

function App() {
  return (
    <div className="App">
      <DigiNav />
      <Avatar />
      <ContactInfo />
      <SummarySection />
      <Expertise />
      <ProExperience />
      <Accomplishments />
      <ProjectResults />
      <TechSummary />
      <Education />
      <Certifications />
      <ContactMe />
    </div>
  );
}

export default App;
