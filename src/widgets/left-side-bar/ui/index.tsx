import device from '../../../assets/images/device.svg'
import calendar from '../../../assets/images/calendar.svg'
import user from '../../../assets/images/user.svg'
import events from '../../../assets/images/events.svg'
import card from '../../../assets/images/card.svg'
import skill from '../../../assets/images/skill.svg'
import styles from './style.module.scss'
import { Image } from '../../../shared/ui/image'
import { Link } from 'react-router-dom'
export const LeftSideBar = () => {

    const sideMenu = [
        {
            name: 'Profiles',
            href: '/profiles',
            image: user
        },
        {
            name: 'Events',
            href: '/events',
            image: events
        },
        {
            name: 'Remote Office',
            href: '/remote-office',
            image: calendar
        },
        {
            name: 'Wish Card',
            href: '/wish-card',
            image: card
        },
        {
            name: 'Working Skills',
            href: '/working-skills',
            image: skill
        },
        {
            name: 'Working Devices',
            href: '/working-devices',
            image: device
        }
    ]
    return (
        <section className={styles.side_bar}>
            {
                sideMenu.map(item => (
                    <a href={item.href} className={styles.side_bar_link} key={item.name}>
                        <Image src={item.image} alt={item.name} style={styles.side_bar_image} />
                        <span className={styles.side_bar_name}>{item.name}</span>
                    </a >
                ))
            }
        </section>
    )
}