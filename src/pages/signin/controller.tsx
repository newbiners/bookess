import React, {useState} from "react"
import axios from "axios"
import { API_URL } from "../api"

const Controller = () => {
    const [email, setEmail] = useState<string>('')
    const [user, setUser] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [image, setImage] = useState<any>()
    const btnSignin = async() => {
        console.log(image.target.files[0], "target")
        const urlImg = image ? image.target.files[0] : null
        try{
            const file = new FormData()
            console.log("cek")
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
            return data.data.email
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
        btnSignin
    }
}

export default Controller;