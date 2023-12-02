import { useState } from "react";
import { API_URL } from "../api";
import axios from "axios";
const Controller = () => {
const [data, setData] = useState()

const getData = async(id: string) => {
    try{
        if(id){
            console.log(id, "id")
            const {data} = await axios.get(API_URL+"/book-details/"+id)
            console.log(data.data, "data data")
            // const bufferData = Buffer.from(data.data, 'utf-8');
            // if (data) {
            //     const reader = new FileReader();
            //     reader.onload = (e: any) => {
            //         console.log(e.target.result, "remder")
            //         // setData(e.target.result);
            //     };
            //     reader.readAsArrayBuffer(data);
            // }
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

