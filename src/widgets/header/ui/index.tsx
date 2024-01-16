import { CustomInput } from '../../../components/custom-input'
import styles from './style.module.scss'
import userLogo from '../../../assets/images/user.svg'
import exitLogo from '../../../assets/images/exit.svg'
import { Image } from '../../../components/image'
import { Link } from 'react-router-dom'
import { ProfilePopup } from '../../profile-popup'
import { useState } from 'react'

export const Header = () => {

    const [isOpen, setIsOPen] = useState(false)

    const openHandle = () => {
        setIsOPen(!isOpen)
    }


    return (
        <header className={styles.header}>
            <span className={styles.logo_title}>
                P.F. Services
            </span>
            <CustomInput />
            <div onClick={openHandle}>
                <Image src={userLogo} alt='logo' style={styles.logoImage} />
            </div>
            <ProfilePopup isOpen={isOpen} setIsOpen={setIsOPen} />

        </header>
    )
}