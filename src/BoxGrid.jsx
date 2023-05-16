import { useState } from "react"
import Box from "./Box"
import Button from "./Button"

export default function BoxGrid({ numBoxes = 9 })
{
    const [boxes, setBoxes] = useState(Array.from({ length: numBoxes }, () => Math.random() >= 0.5 ? true : false))

    const toggleIsActive = (idx) =>
    {
        setBoxes((oldBoxes) =>
        {
            return oldBoxes.map((value, i) =>
            {
                return i === idx ? !value : value
            })
        })
    }

    const reset = () =>
    {
        setBoxes(Array.from({ length: numBoxes }, () => false))
    }

    return (
        <section className="BoxGrid">
            {
                boxes.map((val, i) => <Box key={i} isActive={val} handleClick={toggleIsActive} id={i} />)
            }
            <Button text="Reset" handleClick={reset} />
        </section>
    )
}
