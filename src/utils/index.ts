import device from '../assets/images/device.svg'
import calendar from '../assets/images/calendar.svg'
import user from '../assets/images/user.svg'
import events from '../assets/images/events.svg'
import card from '../assets/images/card.svg'
import skill from '../assets/images/skill.svg'
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
export const colors = ['#ffd700', '#ff9900', '#a9ff00', '#00ff95', '#00c4ff', '#b400ff', '#ff00d4', '#e55d5d']

export const getcolors = () => {
    const char = Math.floor(Math.random() * (colors.length - 1))
    return colors[char]
}

export const isEmail = (email: string) => {
    const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    return pattern.test(email);
}

export const isPassword = (password: string) => {
    const pattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]$/;

    return pattern.test(password);
}