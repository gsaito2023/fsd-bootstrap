import logo from "./logo.svg";
import "./App.css";
import IDCards from "./components/IDcards";
import IDcardsAmazon from "./components/IDcardsAmazon";
import IDcardsAmazonClass from "./components/IDcardsAmazonClass";
import IDcardsClass from "./components/IDcardsClass";

function App() {
  return (
    <>
      <h1>
        React functional components are in blue. Class components are in red.
      </h1>
      <div className="container">
        <IDCards />
        <IDcardsClass />
        <IDcardsAmazon />
        <IDcardsAmazonClass />
      </div>
    </>
  );
}

export default App;
