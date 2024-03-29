export interface IUser {
    id: number
    name: string
    phone: number
    education: string
    sity: string
    sityHome: string
    birthday: string
    image: string | undefined
    progects: IProgects[]
    skills: ISkills
}

export interface IProgects {
    name: string
    start: string
    end: string
    stack: string[]
}

export interface ISkills {
    back: string[]
    front: string[]
}