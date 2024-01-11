import { ISkills } from "../../../types"
import styles from './style.module.scss'
export const UserSkill = ({ skills, style, title }: { skills: string[] | undefined, style: string, title: string }) => {

    return (
        <section className={style}>
            <h3>{title}</h3>
            <div className={styles.skills_container}>
                {
                    skills?.map((skill) => (

                        <p key={skill} title={skill} className={styles.skill}>{skill}</p>
                    ))
                }
            </div>
        </section>
    )
}