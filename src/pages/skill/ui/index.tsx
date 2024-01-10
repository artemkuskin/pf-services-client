import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import styles from './style.module.scss'
import { Image } from "../../../components/image"
import men from './../../../assets/images/Без названия.jpeg'
import { users } from "../../../mock"
import { UserInformation } from "../../../widgets/user-information"
import { IUser } from "../../../types"
import { ProgectsInformation } from "../../../widgets/progects-information"

export const Skill = () => {
    const { userId } = useParams()
    const [user, setUser] = useState<IUser | undefined>(undefined)

    useEffect(() => {
        const currentUser = users.find((item: any) => item.id == userId)
        if (currentUser) {
            setUser(currentUser);
        }
    }, [])


    return (
        <div className={styles.container}>
            <section className={styles.avatar_contant}>
                <div className={styles.avatar}>
                    <Image src={men} style={styles.image} alt="" />
                </div>
                <UserInformation user={user} />
            </section>
            <section className={styles.skill_contant}>
                <section className={styles.progects_title}>
                    <span>Название</span>
                    <span>Вход в проект</span>
                    <span>Выход из проекта</span>
                    <span>Технологии</span>
                </section>
                <ProgectsInformation user={user} />
                <div className={styles.skills}>
                    <section className={styles.skills_front}>

                    </section>
                    <section className={styles.skills_back}>

                    </section>
                </div>
            </section>
        </div>
    )
}