import { useState } from "react"
import { getRolls } from './utils'
import Dice from './Dice'
import Button from "./Button"
import './LuckyN.css'

export default function LuckyN({ numDice = 2, winCheck, title })
{
    const [dice, setDice] = useState(() => getRolls(numDice))
    const isWinner = winCheck(dice)

    const roll = () =>
    {
        setDice(getRolls(numDice))
    }

    return (
        <section className="LuckyN">
            <h1>{title} {isWinner && "You win!"}</h1>
            <Dice dice={dice} />
            <Button text={"Reroll"} handleClick={roll} />
        </section>
    )
}
