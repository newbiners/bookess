import { useState } from "react"
import { API_URL } from "../api"
import axios from "axios"
const Controller = () => {
    const [data, setData] = useState<any>()
    const [name, setName] = useState<string>()
    const getData = async () => {
        try {
            const { data } = await axios.get(API_URL + '/writers')
            setData(data.data)
        } catch (error) {
            console.log(error)
        }
    }

    const getSearch = async(name: string) => {
        try{
            const {data} = await axios.get(API_URL+'/writers?filter='+name);
            setData(data.data)
        }catch(error){
            console.log(error)
        }
    }
    return{
        data,
        getData,
        getSearch
    }
}

export default Controller;