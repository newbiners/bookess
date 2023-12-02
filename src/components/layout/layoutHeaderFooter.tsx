import Footer from "../footer"
import Header from "../header"
import LayoutBackground from "./LayoutBackground"
import React, { ReactNode } from "react";

interface LayoutBackgroundProps {
    children?: ReactNode;
}
const LayoutHeaderFooter = ({children}: LayoutBackgroundProps) => {
    return(
        <LayoutBackground>
            <Header/>
            <div className="z-40">
            {children}
            </div>
            <Footer/>
        </LayoutBackground>
    )
}

export default LayoutHeaderFooter;