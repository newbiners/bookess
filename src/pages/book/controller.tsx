import { useState, useRef } from "react"
import axios from "axios";
import { API_URL,API_dev } from "../api";
const Controller = () => {
    const [data, setData] = useState<any>();
    const [loveAct, setLoveAct] = useState<Boolean>(false)
    const [dataComment, setDataComment] = useState<any>();
   const [dataBook, setDataBook] = useState<any>([]);
    const prevIdRef = useRef<string | null>(null);
    const getData = async (bookId: string) => {
        const token = localStorage.getItem('token');
        try {
            if (bookId && bookId !== prevIdRef.current) {
                prevIdRef.current = bookId;
                const { data } = await axios.get(API_URL + "/books/" + bookId, { headers: { Authorization: token } });
                setData(data);
            }
        } catch (error) {
            console.log(error);
        }
    };

    const addLove = async (id: string) => {

        try {
            console.log(id, "id");
            const token = localStorage.getItem('token');

            if (id && token) {
                if (!loveAct) {
                    console.log(id, "id")
                    const { data } = await axios.post(
                        API_URL + '/love-books',
                        { book_id: id },
                        { headers: { Authorization: token } }
                    );
                    console.log(data)
                    setLoveAct(true)
                } else {
                    await axios.delete(
                        API_URL + '/love-books/' + id,
                        { headers: { Authorization: token } }
                    );
                    setLoveAct(false)
                }
            }
        } catch (error) {
            console.error(error);
            // Handle the error, e.g., show an error message to the user
        }
    };

    const cekLoveAct = async (id: string) => {
        const token = localStorage.getItem('token');
        try {
            const data = await axios.get(
                API_URL + '/love-books/' + id,
                { headers: { Authorization: token } }
            );
            // console.log(data.data.data)
            console.log(data.data.data, "data love")
            setLoveAct(data.data.data)
        } catch (error) {
            console.log(error)
        }
    }

    const addComment = async (book_id: string, comment: string, perent_id?: string) => {
        console.log(book_id, "cek book id")
        const token = localStorage.getItem('token');
        try {
            const { data } = await axios.post(API_URL + "/comments",
            {
                book_id: book_id,
                comment: comment,
                perent_id: perent_id,
            },
            { headers: { Authorization: token } }
            );

            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }

    const ViewComment = async(id:string)=> {
        const token = localStorage.getItem('token');
        try{
            const {data} = await axios.get(API_URL+'/comments/'+id,
            { headers: { Authorization: token } }
            )

            setDataComment(data.data)
        }catch(error){
            console.log(error)
        }
    }

    const getDataBook = async(name: string) => {
        try{
            const {data} = await axios.get(API_URL+'/books?book_name='+name)
            console.log(data)
        }catch(error) {
            console.log(error)
        }
    }

    return {
        getData,
        data,
        addLove,
        loveAct,
        cekLoveAct,
        addComment,
        ViewComment,
        dataComment,
        getDataBook
    }
}

export default Controller;