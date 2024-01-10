import { IUser } from '../../../types'
import styles from './style.module.scss'
export const UserInformation = ({ user }: { user: IUser | undefined }) => {

    return (
        <div className={styles.information}>
            <h3>Основная информация</h3>
            <span className={styles.inaformation_name}>{user?.name} {user?.birthday}</span>
            <span className={styles.inaformation_phone}>{user?.phone}</span>
            <span className={styles.inaformation_sity}>г.{user?.sity}</span>
            <span className={styles.inaformation_home_sity}>{user?.sityHome}</span>
            <span className={styles.inaformation_education}>{user?.education}</span>

        </div>
    )
}