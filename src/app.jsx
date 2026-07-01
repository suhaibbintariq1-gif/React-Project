import "./App.css";
import Accordian from "./componenets/accordian";
import RandomColor from "./componenets/random-color";
import StarRating from "./componenets/star-rating";
function App() {
  return (
    <div className="App">
      {/* Accordian component */}
       <Accordian/>
       <RandomColor/>
        <StarRating/>
    </div>
  );
}

export default App;