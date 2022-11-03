import { Button } from '@mui/material';
import React from 'react';
import AllJob from '../headerPage/JobOfferCompo';
import "./styleHeader.scss";

function AllJobPage() {
    return (
        <div>
            <div className='intro-all-job'>
                <h1 style={{ color: '#00b000', fontSize: '28px' }}>Danh sách tất cả các công việc hiện có trên GIG-Worker</h1>
            </div>
            <br></br>
            <div className='job-zone'>
                <AllJob />
            </div>
        </div >
    )
}
export default AllJobPage