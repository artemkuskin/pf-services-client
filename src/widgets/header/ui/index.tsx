import { CustomInput } from '../../../shared/ui/input'
import styles from './style.module.scss'
import userLogo from '../../../assets/images/user.svg'
import { Image } from '../../../shared/ui/image'
import { Link } from 'react-router-dom'

export const Header = () => {
    return (
        <header className={styles.header}>
            <span className={styles.logo_title}>
                P.F. Services
            </span>
            <CustomInput />
            <Link to={'/my-profile'}>

                <Image src={userLogo} alt='logo' style={styles.logoImage} />
            </Link>
        </header>
    )
}