import { API_URL } from "../api";
import axios from "axios";
import { useState } from "react";
const Controller = () => {
    const [data, setData] = useState<any>([])
    const token = localStorage.getItem('token');
    const getHistory = async () => {
        try {
            const { data } = await axios.get(API_URL + "/history", {
                headers: { Authorization: token }
            })
            setData(data.data)
        } catch (error) {
            console.log(error)
        }
    }

    return{
        getHistory,
        data
    }
}

export default Controller;