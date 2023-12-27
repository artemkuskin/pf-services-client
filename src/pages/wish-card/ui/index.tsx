import { wishCard } from '../../../mock'
import { getcolors } from '../../../utils'
import styles from './style.module.scss'
export const WishCard = () => {


    return (
        <div className={styles.dashboard}>
            {
                wishCard.map((card) => (
                    <div key={card.id} style={{ backgroundColor: getcolors() }} className={styles.card}>
                        <div className={styles.title_contant}>
                            <div className={styles.pin}></div>
                            <h5 className={styles.catd_title}>{card.title}</h5>
                            <div className={styles.pin}></div>
                        </div>
                        <p className={styles.card_discription}>{card.discription}</p>
                        <p className={styles.card_creator}>Creator:<span>{card.creator}</span></p>
                    </div>
                ))
            }
        </div>
    )
}