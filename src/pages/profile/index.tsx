import LayoutBackground from "../../components/layout/LayoutBackground";
import notFound from '../../assets/Page_not_found.png';
import BtnAction from "../../components/btnAction";
import { useState, useEffect } from "react";
import { API_URL } from "../api";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Profile = () => {
    const navigate = useNavigate();
    const [data, setData] = useState<any>([])
    const getData = async () => {
        const token = localStorage.getItem('token')
        try {
            const { data } = await axios.get(API_URL + '/users',
                { headers: { Authorization: token } }
            )
            setData(data.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getData();
    }, [])
    return (
        <LayoutBackground>
            {data.length == 0 ?
                <div className="flex flex-col justify-center items-center" style={{ fontFamily: "Unbound-reguler" }}>
                        <img
                            src={notFound}
                            className="h-96 w-96"
                        />
                        <p className="text-2xl mb-8">You have Login</p>
                        <BtnAction color="red" typeBtn="solid" title="login" onClick={() => navigate('/')} />
                    </div>
                    :
                <div className="flex flex-col justify-center items-center my-10" style={{ fontFamily: "Unbound-reguler" }}>
                    <img
                        src={`${API_URL}/${data.image}`}
                        className="h-80 w-80 rounded-full"
                    />
                    <h1>{data.name}</h1>
                    <p>{data.email}</p>
                </div>
        }
        </LayoutBackground>
    )
}

export default Profile;