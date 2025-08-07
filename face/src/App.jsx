import {useState} from "react";

import Home from "./Home";

function App() {
  const [songs, setSongs] = useState();
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] via-[#111827] to-black text-white">
      <Home songs={songs} setSongs={setSongs} />
    </div>
  );
}

export default App;
