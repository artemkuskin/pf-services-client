import { ReactNode } from "react";
import { Header } from "../../../widgets/header"
import { LeftSideBar } from "../../../widgets/left-side-bar"

interface MyComponentProps {
    children: ReactNode;
}


export const Layout = ({ children }: MyComponentProps) => {
    return (
        <>
            <Header />

            <LeftSideBar />
            <div className="contant">

                {children}
            </div>
        </>
    )
}