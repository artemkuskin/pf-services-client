import { useState } from 'react'
import { Button } from '../../../components/button'
import { wishCard } from '../../../mock'
import { Card } from '../../../widgets/card'
import styles from './style.module.scss'
import { WishCardModal } from '../../../widgets/wish-card-modal'
export const WishCard = () => {
    const [isOpenModal, setIsOpenModal] = useState(false)
    const [infoWishCard, setInfoWishCard] = useState({ title: '', description: '', id: 33, creator: 'Pavel' })
    const [cards, setCards] = useState(wishCard)
    const [errorDescription, setErrorDescription] = useState('')
    const [errorTitle, setErrorTitle] = useState('')

    const handleOpenModal = () => {
        setInfoWishCard({
            ...infoWishCard,
            title: '',
            description: ''
        });
        setIsOpenModal(true)
    }

    const handleCloseModal = () => {
        setErrorTitle('')
        setErrorDescription('')
        setIsOpenModal(false)
    }

    const changeTitle = (text: string) => {
        setErrorTitle('')
        setInfoWishCard({
            ...infoWishCard,
            title: text
        });
    }

    const changeDescription = (text: string) => {
        setErrorDescription('')
        setInfoWishCard({
            ...infoWishCard,
            description: text
        });
    }

    const createWishCard = () => {
        setErrorTitle('')
        setErrorDescription('')

        if (infoWishCard.title.trim() === '') {
            setErrorTitle('Title is empty')
        }

        if (infoWishCard.description.trim() === '') {
            setErrorDescription('Description is empty')
        } else if (infoWishCard.description.length < 10) {
            setErrorDescription('Min password length 10')
        }

        // setCards(prevCards => [
        //     ...prevCards,
        //     infoWishCard,
        // ]);
        // setIsOpenModal(false)
    }

    return (
        <>
            <Button text='Create card' style={styles.create_card_button} handleClick={handleOpenModal} />
            <div className={styles.dashboard}>
                {
                    cards.map((card) => (
                        <Card key={card.id} card={card} />
                    ))
                }
            </div>
            <WishCardModal errorDescription={errorDescription} errorTitle={errorTitle} changeTitle={changeTitle} changeDescription={changeDescription} createWishCard={createWishCard} handleCloseModal={handleCloseModal} isOpen={isOpenModal} infoWishCard={infoWishCard} />
        </>
    )
}