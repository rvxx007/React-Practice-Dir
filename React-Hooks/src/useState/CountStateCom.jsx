import { useState } from "react";

const CountStateCom = () => {
  const [counter, setCounter] = useState(0);

  const increamentValue = ()=>{
      setCounter(counter + 1);
  }

  const decreamentValue = ()=>{
      setCounter(counter -1)
  }
  
  return (
    <div>
        <span>$ {counter}</span>
        <button onClick={decreamentValue}>-</button>
        <button onClick={increamentValue}>+</button>
    </div>
  )
}

export default CountStateCom