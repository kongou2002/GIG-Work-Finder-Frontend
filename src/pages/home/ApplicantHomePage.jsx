import React from 'react';
import { useState } from 'react';
import JobOffer from '../../component/jobOffer/joboffer';
import Search from '../../component/search/Search';
import "./style.scss";

function ApplicantHomePage() {
    return (
        <div className='container-home-page'>
            <div className='search-zone'>
                <Search />
            </div>
            <br></br>
            <div className='job-zone'>
                <div class='job-zone-list-box-title'>
                    <h1>Khám phá các công việc đang "HOT", phổ biến trên thị trường: "Đây là trang applicant" </h1>
                    <div className='job-zone-list-box'>
                        <JobOffer />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ApplicantHomePage