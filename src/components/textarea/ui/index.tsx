interface ITextarea {
    style: string
    value: string
    onChange: (value: string) => void;
}
export const Textarea = ({ value, onChange, style }: ITextarea) => {
    return (
        <textarea
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className={style}
        ></textarea>
    )
}