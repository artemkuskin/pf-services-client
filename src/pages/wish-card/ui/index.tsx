import { wishCard } from '../../../mock'
import { Card } from '../../../widgets/card'
import styles from './style.module.scss'
export const WishCard = () => {


    return (
        <>
            <div className={styles.dashboard}>
                {
                    wishCard.map((card) => (
                        <Card card={card} />
                    ))
                }
            </div>
        </>
    )
}