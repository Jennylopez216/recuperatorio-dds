import React, {useState} from "react"
import { CounterLabel } from "./CounterLabel"

export const Counter = () => {
    const [count, setCount] = useState(0)

    return(
      <button 
      className={count >= 5 ? "una clase": "otra clase"}
        style={{backgroundColor: count >= 5 ? "red" : "blue"}}
        onClick={() => setCount(count + 1)}>
            
        <CounterLabel count={count}/>
      </button>
    )
}