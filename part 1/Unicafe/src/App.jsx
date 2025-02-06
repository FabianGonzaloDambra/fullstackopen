import { useState } from 'react'

const Button = props => {
  return <button onClick={props.onClick}>{props.text}</button>
}

const StatisticsLine = props => {
  return <tr>
    <td>{props.text}</td>
    <td>{props.feedback}</td>
  </tr>
}

const Statistics = props => {
  return <table>
    <thead>
      <tr>
        <td>Statistics</td>
        <td>Points</td>
      </tr>
    </thead>
    <tbody>
      <StatisticsLine text='Good:' feedback={props.good} />
      <StatisticsLine text='Neutral:' feedback={props.neutral} />
      <StatisticsLine text='Bad:' feedback={props.bad} />
      <StatisticsLine text='Total:' feedback={props.total} />
      <StatisticsLine text='Average:' feedback={props.average} />
      <StatisticsLine text='Percentage:' feedback={`${props.percentage}%`} />
    </tbody>
  </table>
}

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const points = {
    good: 1,
    neutral: 0,
    bad: -1,
  }

  const handleClickGood = () => {
    setGood(prev => prev + 1)
  }

  const handleClickNeutral = () => {
    setNeutral(prev => prev + 1)
  }

  const handleClickBad = () => {
    setBad(prev => prev + 1)
  }

  const total = good + neutral + bad
  const average = parseFloat(((points.good * good + points.neutral * neutral + points.bad * bad) / total).toFixed(2)) || 0
  const percentage = parseFloat(((good * 100) / total).toFixed(2)) || 0

  return (
    <div>
      <h1>Give feedback</h1>
      <Button text='good' onClick={handleClickGood} />
      <Button text='neutral' onClick={handleClickNeutral} />
      <Button text='bad' onClick={handleClickBad} />
      <h2>Statistics</h2>
      {total > 0
        ?
        <Statistics good={good} neutral={neutral} bad={bad} total={total} average={average} percentage={percentage} />
        :
        <h2>No feedback given</h2>
      }
    </div>
  )
}

export default App