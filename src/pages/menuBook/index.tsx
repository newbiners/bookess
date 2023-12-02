import BookBar from "../../components/bookBar";
import BookBarTow from "../../components/bookBarTwo";
import FilterBooks from "../../components/filterBooks";
import SearchBar from "../../components/searchBar";
import WriterBar from "../../components/writerBar";
import LayoutHeaderFooter from "../../components/layout/layoutHeaderFooter";
import { Carousel } from "@material-tailwind/react";
import myImage from '../../assets/psychology_of_money.jpg';
import { useEffect, useState } from "react";
import LayoutBackground from "../../components/layout/LayoutBackground";
import Controller from "./controller";
import { API_URL } from "../api";
import { useNavigate } from "react-router-dom";
import InputItem from "../../components/inputItem";
const MenuBooks = () => {
    const navigation = useNavigate();
    const [posisi, setPosisi] = useState<number>(0);
    const [marginTop, setMarginTop] = useState<number>(-5)
    const [position, setPosition] = useState<number>(0)
    const [search, setSearch] = useState<string>('')
    const { getData, data, writer, getDataWriter, getSearch, book } = Controller()
    useEffect(() => {
        getData();
        getDataWriter()
    }, [])
    useEffect(() => {
        if (posisi > 530 && posisi < 1500) {
            if (posisi > position && marginTop !== 85) {
                setMarginTop(marginTop + 3)
            } else if (marginTop !== -5) {
                setMarginTop(marginTop - 3)
            }

        }
        setPosition(posisi)
    }, [posisi])
    // const handleChange = (event: any) => {
    //     const newValue = event.target.value;
    //     setSearch(newValue);
    //     console.log(newValue)
    //     // onChange(newValue);
    //   };
    useEffect(() => {
        getSearch(search)
    }, [search])
    return (
        <div>
            <LayoutBackground setPosition={setPosisi}>
                <form >
                    <SearchBar setChange={setSearch} />
                    <div className="flex justify-center mt-7 ">
                        {data && book.length !== data.length && book.length !== 0 &&
                            <div className=" w-[90%] grid grid-cols-3 p-7 bg-blue-gray-50 gap-4 rounded-2xl">
                            {book.length !== data.length && book.map((item: any) => (
                                <BookBarTow
                                    key={item._id}  // Tambahkan key untuk setiap iterasi pada map
                                    image={item.image}
                                    name_book={item.name_book}
                                    name_witer={item.writer_name}  // Perbaiki typo pada prop name_writer
                                    onClick={() => navigation(`/books/${item._id}`)}
                                    amount_love={item.amount_love}
                                    amount_user={item.amount_user}
                                    />
                                    ))}
                        </div>
                                }
                    </div>
                </form>
                <div className="flex justify-center mt-16 ">
                    <div className="animated-object rounded-xl w-[70%] h-96 relative bg-[#EEF5FF] overflow-hidden shadow-2xl">
                        <div className="h-96 w-80 absolute bg-deep-orange-700 blur-2xl left-0 bottom-[-10rem] opacity-20" style={{ borderRadius: "52% 48% 51% 49% / 28% 63% 37% 72% " }} />
                        <div className="h-96 w-80 absolute bg-[#7071E8] blur-2xl right-0 top-[-10rem] opacity-40" style={{ borderRadius: "52% 48% 51% 49% / 28% 63% 37% 72% " }} />
                        <Carousel transition={{ duration: 2 }}>
                            {data ? data.slice(0, 3).map((item: any) => (
                                <section className="flex-shrink-0 w-[100%] h-[100%] mr-6">
                                    <BookBar name_book={item.name_book} sinopsis={item.sinopsis} name_writer={item.writer_name} image={item.image} key={item._id} id={item._id} />
                                </section>
                            )) : <p>not data</p>}
                        </Carousel>
                    </div>
                </div>
                <p className="mt-14 ml-24  text-4xl text-red-600" style={{ fontFamily: "Unbound-medium" }}>Books Populer</p>
                <div className="flex justify-around ml-20 mt-10 gap-11">
                    <div className="grid grid-cols-2 gap-10 w-[55%] ">
                        {data ? data.slice(3, 15).map((item: any) => (
                            <BookBarTow
                                key={item._id}  // Tambahkan key untuk setiap iterasi pada map
                                image={item.image}
                                name_book={item.name_book}
                                name_witer={item.writer_name}  // Perbaiki typo pada prop name_writer
                                onClick={() => navigation(`/books/${item._id}`)}
                                amount_love={item.amount_love}
                                amount_user={item.amount_user}
                            />
                        )) : <p>data</p>}
                    </div>
                    <div className=" right-0 relative  w-[30%]">
                        <div className="absolute right-0" style={{ top: marginTop }}>
                            {data && data.slice(15, 18).map((item: any) => (
                                <div key={item._id} className="mb-5">
                                    <button onClick={() => navigation(`/books/${item._id}`)} className="h-72 w-44 overflow-hidden  rounded-xl shadow-xl">
                                        <img
                                            src={`${API_URL}/${item.image}`}
                                            className="h-full"
                                        />
                                    </button>
                                </div>
                            ))}
                        </div>
                        <div className="absolute left-0" style={{ bottom: marginTop }}>
                            {data && data.slice(18, 21).map((item: any) => (
                                <div key={item._id} className="mb-5">
                                    <button onClick={() => navigation(`/books/${item._id}`)} className="h-72 w-44 overflow-hidden  rounded-xl shadow-xl">
                                        <img
                                            src={`${API_URL}/${item.image}`}
                                            className="h-full"
                                        />
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="mt-20">
                    <p className="ml-24 text-4xl text-red-600 mt-24" style={{ fontFamily: "Unbound-medium" }}>Top Writer</p>
                </div>
                <div className="flex justify-center">
                    <div className="flex overflow-x-auto w-[98%] py-6 items-center gap-5">
                        {writer && writer.map((item: any) => (
                            <WriterBar
                                key={item._id}
                                image={item.image}
                                writer_name={item.writer_name}
                                id={item._id}
                            />
                        ))}
                    </div>
                </div>
            </LayoutBackground>
        </div>
    );
}

export default MenuBooks;