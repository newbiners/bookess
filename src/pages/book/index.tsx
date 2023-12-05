import CommentInput from "../../components/commentInput";
import MessageComment from "../../components/messageComment";
import { useNavigate, useParams } from "react-router-dom";
import LayoutBackground from "../../components/layout/LayoutBackground";
import Controller from "./controller";
import { useEffect, useState } from "react";
import { API_URL } from "../api";
import loveIcon from '../../assets/love.svg';
const Books = () => {
    const [value, setValue] = useState<string>('')
    const { getDataBook,addLove, getData, data,loveAct, cekLoveAct, addComment,ViewComment, dataComment} = Controller();
    const { id } = useParams();
    const navigation = useNavigate();
  

   
    useEffect(() => {
        if (id) {
            getData(id);
        }
       
    }, [id])
console.log(id, "id")
    useEffect(() => {
        if(data){
            console.log(data.data.writer_name, "name writter")
            cekLoveAct(data.data._id)
            ViewComment(data.data._id)
        }
    },[data])

    console.log(dataComment, "data commnet")

    const buttonCek = async() => {
        // event.preventDefault();
       await addComment(data.data._id, value)
       await ViewComment(data.data._id)
    }
    return (
        <LayoutBackground>
            <div className="animated-object relative flex justify-center">
                <div className="flex flex-row p-7 bg-blue-gray-50 shadow-2xl w-[70%] items-center gap-3 rounded-xl">
                    <div>
                        <button onClick={()=>cekLoveAct(data.data._id)}>
                        <img
                            src={data && `${API_URL}/${data.data.image}`}
                            className="w-80"
                            />
                            </button>
                    </div>
                    <div>
                        <div className="flex justify-between">
                            <p className="text-3xl">{data && data.data.name_book}</p>
                            <button onClick={() => addLove(data.data._id)} className={loveAct ? "p-3 bg-red-500 h-11 w-11 flex justify-center items-center rounded-full" : "p-3 bg-blue-gray-400 h-11 w-11 flex justify-center items-center rounded-full"}>
                                <img
                                    src={loveIcon}
                                    className="h-7"
                                />
                            </button>
                        </div>
                        <p>{data && data.data.writer_name}</p>
                        <p className="text-end text-xl">sinopsis</p>
                        <p>{data && data.data.sinopsis}</p>
                        <button className="flex flex-row justify-end w-full" onClick={() => navigation(`/book-details/${data.data._id}`)}>
                            <div className="mt-5 bg-red-500 w-48 h-10 flex flex-col justify-center rounded-xl">
                                <p className="text-center text-slate-50">read now</p>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
            <div className="mt-28 ml-32">
                <p className="text-2xl font-bold">Review</p>
                <CommentInput getData={setValue} onClick={buttonCek}/>
                <div>
                    {dataComment ? dataComment.map((item: any, index: number) => (
                        <div key={index} className="animated-header">
                        <MessageComment name={item.user_name} commnet={item.comment} data={item.date}/>
                        </div>
                        ))
                        :
                        <p>not commnet</p>
                    }
                </div>
            </div>
            <div>
            </div>
        </LayoutBackground>
    )
}

export default Books;