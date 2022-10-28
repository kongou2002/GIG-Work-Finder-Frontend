import { Button, Typography } from '@mui/material';
import { Box, Container, Stack } from '@mui/system';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import jobAppApi from '../../../api/jobApplicantApi';
import "./styleUserJO.scss";
function Userbusiness(props) {
    const [repo, setRepo] = useState();
    const [loading, setLoading] = useState(false);
    /* A hook that is called when the component is mounted. */

    useEffect(() => {
        setLoading(true)
        const fetchJobOffer = async () => {
            // const params = {
            //     limit: 6,
            // };
            const jobList = await jobAppApi.getAll();
            console.log('job', jobList)
            setRepo(jobList);
            setLoading(false)
        }
        fetchJobOffer();
    }, []);
    console.log(repo)
    return (
        <Container>
            <Box className='full-list-app-job'>
                {repo?.map(data => (
                    <Box className='box-app-job'>
                        <Box className='intro-app-job'>
                            <h1>ỨNG VIÊN: {data?.accountID?.firstName} {data?.accountID?.lastName}</h1>
                            <p>Mô tả cá nhân: {data?.accountID?.description}</p>
                            <p>Địa chỉ: {data?.accountID?.address}, {data?.accountID?.location?.city}, {data?.accountID?.location?.province}</p>
                        </Box>
                        <Box className='button-app-job'>
                            <Button className='detail-button-02' variant='contained' ><Link to={`/profile/Applicant/${data?.accountID?.accountID}`} style={{ textDecoration: 'none', color: 'white' }}>Xem chi tiết</Link></Button>
                            <Button className='detail-button-02' variant='contained' ><Link to={`#`} style={{ textDecoration: 'none', color: 'white' }}>Đề xuất ứng tuyển</Link></Button>
                        </Box>
                    </Box>
                ))}
            </Box>
        </Container>
    )
}

export default Userbusiness