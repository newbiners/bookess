import { Link } from "react-router-dom";
import { IoIosMenu } from "react-icons/io";
const Header = () => {
    return(
        <header className="flex justify-between items-center absolute w-full px-14 py-2 z-10">
            <h1 className="text-3xl font-extrabold">Boo<span className="text-yellow-400">k</span>ess</h1>
            <nav className="flex gap-6 text-2xl">
                <Link to="/">Home</Link>
                <Link to="/book">Books</Link>
                <Link to="/collection">Collection</Link>
            </nav>
            <IoIosMenu className="text-3xl"/>
        </header>
    )
}

export default Header;