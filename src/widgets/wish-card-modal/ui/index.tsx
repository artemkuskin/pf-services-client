import { Button } from '../../../components/button'
import { Input } from '../../../components/input'
import { Textarea } from '../../../components/textarea'

import styles from './style.module.scss'
export const WishCardModal = ({ changeTitle, changeDescription, createWishCard, handleCloseModal, isOpen, infoWishCard }: any) => {

    return (
        <>
            {isOpen &&
                <div className={styles.background_modal}>
                    <div className={styles.modal}>
                        <Button text='X' style={styles.close_button} handleClick={handleCloseModal} />
                        <div className={styles.modal_contant}>
                            <h4 className={styles.modal_title}>Create wish card </h4>
                            <section className={styles.inputs}>
                                <label>
                                    Title:
                                    <Input style={styles.modal_input} value={infoWishCard.title} onChange={changeTitle} />
                                </label>
                                <label>
                                    Description:
                                    <Textarea style={styles.modal_text_aria}
                                        value={infoWishCard.description}
                                        onChange={changeDescription} />
                                </label>
                            </section>
                            <Button text='Create' handleClick={createWishCard} style={styles.modal_button} />
                        </div>
                    </div>
                </div>
            }
        </>
    )
}