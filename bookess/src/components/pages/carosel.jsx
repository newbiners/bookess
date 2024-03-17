import BookScreen from "../3d/bookScreen"
import { Indicator } from "../elements";

const Carosel = () => {
    return (
        <section className="h-full flex w-full   items-center justify-between ">
            <div className="w-[40%] z-10 px-12">
                <p className="text-4xl font-bold">01</p>
                <main className="h-[1px] w-full bg-white" />
                <h1 className="text-5xl font-extrabold mb-3">The Psychology of Money</h1>
                <p className="text-lg mb-6">Rp. 30.000,00</p>
                <button className="text-xl px-3 py-1 border-[1px] rounded-md border-white">Buy Now</button>
            </div>
            <main className="h-screen  w-full cursor-pointer absolute ">
                <BookScreen />
            </main>
            <main className="w-[30%] mr-7">
                <p className="text-xl mb-5">Lorem Ipsum is simply dummy text of the printing and  typesetting industry. Lorem Ipsum has been the industry's standard dummy  text ever since the 1500s, when an unknown printer took a galley of  type and scrambled it to make a type specimen book.</p>
                <Indicator/>
            </main>
            <p className="absolute text-9xl font-extrabold -z-10 w-full text-center bottom-9">MORGAN HOUSEL</p>
        </section>
    )
}

export default Carosel;