import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ApplicantHomePage from './ApplicantHomePage';
import GuestHomePage from './GuestHomePage';
import RecruiterHomePage from './RecruiterHomePage';
function HomeBaseOnRole() {
    const role = localStorage.getItem("role");
    const x = localStorage.getItem('isCreateNew');
    console.log("x", x)
    const nav = useNavigate();
    useEffect(() => {
        if (x == true) nav('/userProfile');
    }, [])
    if (role == null)
        return <GuestHomePage />
    if (role == "Recruiter")
        return <RecruiterHomePage />
    if (role == "Applicant")
        return <ApplicantHomePage />
}

export default HomeBaseOnRole