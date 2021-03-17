import { useContext } from "react";
import NumberContext from "../context/NumberContext";

const NumberToggler = () => {
  const [number, setNumber] = useContext(NumberContext);

  return (
    <div
      onClick={() => {
        setNumber(number === 0 ? null : number + 1);
      }}
    >
      <button title="Add number">{number === 0 ? null : number + 1}</button>
    </div>
  );
};

export default NumberToggler;
