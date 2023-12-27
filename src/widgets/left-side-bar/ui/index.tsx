import { sideMenu } from '../../../utils'
import styles from './style.module.scss'
import { Image } from '../../../components/image'
import { Link, NavLink } from 'react-router-dom'
export const LeftSideBar = () => {

    return (
        <section className={styles.side_bar}>
            {
                sideMenu.map(item => (
                    <NavLink to={item.href} className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : styles.side_bar_link
                    } key={item.name}>
                        <Image src={item.image} alt={item.name} style={styles.side_bar_image} />
                        <span className={styles.side_bar_name}>{item.name}</span>
                    </NavLink >
                ))
            }
        </section>
    )
}