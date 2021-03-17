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
      <p>Click button to add number</p>
      <button>{number === 0 ? null : number + 1}</button>
    </div>
  );
};

export default NumberToggler;
