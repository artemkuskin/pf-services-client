import styles from './style.module.scss'
import searchLogo from '../../../assets/images/search.svg'
import { Image } from '../../image'
export const CustomInput = () => {
    return (
        <section className={styles.custom_input_container}>
            <Image src={searchLogo} alt='search' style={styles.search_logo} />
            <input className={styles.custom_input} />
        </section>
    )
}