import React, { PropTypes } from 'react'
import { Button } from 'react-bootstrap'

const Counter = (props) => {
  const { increment, incrementIfOdd, incrementAsync, decrement, counter } = props
  return (
    <div>
      Clicked: {counter} times
      {' '}
      <Button onClick={ increment }>+</Button>
      {' '}
      <button onClick={decrement}>-</button>
      {' '}
      <button onClick={incrementIfOdd}>Increment if odd</button>
      {' '}
      <button onClick={() => incrementAsync()}>Increment async</button>
    </div>
  )
}

Counter.propTypes = {
  increment: PropTypes.func.isRequired,
  incrementIfOdd: PropTypes.func.isRequired,
  incrementAsync: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  counter: PropTypes.number.isRequired
}

export default Counter
