import { useState } from 'react'
import { Button } from '../../../components/button'
import { wishCard } from '../../../mock'
import { Card } from '../../../widgets/card'
import styles from './style.module.scss'
import { WishCardModal } from '../../../widgets/wish-card-modal'
import { title } from 'process'
export const WishCard = () => {
    const [isOpenModal, setIsOpenModal] = useState(false)
    const [infoWishCard, setInfoWishCard] = useState({ title: '', discription: '', id: 33, creator: 'Pavel' })
    const [cards, setCards] = useState(wishCard)

    const handleOpenModal = () => {
        setInfoWishCard({
            ...infoWishCard,
            title: '',
            discription: ''
        });
        setIsOpenModal(true)
    }

    const handleCloseModal = () => {
        setIsOpenModal(false)
    }

    const changeTitle = (text: string) => {
        setInfoWishCard({
            ...infoWishCard,
            title: text
        });
    }

    const changeDescription = (text: string) => {
        setInfoWishCard({
            ...infoWishCard,
            discription: text
        });
    }

    const createWishCard = () => {
        setCards(prevCards => [
            ...prevCards,
            infoWishCard,
        ]);
        setIsOpenModal(false)
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
            <WishCardModal changeTitle={changeTitle} changeDescription={changeDescription} createWishCard={createWishCard} handleCloseModal={handleCloseModal} isOpen={isOpenModal} infoWishCard={infoWishCard} />
        </>
    )
}