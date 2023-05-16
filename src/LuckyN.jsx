import { useState } from "react"
import { d6, getRolls, sum } from './utils'
import Dice from './Dice'
import './LuckyN.css'

export default function LuckyN({ numDice = 2, goal = 7 })
{
    const [dice, setDice] = useState(() => getRolls(numDice))

    return (
        <section className="LuckyN">
            <Dice dice={dice} />
        </section>
    )
}
