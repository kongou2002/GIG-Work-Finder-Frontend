import axiosClient from "./axiosClient";
import React, { useState } from 'react'
import firebase from "firebase";


const authorizationApi = {
    
    getToken(googleToken, roleUser) {
        const user = JSON.parse(localStorage.getItem('firebase:rememberedAccount'));
        console.log("user in localstored")
        console.log(user);
        const data = {
            email: user.email,
            role: roleUser,
            name: user.displayName,
            picUrl: user.photoURL,
            token: googleToken
        }
        console.log("Data: ")
        console.log(data);
        const url = `/Authorization`;
        return axiosClient.post(url,data);
        }
        
    
}

export default authorizationApi