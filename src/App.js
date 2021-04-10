import { useEffect, useState } from "react";

import Form from "./Form";
import Opponent from "./Opponent";
import { getRandomUser } from "./randomUserService";
import { randomWeapon } from "./rpsService";

const App = () => {
  const [opponent, setOpponent] = useState(null);
  const [opponentWeapon, setOpponentWeapon] = useState(null);

  useEffect(() => {
    getRandomUser().then(setOpponent);
  }, []);

  const handleSubmit = () => {
    setOpponentWeapon(randomWeapon());
  };

  return (
    <div>
      <Form onSubmit={handleSubmit} />
      {opponent && <Opponent opponent={opponent} weapon={opponentWeapon} />}
    </div>
  );
}

export default App;
