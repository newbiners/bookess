import BookCover from '../assets/psychology_of_money.jpg';
import { useNavigate } from 'react-router-dom';
import BtnAction from './btnAction';
import { API_URL } from '../pages/api';
interface IBookBar {
    name_book: string,
    name_writer: string,
    sinopsis: string,
    image: string,
    id: string
}
const BookBar:React.FC<IBookBar> = ({name_book, name_writer, sinopsis,image, id}) => {
    const navigation = useNavigate();
    return(
        <div className="flex flex-shrink-0 overflow-hidden flex-row justify-between relative bg-slate-300 shadow-2xl h-[100%] items-center w-[100%]  gap-1 rounded-xl">
           
            <div className="w-[70%] p-7">
                <h2 className='text-3xl' style={{fontFamily: 'Unbound-medium'}}>{name_book}</h2>
                <p className='text-lg mb-2' style={{fontFamily: 'Unbound-light'}}>{name_writer}</p>
                <p className='text-sm' style={{fontFamily: 'Unbound-light'}}>{sinopsis}</p>
                <div className=' mt-5'>
                    <BtnAction title='read now' color='red' typeBtn='solid' onClick={()=> navigation(`/books/${id}`)}/>
                </div>
            </div>
            <div className=" h-80 w-[20%] rounded-xl overflow-hidden shadow-2xl absolute right-[-6rem] transition-all ease-in-out duration-700 hover:right-3">
            <img src={image && `${API_URL}/${image}`}
                    alt="Deskripsi gambar"
                    className='w-[100%] h-[100%]'/>
            </div>
        </div>
    )
}

export default BookBar