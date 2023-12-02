import LayoutBackground from "../../components/layout/LayoutBackground";
import notFound from '../../assets/Page_not_found.png';
import BtnAction from "../../components/btnAction";
import { useNavigate } from "react-router-dom";
import Controller from "./controller";
import { useEffect } from "react";
import BookBarTow from "../../components/bookBarTwo";
const History = () => {
    const { getHistory, data } = Controller()
    const navigate = useNavigate()

    useEffect(() => {
        getHistory();
    }, [])
    return (
        <LayoutBackground>
            <div className="h-[100vh]">
                <div className="mx-9 mt-10  grid grid-cols-3 animated-header">
                    {data.length !== 0 ? data.map((item: any) => (
                        <BookBarTow
                            key={item._id}  // Tambahkan key untuk setiap iterasi pada map
                            image={item.image}
                            name_book={item.name_book}
                            name_witer={item.writer_name}  // Perbaiki typo pada prop name_writer
                            onClick={() => navigate(`/books/${item._id}`)}
                            amount_love={item.amount_love}
                            amount_user={item.amount_user}
                        />
                    )) : <div className="flex flex-col justify-center items-center" style={{ fontFamily: "Unbound-reguler" }}>
                        <img
                            src={notFound}
                            className="h-96 w-96"
                        />
                        <p className="text-2xl mb-8">You have Login</p>
                        <BtnAction color="red" typeBtn="solid" title="login" onClick={() => navigate('/')} />
                    </div>}
                </div>
            </div>
        </LayoutBackground>
    )
}

export default History;