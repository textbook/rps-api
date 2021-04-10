import { useEffect, useState } from "react";

import Form from "./Form";
import Opponent from "./Opponent";
import Outcome from "./Outcome";
import { getRandomUser } from "./randomUserService";
import { randomWeapon, rps } from "./rpsService";

const App = () => {
  const [opponent, setOpponent] = useState(null);
  const [opponentWeapon, setOpponentWeapon] = useState(null);
  const [outcome, setOutcome] = useState(null);

  useEffect(() => {
    getRandomUser().then(setOpponent);
  }, []);

  const handleSubmit = (playerWeapon) => {
    const newOpponentWeapon = randomWeapon();
    setOpponentWeapon(newOpponentWeapon);
    setOutcome(rps(playerWeapon, newOpponentWeapon));
  };

  return (
    <div>
      <Form onSubmit={handleSubmit} />
      {opponent && <Opponent opponent={opponent} weapon={opponentWeapon} />}
      {outcome && <Outcome result={outcome} />}
    </div>
  );
}

export default App;
