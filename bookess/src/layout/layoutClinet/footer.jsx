import IgIcon from '../../assets/icon/ig.svg'
import { IoLogoLinkedin,IoLogoInstagram, IoLogoGithub } from 'react-icons/io';
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <footer>
            <main className='flex justify-between px-14 py-4 bg-[#262525]'>
                <section>
                    <h1 className="text-2xl font-extrabold mb-10">Boo<span className="text-yellow-400">k</span>ess</h1>
                    <nav className="flex gap-3 flex-col text-xl">
                        <Link to="/">Home</Link>
                        <Link to="/book">Books</Link>
                        <Link to="/collection">Collection</Link>
                    </nav>
                </section>
                <nav className='flex self-end text-5xl'>
                    <IoLogoGithub/>
                    <IoLogoInstagram/>
                    <IoLogoLinkedin/>
                </nav>
            </main>
        </footer>
    )
}

export default Footer;