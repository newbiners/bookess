import { useState } from "react"
import axios from "axios";
import { API_URL } from "../api";
const Controller = () => {
    const [data, setData] = useState<any>();
    const [writer, setWriter] = useState<any>();
    const [book, setBook] = useState<any>([])
    const getData = async() =>{
        try{
            const {data} = await axios.get(API_URL+'/books');
            setData(data.data.books)
            console.log(data.data.books, "data")
        }catch(error){
            console.log(error)
        }
    }

    const getDataWriter = async() => {
        try{
            const {data} = await axios.get(API_URL+'/writers')
            setWriter(data.data)
        }catch(error){
            console.log(error)
        }
    }

    const getSearch = async(book: string) => {
        try{
            const {data} = await axios.get(API_URL+'/books?book_name='+book);
            console.log(data.data.books)
            setBook(data.data.books)
        }catch(error){
            console.log(error)
        }
    }

    return {
        getData,
        data,
        writer,
        getDataWriter,
        getSearch,
        book
    }
}

export default Controller;