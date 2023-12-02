import myImage from '../../assets/image.jpg';
import BookBar from "../../components/bookBar";
import BookBarTow from "../../components/bookBarTwo";
import LayoutBackground from "../../components/layout/LayoutBackground";
import { Carousel } from '@material-tailwind/react';
import { useParams } from 'react-router-dom';
import Controller from './controller';
import { useEffect } from 'react';
import { API_URL } from '../api';
import { useNavigate } from 'react-router-dom';
const BookWriter = () => {
    const navigation = useNavigate()
    const { getData, data, getDataByFilter, dataWriter } = Controller()
    const { id } = useParams()
    useEffect(() => {
        getData(id!);
        getDataByFilter(id!)
    }, [id])
    return (
        <LayoutBackground>
            <div className="flex flex-row bg-red-600 items-center text-white p-6" style={{ fontFamily: "Unbound-reguler" }}>
                <div className="w-60 h-60  rounded-full overflow-hidden bg-blue-gray-400 relative mr-5" key={data._id}>
                    <img
                        src={data ? `${API_URL}/${data.image}` : myImage}
                        className="h-full absolut top-0"
                    />
                </div>
                <div className="w-[50%]">
                    <p className='text-2xl'>{data ? data.writer_name : 'not weritter'}</p>
                    <p>{data ? data.description : 'description'}</p>
                </div>
            </div>
            <div className="flex justify-center mt-16 ">
                <div className="rounded-xl w-[70%] h-96 relative bg-[#EEF5FF] overflow-hidden shadow-2xl">
                    <div className="h-96 w-80 absolute bg-deep-orange-700 blur-2xl left-0 bottom-[-10rem] opacity-20" style={{ borderRadius: "52% 48% 51% 49% / 28% 63% 37% 72% " }} />
                    <div className="h-96 w-80 absolute bg-[#7071E8] blur-2xl right-0 top-[-10rem] opacity-40" style={{ borderRadius: "52% 48% 51% 49% / 28% 63% 37% 72% " }} />
                    <Carousel transition={{ duration: 2 }}>
                        {dataWriter ? dataWriter.slice(0, 3).map((item: any) => (
                                <section className="flex-shrink-0 w-[100%] h-[100%] mr-6">
                                    <BookBar name_book={item.name_book} sinopsis={item.sinopsis} name_writer={item.writer_name} image={item.image} key={item._id} id={item._id}/>
                                </section>
                            ))
                            :
                            <p>data tidak ada</p>
                        }
                    </Carousel>
                </div>
            </div>
            <div className="flex justify-center ml-20 mt-10">
                <div className="grid grid-cols-3 gap-10 w-[95%]">
                {dataWriter ? dataWriter.slice(3, dataWriter.length).map((item: any) => (
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
            </div>
        </LayoutBackground>
    )
}

export default BookWriter;