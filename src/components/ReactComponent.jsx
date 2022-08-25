import React, {useEffect, useState} from 'react'

function ReactComponent() {
  const [count, setCount] = useState(0);

  function handleChange(e, action) {
    console.log(action)
    action === "plus" ? setCount(prev => prev++) : setCount(prev => prev--)
  }

  return (
    <div>
      <p>{count}</p>
      <button onClick={(e) => handleChange(e, 'plus')}>+</button>
      <button onClick={(e) => handleChange(e, 'minus')}>-</button>
    </div>
  )
}

export default ReactComponent