import Die from './Die'
import './Dice.css'

export default function Dice({ dice })
{
    return (
        <div className='Dice'>
            {
                dice.map(die => <Die val={die} />)
            }
        </div>
    )
}
