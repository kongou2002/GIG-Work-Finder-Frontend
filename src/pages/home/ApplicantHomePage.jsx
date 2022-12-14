import React from 'react';
import { useNavigate } from 'react-router-dom';
import JobOffer from '../../component/jobOffer/joboffer';
import Search from '../../component/search/Search';
import "./style.scss";


function ApplicantHomePage() {
    const image = [/* them url hinh anh vao day */];
    return (
        <div className='container-home-page'>
            <div className='search-zone'>
                <Search />
            </div>
            <br></br>
            <div className='job-zone'>
                <div class='job-zone-list-box-title'>
                    <h1>Khám phá các công việc đang "HOT", phổ biến trên thị trường: </h1>
                    <div className='job-zone-list-box'>
                        <JobOffer />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ApplicantHomePage