import { useState } from 'react'
import styles from './style.module.scss'
import { Input } from '../../../components/input'
import { Button } from '../../../components/button'
import { isEmail, isPassword } from '../../../utils'

export const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errorEmail, setErrorEmail] = useState('')
    const [errorPassword, setErrorPassword] = useState('')

    const handleChangeEmail = (text: string) => {
        setEmail(text)
    }

    const handleChangePassword = (text: string) => {
        setPassword(text)
    }


    const onSubmit = () => {
        setErrorEmail('')
        setErrorPassword('')
        if (email.trim() === '') {
            return setErrorEmail('Email is empty')
        } else if (!isEmail(email)) {
            return setErrorEmail('Email is require')
        }

        if (password.trim() === '') {
            return setErrorPassword('Password is empty')
        } else if (password.length < 8 || password.length > 15) {
            return setErrorPassword('Min password length 8, and the max 15')
        } else if (isPassword(password)) {
            return setErrorPassword('Password is require')
        }

        // if (!errorEmail && !errorPassword) {
        console.log('Congratilation');


        // }
    }
    return (
        <div className={styles.login}>
            <section className={styles.login_form}>
                <h3 className={styles.login_title}>Login</h3>
                <div className={styles.login_contant}>
                    <label className={styles.login_label}>
                        Email
                        <Input value={email} style={styles.login_input} onChange={handleChangeEmail} />
                        {errorEmail && <span className={styles.login_error}>{errorEmail}</span>}
                    </label>
                    <label className={styles.login_label}>
                        Password
                        <Input value={password} style={styles.login_input} onChange={handleChangePassword} />
                        {errorPassword && <span className={styles.login_error}>{errorPassword}</span>}
                    </label>
                </div>
                <div className={styles.login_buttons}>
                    <Button style={styles.login_button} handleClick={() => onSubmit()} text='Login' />
                </div>
            </section>
        </div>
    )
}