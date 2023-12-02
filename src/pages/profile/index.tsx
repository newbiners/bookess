import LayoutBackground from "../../components/layout/LayoutBackground";
import MyProfile from '../../assets/image.jpg';
import { useState, useEffect } from "react";
import { API_URL } from "../api";
import axios from "axios";
const Profile = () => {
    const [data, setData] = useState<any>([])
    const getData = async()=> {
        const token = localStorage.getItem('token')
        try{
            const {data} = await axios.get(API_URL+'/users',
            { headers: { Authorization: token } }
            )
            setData(data.data)
        }catch(error){
            console.log(error)
        }
    }

    useEffect(() => {
        getData();
    },[])
    console.log(data, "data")
    return(
        <LayoutBackground>
        <div className="flex flex-col justify-center items-center my-10" style={{fontFamily: "Unbound-reguler"}}>
            <img
            src={`${API_URL}/${data.image}`}
            className="h-80 w-80 rounded-full"
            />
            <h1>{data.name}</h1>
            <p>{data.email}</p>
        </div>
        </LayoutBackground>
    )
}

export default Profile;