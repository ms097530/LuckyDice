import LuckyN from './LuckyN'
import { sum } from './utils'
import './App.css'
import BoxGrid from './BoxGrid'

function App()
{
  const areAllSame = (dice) =>
  {
    return dice.every(die => die === dice[0])
  }

  const isTotalSeven = (dice) =>
  {
    return sum(dice) === 7
  }

  return (
    <main>
      <LuckyN title="Lucky7" winCheck={isTotalSeven} />
      <LuckyN numDice={3} title="Game of Same" winCheck={areAllSame} />
      <BoxGrid />
    </main>
  )
}

export default App
