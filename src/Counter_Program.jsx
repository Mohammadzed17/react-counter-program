import React, {useState} from "react";

function CounterProgram(){

    const [count,setCount] = useState(0);

    function increment(){
        setCount(c => c + 1);
    }
    function reset(){
        setCount(0);
    }
    function decrement(){
        setCount(c => c - 1);
    }

    return(
        <div className="counter">
            <p className="count">{count}</p>
            <button onClick={increment} className= "counter button">Increament</button>
            <button onClick={reset} className="counter button">Reset</button>
            <button onClick={decrement} className="counter button">Decreament</button>
        </div>
    )
}
export default CounterProgram