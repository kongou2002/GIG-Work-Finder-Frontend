import React from 'react';
import ApplicantHomePage from './ApplicantHomePage';
import GuestHomePage from './GuestHomePage';
import RecruiterHomePage from './RecruiterHomePage';
function HomeBaseOnRole() {
    const role = localStorage.getItem("role");
    if (role == null)
        return <GuestHomePage />
    if (role == "Recruiter")
        return <RecruiterHomePage />
    if (role == "Applicant")
        return <ApplicantHomePage />
}

export default HomeBaseOnRole