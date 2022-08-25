import {useState} from 'react'

function ReactComponent({children}) {

  const [count, setCount] = useState(0);

  const add = () => setCount((prev) => prev + 1);
  const subtract = () => setCount((prev) => prev - 1);

  return (
    <>
      <h1>{children}</h1>
      <p>{count}</p>
      <button onClick={add}>+</button>
      <button onClick={subtract}>-</button>
    </>
  )
}

export default ReactComponent