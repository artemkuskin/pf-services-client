import { Link } from 'react-router-dom'
import styles from './style.module.scss'
import { Image } from '../../../components/image'
import userLogo from '../../../assets/images/user.svg'
import exitLogo from '../../../assets/images/exit.svg'


interface IProps {
    isOpen: boolean
    setIsOpen: any
}

export const ProfilePopup = ({ isOpen, setIsOpen }: IProps) => {
    return (
        isOpen
            ?
            <div className={`${styles.profile_menu} ${isOpen ? styles.show : ''}`}>
                <section onClick={() => setIsOpen(false)} className={styles.profile_block}>
                    <Link className={styles.profile_block_container} to='/my-profile'>
                        <Image src={userLogo} alt='' style={styles.profile_menu_logoImage} />
                        <section className={styles.profile_menu_name_block}>
                            <p className={styles.profile_menu_name}>{'Artem Kuskin'}</p>
                            <p className={styles.profile_menu_email}>{'artemkuskin7@gmail.com'}</p>
                        </section>
                    </Link>
                    <Link onClick={() => setIsOpen(false)} className={styles.exit_contant} to={'/login'}>
                        <Image src={exitLogo} alt='' style={styles.profile_menu_exitImage} />
                        <span>Log Out</span>
                    </Link>
                </section>
            </div>
            :
            <></>



    )
}