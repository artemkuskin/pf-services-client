import device from '../../assets/images/device.svg'
import calendar from '../../assets/images/calendar.svg'
import user from '../../assets/images/user.svg'
import events from '../../assets/images/events.svg'
import card from '../../assets/images/card.svg'
import skill from '../../assets/images/skill.svg'
export const sideMenu = [
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