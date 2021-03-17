const NumberToggler = () => {
  const [number, setNumber] = useContext(NumberContext);

  return (
    <div
      onClick={() => {
        setNumber(NumberContext === 0);
      }}
    ></div>
  );
};

export default NumberToggler;
