import { useEffect, useState } from "react";

import Form from "./Form";
import Opponent from "./Opponent";
import { getRandomUser } from "./randomUserService";

const App = () => {
  const [opponent, setOpponent] = useState(null);

  useEffect(() => {
    getRandomUser().then(setOpponent);
  }, []);

  return (
    <div>
      <Form onSubmit={() => {}} />
      {opponent && <Opponent opponent={opponent} />}
    </div>
  );
}

export default App;
