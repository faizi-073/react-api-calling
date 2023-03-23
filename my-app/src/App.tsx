import { useState } from "react";
import FetchApi from "./components/FetchAPI";
import AxiosAPI from "./components/AxiosAPI";
import SwrAPI from "./components/SwrAPI";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      {/* <FetchApi /> <AxiosAPI /> */}
      <SwrAPI />
    </div>
  );
}

export default App;
