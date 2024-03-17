import Header from "./header"
import Footer from "./footer"
import { Children } from "react"
const LayoutClient = ({children}) => {
    return(
        <main className="flex flex-col justify-between  w-full">
        <Header/>
        {children}
        <Footer/>
        </main>
    )
}

export default LayoutClient;