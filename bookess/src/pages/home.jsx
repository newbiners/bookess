import LayoutClient from "../layout/layoutClinet";
import { Carosel } from "../components/pages";
const Home = () => {
    return (
        <LayoutClient>
            <main className="h-screen">
                <Carosel />
            </main>
        </LayoutClient>
    )
}

export default Home;