import { useState } from "react"
import { d6, getRolls, sum } from './utils'
import Dice from './Dice'
import './LuckyN.css'

export default function LuckyN({ numDice = 2, goal = 7 })
{
    const [dice, setDice] = useState(() => getRolls(numDice))
    const isWinner = sum(dice) === goal

    return (
        <section className="LuckyN">
            <h1>Lucky{goal} {isWinner && "You win!"}</h1>
            <Dice dice={dice} />
        </section>
    )
}
