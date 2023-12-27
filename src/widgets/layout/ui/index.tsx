import { ReactNode } from "react";
import { Header } from "../../header"
import { LeftSideBar } from "../../left-side-bar"
import { Footer } from "../../footer";
import styles from './style.module.scss'
interface MyComponentProps {
    children: ReactNode;
}


export const Layout = ({ children }: MyComponentProps) => {
    return (
        <>
            <Header />

            <LeftSideBar />
            <div className={styles.contant}>

                {children}
            </div>
            <Footer />
        </>
    )
}