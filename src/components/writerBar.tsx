import image from '../assets/image.jpg'
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../pages/api';

interface IWriter {
    writer_name: string,
    image: string,
    id: string
}

const WriterBar:React.FC<IWriter> = ({writer_name, image, id}) => {
    const navigation = useNavigate()
    return (
        <button onClick={()=> navigation(`/writers/${id}`)} className="bg-red-500 shadow-2xl flex-shrink-0  flex flex-row p-2 items-center gap-3 w-64 rounded-full">
            <div className='h-20 w-20 rounded-full overflow-hidden'>
                <img src={image &&`${API_URL}/${image}`} className='h-20 rounded-full' />
            </div>
            <div>
                <p className='text-white'>{writer_name}</p>
            </div>
        </button>
    )
}

export default WriterBar;