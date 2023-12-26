export const Image = ({ src, style, alt }: { src: any, style: any, alt: string }) => {
    return (
        <img src={src} className={style} alt={alt} />
    )
}