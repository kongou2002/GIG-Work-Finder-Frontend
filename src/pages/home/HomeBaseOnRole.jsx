import React from 'react'
import ApplicantHomePage from './ApplicantHomePage';
import GuestHomePage from './GuestHomePage';
import RecruiterHomePage from './RecruiterHomePage';
function HomeBaseOnRole() {
    const user = JSON.parse(localStorage.getItem("FWApp-gig:rememberedAccount"));
    if (user == null)
        return <GuestHomePage />
    if (user.role == "Recruiter")
        return <RecruiterHomePage />
    if (user.role == "Applicant")
        return <ApplicantHomePage />
}

export default HomeBaseOnRole