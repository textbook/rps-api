import { useEffect, useState } from "react";

import Opponent from "./Opponent";
import { getRandomUser } from "./randomUserService";

const App = () => {
  const [opponent, setOpponent] = useState(null);

  useEffect(() => {
    getRandomUser().then(setOpponent);
  }, []);

  return (
    <div>
      {opponent && <Opponent opponent={opponent} />}
    </div>
  );
}

export default App;
