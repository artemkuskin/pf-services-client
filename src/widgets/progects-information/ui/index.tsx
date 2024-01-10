import { IUser } from '../../../types'
import styles from './style.module.scss'
export const ProgectsInformation = ({ user }: { user: IUser | undefined }) => {


    return (
        <div className={styles.progects}>
            {
                user?.progects.map((progect) => (
                    <section className={styles.progect}>
                        <span>{progect.name}</span>
                        <span>{progect.start}</span>
                        <span>{progect.end}</span>
                        <div className={styles.tehnology}>
                            {
                                progect.stack.map((tehnology) => (
                                    <span>
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