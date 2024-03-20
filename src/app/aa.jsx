import { useState } from "react"

let initialCounter = [0, 0, 0]

export default function Aa() {
  const[counters, setCounters] = useState(initialCounter)

  function handleIncrementClick(index) {
    const nextCounters = counters.map((c, i) => {
      if(i === index) {
        return c + 1;
      }else {
        return c;
      }
    })

    setCounters(nextCounters)
  }

  return (
    <ul>
      {counters.map((counter, i) => (
        <li key={i}>
          {counter}
          <button onClick={() => {
            handleIncrementClick(i);
          }}>+1</button>
        </li>
      ))}
    </ul>
  )
}