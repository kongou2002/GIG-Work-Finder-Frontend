import axiosClient from "./axiosClient";
import React, { useState } from 'react'
import firebase from "firebase";


const authorizationApi = {
    
    TakeToken(data) {
    // const userEmail = localStorage.getItem('firebase:rememberedAccount', JSON.stringify(firebase.auth().currentUser)).email;
    const url = `/Authorization`;
    return axiosClient.post(url,data);
    }
    
}

export default authorizationApi