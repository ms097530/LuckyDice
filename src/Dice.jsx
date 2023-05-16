import Die from './Die'
import './Dice.css'

export default function Dice({ dice })
{
    return (
        <div className='Dice'>
            {
                dice.map((die, i) => <Die key={i} val={die} />)
            }
        </div>
    )
}
