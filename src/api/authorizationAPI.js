import axiosClient from "./axiosClient";
import React, { useState } from 'react'


const authorizationApi = {
    TakeToken(email, role){
    const [data, setData] = useState({
        email: email,
        role: role
    })
    const url = `/Authorization`;
    const Token = axiosClient.post(url,data);
    console.log("TakeToken");
    console.log(Token);
    return Token;
    }
    
}

export default authorizationApi