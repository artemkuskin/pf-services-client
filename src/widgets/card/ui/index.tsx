import styles from './style.module.scss'

interface ICard {
    id: number
    title: string
    discription: string
    creator: string
}

export const Card = ({ card }: { card: ICard }) => {
    return (
        <div className={styles.card}>
            <div className={styles.title_contant}>
                <div className={styles.pin}></div>
                <h5 className={styles.card_title}>{card.title}</h5>
                <div className={styles.pin}></div>
            </div>
            <p className={styles.card_discription}>{card.discription}</p>
            <p className={styles.card_creator}>Creator:<span>{card.creator}</span></p>
        </div>
    )
}
