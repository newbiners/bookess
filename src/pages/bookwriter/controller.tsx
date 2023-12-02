import { API_URL } from "../api"
import axios from "axios";
import { useState } from "react";
const Controller = () => {
    const [data, setData] = useState<any>('')
    const [dataWriter, setDataWriter] = useState<any>('')
    const getData = async (id: string) => {
        try {
            const { data } = await axios.get(API_URL + '/writers/' + id);
            setData(data.data)
        } catch (error) {
            console.log(error)
        }
    }

    const getDataByFilter = async(writerId : string) => {
        try{
            const {data} = await axios(API_URL+'/books?writer_id='+writerId)
            setDataWriter(data.data.books)
        }catch(error){
            console.log(error)
        }
    }
    return {
        getData,
        data,
        getDataByFilter,
        dataWriter
    }
}

export default Controller;