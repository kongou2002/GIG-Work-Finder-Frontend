import axiosClient from "./axiosClient";
import React, { useState } from 'react'
import firebase from "firebase";


const authorizationApi = {

    getToken(googleToken, roleUser) {
        const user = JSON.parse(localStorage.getItem('firebase:rememberedAccount'));
        const data = {
            id: 0,
            email: user.email,
            role: roleUser,
            name: user.displayName,
            picUrl: user.photoURL,
            gender: user.gender,
            token: googleToken,
            isCreateNew: false
        }
        const url = `/Authorization`;
        return axiosClient.post(url, data);
    }


}

export default authorizationApi