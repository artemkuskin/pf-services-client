import { NavLink } from 'react-router-dom'
import { sideMenu } from '../../../shared/utils'
import styles from './style.module.scss'
import { Image } from '../../../shared/ui/image'
export const Footer = () => {
    return (
        <footer className={styles.footer}>
            {
                sideMenu.map(item => (
                    <NavLink to={item.href} className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active_footer" : styles.footer_link
                    } key={item.name}>
                        <Image src={item.image} alt={item.name} style={styles.footer_image} />
                    </NavLink >
                ))
            }
        </footer>
    )
}