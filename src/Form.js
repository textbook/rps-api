import { useState } from "react";

const Form = ({ onSubmit }) => {
  const [weapon, setWeapon] = useState("rock");

  return (
    <div>
      <label>
        Left
        <select onChange={({ target: { value } }) => setWeapon(value)}>
          <option value="rock">Rock</option>
          <option value="paper">Paper</option>
          <option value="scissors">Scissors</option>
        </select>
      </label>
      <button onClick={() => onSubmit(weapon)}>Throw</button>
    </div>
  );
};

export default Form;
