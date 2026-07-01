import "./App.css";
import Accordian from "./componenets/accordian";
import RandomColor from "./componenets/random-color";
import StarRating from "./componenets/star-rating";
import imageSlider from "./componenets/image slider";
function App() {
  return (
    <div className="App">
      {/* Accordian component */}
       <Accordian/>
       <RandomColor/>
        <StarRating/>
        <imageSlider/>
    </div>
  );
}

export default App;