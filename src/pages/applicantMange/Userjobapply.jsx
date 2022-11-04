import { Button, Typography } from '@mui/material';
import { Box, Container, Stack } from '@mui/system';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import jobApplicantApi from '../../api/jobApplicantApi';
import jobOfferApi from '../../api/JobOffer';
//import "./styleUserJO.scss";
function Userjobapply(props) {
    const user = (props)
    const [loading, setLoading] = useState(false)
    const [repo, setRepo] = useState()
    useEffect(() => {
        setLoading(true)
        const fetchJobOffer = async () => {
            var jobList;

            if (user?.index == 0) {
                jobList = await jobApplicantApi.getRIDUnValid(2);
            }

            if (user?.index == 1) {
                jobList = await jobOfferApi.getAppIDValid(6);
            }
            if (user?.index == 2) {
                jobList = await jobOfferApi.getAppIDFinish(6);
            }
            if (user?.index == 3) {
                jobList = await jobOfferApi.getAppIDUnvalid(6);
            }

            setRepo(jobList);
            setLoading(false)
        }
        fetchJobOffer();
    }, []);
    console.log(repo)
    return (
        <Container>
            <Stack>
                <Box className='box-job-are'>
                    {repo?.map(data => (
                        <Box className='box-job-of-user-02'>
                            <Box className='img-logo-02'>
                                <img src={'#'} style={{ width: '100px', height: '100px' }} />
                            </Box>
                            <Box className='info-bus-03'>
                                <h1 style={{ color: '#00b000' }}>Nhà Tuyển Dụng:
                                    <br></br>
                                    {data?.firstName} {data?.lastName}</h1>
                                <p>Phone: {data?.phone}</p>
                                <p>Email: {data?.email}</p>
                                {/* {data?.businessAddress != null &&
                                    <p>Cửa hàng: {data?.businessName}</p>
                                } */}
                            </Box>
                            {user?.index == 0 &&
                                <Box className='button-bus-detail-02'>
                                    <Button className='detail-button-02' variant='contained' ><Link to={`/profile/Recruiter/${data?.accountID}`} style={{ textDecoration: 'none', color: 'white' }}>Thông tin nhà tuyển dụng</Link></Button>
                                    <Button className='detail-button-02' variant='contained' ><Link to={`/detail/${data?.offerID}`} style={{ textDecoration: 'none', color: 'white' }}>Xem bài đăng tuyển</Link></Button>
                                </Box>
                            }
                            {user?.index == 1 &&
                                <Box className='button-bus-detail-02'>
                                    <Button className='detail-button-02' variant='contained' ><Link to={`/profile/Recruiter/${data?.accountID}`} style={{ textDecoration: 'none', color: 'white' }}>Thông tin ứng viên</Link></Button>
                                    <Button className='detail-button-02' variant='contained' ><Link to={`/detail/${data?.offerID}`} style={{ textDecoration: 'none', color: 'white' }}>Xem bài đăng tuyển</Link></Button>
                                    <Button className='update-button-02' variant='contained'
                                        onClick={
                                            async () => {
                                                // await setLoading(true)
                                                // await jobMapApi.finish(data?.mapID);
                                                // await setLoading(false)
                                            }
                                        }>Chấp nhận</Button>
                                    <Button className='delete-button-02' variant='contained'
                                        onClick={
                                            async () => {
                                                // await setLoading(true)
                                                // await jobMapApi.finish(data?.mapID);
                                                // await setLoading(false)
                                            }
                                        }>Từ chối</Button>
                                </Box>
                            }
                            {user?.index == 2 &&
                                <Box className='button-bus-detail-02'>
                                    <Button className='detail-button-02' variant='contained' ><Link to={`/profile/Recruiter/${data?.accountID}`} style={{ textDecoration: 'none', color: 'white' }}>Thông tin ứng viên</Link></Button>
                                    <Button className='detail-button-02' variant='contained' ><Link to={`/detail/${data?.offerID}`} style={{ textDecoration: 'none', color: 'white' }}>Xem bài đăng tuyển</Link></Button>
                                    <Button className='update-button-02' variant='contained' ><Link to={`#`} style={{ textDecoration: 'none', color: 'white' }}>Viết đánh giá</Link></Button>
                                </Box>
                            }
                            {user?.index == 3 &&
                                <Box className='button-bus-detail-02'>
                                    <Button className='detail-button-02' variant='contained' ><Link to={`/profile/Recruiter/${data?.accountID}`} style={{ textDecoration: 'none', color: 'white' }}>Thông tin ứng viên</Link></Button>
                                    <Button className='detail-button-02' variant='contained' ><Link to={`/detail/${data?.offerID}`} style={{ textDecoration: 'none', color: 'white' }}>Xem bài đăng tuyển</Link></Button>
                                    <Button className='update-button-02' variant='contained' ><Link to={`#`} style={{ textDecoration: 'none', color: 'white' }}>Viết đánh giá</Link></Button>
                                </Box>
                            }
                        </Box>
                    ))}
                </Box>
                <Box className='box-job-of-user-02'>
                </Box>
            </Stack>
        </Container>
    )
}

export default Userjobapply