import "./App.css";
import { SeeMore } from "./components/SeeMore";
import {
  WrappedLargeComponent,
  WrappedShortComponent,
} from "./components/WrappedComponent";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h3>Large Component</h3>
        <SeeMore>
          <WrappedLargeComponent />
        </SeeMore>
      </div>
      <div className="container">
        <h3>Short Component</h3>
        <SeeMore>
          <WrappedShortComponent />
        </SeeMore>
      </div>
    </div>
  );
}

export default App;
