import './Button.css'

export default function Button({ text = "Click me", handleClick })
{
    return (
        <button className="Button" onClick={handleClick}>{text}</button>
    )
}
