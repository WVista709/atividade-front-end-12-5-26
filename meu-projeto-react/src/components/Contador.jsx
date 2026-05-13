import { useState } from 'react'
import './Contador.css'

function Contador() {
  const [count, setCount] = useState(0)

  const increment = () => setCount(prev => prev + 1)
  const decrement = () => setCount(prev => prev - 1)
  const reset = () => setCount(0)

  return (
    <div className="contador-container">
      <h2 className="contador-title">Contador</h2>

      <p className={`contador-value ${count > 0 ? 'positive' : count < 0 ? 'negative' : ''}`}>
        {count}
      </p>

      <div className="contador-buttons">
        <button className="btn btn-minus" onClick={decrement}>−</button>
        <button className="btn btn-reset" onClick={reset}>Reset</button>
        <button className="btn btn-plus" onClick={increment}>+</button>
      </div>
    </div>
  )
}

export default Contador
