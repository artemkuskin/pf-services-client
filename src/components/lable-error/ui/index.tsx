import styles from './style.module.scss'
export const LableInput = ({ errorText }: { errorText: string }) => {
    return (
        <span className={styles.login_error}>{errorText}</span>
    )
}