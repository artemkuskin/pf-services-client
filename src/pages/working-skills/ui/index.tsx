import { Link } from 'react-router-dom'
import { users } from '../../../mock'
import styles from './style.module.scss'
export const WorkingSkills = () => {
    return (
        <div className={styles.contant}>
            {
                users.map((user, index) => (
                    <div key={user.id} className={styles.working_skill}>
                        <Link to={`${user.id}`}>{index + 1}. {user.name}</Link>
                    </div>
                ))
            }
        </div>
    )
}