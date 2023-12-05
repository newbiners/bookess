import { useState } from "react";
import { API_URL } from "../api";
import axios from "axios";
const Controller = () => {
const [data, setData] = useState()

const getData = async(id: string) => {
    try{
        if(id){
            const {data} = await axios.get(API_URL+"/book-details/"+id)
            setData(data.data)
        }
    }catch(error){
        console.log(error)
    }
}

return{
    getData,
    data
}
}


export default Controller;

