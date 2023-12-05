import { useState } from "react"
import axios from "axios";
import { API_URL } from '../api';
import { useNavigate } from "react-router-dom";
import React from "react";
const Controller = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [data, setData] = useState<any>()

    const btnLogin = async (event: React.FormEvent) => {
        event.preventDefault();
        try {
            const { data } = await axios.post(API_URL + "/users/login", {
                email: email,
                password: password
            })
            localStorage.setItem('token', data.data.token)
        } catch (error) {
            console.log(error, "error")
        }
    }
    return {
        setEmail,
        setPassword,
        btnLogin,
        data
    }
}

export default Controller;