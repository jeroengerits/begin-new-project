import React, { FunctionComponent, useState } from 'react'

interface CounterProperties {
  defaultState: number
}

type Properties = CounterProperties

const Counter: FunctionComponent<Properties> = ({
  defaultState = 0,
}: Properties) => {
  const [count, setCount] = useState(defaultState)
  return (
    <span onClick={() => setCount((count) => count + 1)}>
      count is: <em>{count}</em>
    </span>
  )
}

export default Counter
