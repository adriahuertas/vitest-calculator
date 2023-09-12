import React, { useState } from "react"
import { evaluate } from "mathjs"

const rows = [
  [7, 8, 9],
  [4, 5, 6],
  [1, 2, 3],
  [0],
]

const operations = ["+", "-", "*", "/"]

const equalSign = "="

const Calculator = () => {
  const [value, setValue] = useState("")

  const createHandleClick = op => () => setValue(value.concat(op))

  return (
    <section>
      <h1>Calculator</h1>
      <input value={value} readOnly />
      <div role="grid">
        {rows.map((row, idx) => (
          <div key={idx} role="row">
            {row.map((number) => (
              <button key={number} onClick={createHandleClick(number)} role="cell">{number}</button>
            ))}
          </div>
        ))}
        {operations.map((operation) => (
          <button key={operation} onClick={createHandleClick(operation)}>{operation}</button>
        ))}
        <button onClick={() => setValue(evaluate(value).toString())}>{equalSign}</button>
      </div>
    </section>)
}

export default Calculator
