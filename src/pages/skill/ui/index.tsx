import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import styles from './style.module.scss'
import { Image } from "../../../components/image"
import men from './../../../assets/images/Без названия.jpeg'
import { users } from "../../../mock"
import { UserInformation } from "../../../widgets/user-information"
import { IUser } from "../../../types"
import { ProgectsInformation } from "../../../widgets/progects-information"
import { UserSkill } from "../../../widgets/user-skill"

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
                    <span className={styles.progects_title_name}>Название</span>
                    <span className={styles.progects_title_name}>Вход в проект</span>

                    <span className={styles.progects_title_name}>Технологии</span>
                </section>
                <ProgectsInformation user={user} />
                <div className={styles.skills}>
                    <UserSkill title={'Frontend'} skills={user?.skills.front} style={styles.skills_front} />
                    <UserSkill title={'Backend'} skills={user?.skills.back} style={styles.skills_back} />
                </div>
            </section>
        </div>
    )
}
