import { useState } from "react";
import "./App.css";

import StartGame from "./component/StartGame";
import GamePlay from "./component/GamePlay";

function App() {
  const [isGameStart, setIsGameStart] = useState(true);

  const toggleGamePlay = () => {
    setIsGameStart((prev) => !prev);
  };
  return (
    <>{isGameStart ? <GamePlay /> : <StartGame toggle={toggleGamePlay} />}</>
  );
}

export default App;
