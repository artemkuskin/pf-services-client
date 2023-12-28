import styles from './style.module.scss'

interface IInput {
    style: string
    value: string
    onChange: (value: string) => void;
}

export const Input = ({ style, value, onChange }: IInput) => {
    return (

        <input
            value={value}
            onChange={(e) => onChange(e.target.value)}
            type={"text"}
            className={style}
        />

    )
}