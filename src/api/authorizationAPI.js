import axiosClient from "./axiosClient";
import React, { useState } from 'react'
import firebase from "firebase";


const authorizationApi = {
    
    getToken(googleToken, roleUser) {
        const user = JSON.parse(localStorage.getItem('firebase:rememberedAccount'));
        const data = {
            email: user.email,
            role: roleUser,
            name: user.displayName,
            picUrl: user.photoURL,
            token: googleToken
        }
        const headers = {'Authorization': data.token};
        const url = `/Authorization`;
        return axiosClient.post(url,data,headers);
        }
        
    
}

export default authorizationApi