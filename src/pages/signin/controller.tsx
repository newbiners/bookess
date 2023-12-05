import React, {useState} from "react"
import axios from "axios"
import { API_URL } from "../api"

const Controller = () => {
    const [email, setEmail] = useState<string>('')
    const [user, setUser] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [image, setImage] = useState<any>();
    const [data, setData] = useState<any>('');
    const btnSignin = async() => {
        const urlImg = image ? image.target.files[0] : null
        try{
            const file = new FormData()
            file.append("email", email);
            file.append('name', user);
            file.append('image', urlImg);
            file.append('password', password);
            const {data} = await axios.post(API_URL+'/users/register',
               file,
            {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            })
            setData(data)
        }catch(error){
            console.log(error)
        }
    }

    return{
        setEmail,
        setPassword,
        setUser,
        setImage,
        image,
        btnSignin,
        data
    }
}

export default Controller;