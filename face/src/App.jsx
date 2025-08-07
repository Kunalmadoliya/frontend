import {useState} from "react";

import Home from "./Home";

function App() {
  const [songs, setSongs] = useState();
  return (
    <div className="bg-amber-50 h-screen w-full">
      <Home songs={songs} setSongs={setSongs} />
    </div>
  );
}

export default App;
