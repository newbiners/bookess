import BookCover from '../assets/psychology_of_money.jpg';
import Love from '../assets/love.svg'
import person from '../assets/person.svg'
import { API_URL } from '../pages/api';
interface IBookBar {
    image: string,
    name_book: string,
    name_witer: string,
    onClick?: () => void
    amount_love: number,
    amount_user: number
}

const BookBarTow:React.FC<IBookBar> = ({image, name_book, name_witer, onClick, amount_love, amount_user}) => {
    return (
        <button className='w-80 bg-blue-gray-50 rounded-xl flex flex-row items-center shadow-2xl' onClick={onClick}>
            <div className='flex justify-center m-2 rounded-xl w-[25%] h-[90%] overflow-hidden bg-blue-gray-100'>
                <img src={image ? `${API_URL}/${image}`: BookCover}
                    className="w-full h-full"
                />
            </div>
            <div>
                <div>
                    <p className='text-sm font-bold text-gray-800 text-left' style={{ fontFamily: "Unbound-medium" }}>{name_book}</p>
                    <p className='text-gray-600 text-sm text-left' style={{ fontFamily: "Unbound-light" }}>{name_witer}</p>
                </div>
                <div>
                    <div className='flex flex-row gap-4 mt-2'>
                        <div className='flex flex-row gap-2 items-center'>
                            <img
                                src={Love}
                                className='h-3 w-3'
                            />
                            <p>{amount_love}</p>
                        </div>
                        <div className='flex flex-row gap-2 items-center'>
                            <img
                                src={person}
                                className='h-3 w-3'
                            />
                            <p>{amount_user}</p>
                        </div>
                    </div>
                </div>
            </div>
        </button>
    )
}

export default BookBarTow;