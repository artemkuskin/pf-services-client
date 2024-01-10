import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import styles from './style.module.scss'
import { Image } from "../../../components/image"
import men from './../../../assets/images/Без названия.jpeg'
import { users } from "../../../mock"
import { UserInformation } from "../../../widgets/user-information"
import { IUser } from "../../../types"

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

            </section>
        </div>
    )
}