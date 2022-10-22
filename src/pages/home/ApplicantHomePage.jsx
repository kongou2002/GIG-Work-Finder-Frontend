import React from 'react';
import { useState } from 'react';
import JobOffer from '../../component/jobOffer/joboffer';
import Search from '../../component/search/Search';
import "./style.scss";
import { Button, Rating } from '@mui/material';
import Member from '../../asset/image/memberbanner.jpg'
import Tick from '../../asset/image/tick.png'
import Store from '../../asset/image/cty.jpg'
import authorizationApi from '../../api/authorizationAPI';


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
                    <h1>Khám phá các công việc phổ biến</h1>
                    <div className='job-zone-list-box'>
                        <JobOffer />
                    </div>
                </div>
            </div>
        </div >
    )
}
export default ApplicantHomePage