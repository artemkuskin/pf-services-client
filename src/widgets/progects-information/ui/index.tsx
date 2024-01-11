import { IUser } from '../../../types'
import styles from './style.module.scss'
export const ProgectsInformation = ({ user }: { user: IUser | undefined }) => {


    return (
        <div className={styles.progects}>
            {
                user?.progects.map((progect) => (
                    <section key={progect.name} className={styles.progect}>
                        <span className={styles.progects_title_name}>{progect.name}</span>
                        <span className={styles.progects_title_name}>{progect.start}-{progect.end}</span>
                        <div className={styles.tehnology}>
                            {
                                progect.stack.map((tehnology) => (
                                    <span key={tehnology}>
                                        {tehnology}
                                    </span>
                                ))
                            }
                        </div>
                    </section>
                ))
            }
        </div>
    )
}