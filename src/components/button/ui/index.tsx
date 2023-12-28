
interface IButton {
    text: string
    handleClick: any
    style: string
}
export const Button = ({ text, handleClick, style }: IButton) => {
    return (
        <button className={style} onClick={handleClick} >
            {text}
        </button>
    )
}