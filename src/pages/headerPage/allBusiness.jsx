import { Button } from '@mui/material';
import React from 'react';
import AllBusiness from '../headerPage/BusinessCompo';
import "./styleHeader.scss";

function AllBusinessPage() {
    return (
        <div>
            <div className='intro-all-job'>
                <h1 style={{ color: '#00b000', fontSize: '28px' }}>Danh sách các Công Ty và Cửa Hàng uy tín hiện có trên GIG-Worker</h1>
            </div>
            <br></br>
            <div className='job-zone'>
                <AllBusiness />
            </div>
        </div >
    )
}
export default AllBusinessPage