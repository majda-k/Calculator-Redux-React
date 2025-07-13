import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { sum  , sub , mul , div} from "./calcSlice";

export default function Calc() {
  const result = useSelector((state) => state.calculator.result);
  const dispatch = useDispatch();

  const [firstNumber, setFirstNumber] = React.useState('');
    const [secondNumber, setSecondNumber] = React.useState('');

  const handleSum = () => {
    dispatch(sum({ firstNumber, secondNumber }));
  }
   const handleSub = () => {
    dispatch(sub({ firstNumber, secondNumber }));
  }
   const handleMul = () => {
    dispatch(mul({ firstNumber, secondNumber }));
  }
   const handleDiv = () => {
    dispatch(div({ firstNumber, secondNumber }));
  }

  return (
    <div>
      <h1>Calculator</h1>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" , width: "200px" , margin: "auto"}}>
       <input type="FirstNumber"
       value={firstNumber}
       onChange={(e) => setFirstNumber(e.target.value)}
       ></input>
         <input type="SecondNumber" 
           value={secondNumber}
       onChange={(e) => setSecondNumber(e.target.value)}
         ></input>
          <button onClick={handleSum} >Calculate Sum</button>
          <button onClick={handleSub} >Calculate Sub</button>
          <button onClick={handleMul} >Calculate Mul</button>
          <button onClick={handleDiv} >Calculate Div</button>
      </div>

      <p>Result: {result}</p>
    </div>
  );
}
