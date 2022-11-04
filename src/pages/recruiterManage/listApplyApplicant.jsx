import { Button, Typography } from '@mui/material';
import { Box, Container, Stack } from '@mui/system';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import jobApplicantApi from '../../api/jobApplicantApi';
import jobMapApi from '../../api/jobMapApi';
//import "./styleUserJO.scss";
function ListApplyApplicant(props) {
    const user = (props)
    console.log('user: ' + user)
    const [loading, setLoading] = useState(false)
    const [repo, setRepo] = useState()
    useEffect(() => {
        //setLoading(true)
        const fetchJobOffer = async () => {
            var jobList;

            if (user?.index == 0) {
                jobList = await jobApplicantApi.getRIDUnValid(user?.id); // SỬAAAAAAAAAAAAAAAAAAAAAAAAAAA
            }
            if (user?.index == 1) {
                jobList = await jobApplicantApi.getRIDValid(user?.id); // SỬAAAAAAAAAAAAAAAAAAAAAAAAAAA
            }
            if (user?.index == 2) {
                jobList = await jobApplicantApi.getRIDFinish(user?.id); // SỬAAAAAAAAAAAAAAAAAAAAAAAAAAA
            }
            setRepo(jobList);
            //setLoading(false)
        }
        fetchJobOffer();
    }, [loading]);
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
                                <h1 style={{ color: '#00b000' }}>ỨNG VIÊN: {data?.firstName} {data?.lastName}</h1>
                                <p>Ứng tuyển vị trí: {data?.jobName}</p>
                                <p>Địa chỉ: {(data?.businessAddress != null) ? data?.businessAddress : data?.joAddress}</p>
                                {data?.businessAddress != null &&
                                    <p>Cửa hàng: {data?.businessName}</p>
                                }
                            </Box>
                            {user?.index == 0 &&
                                <Box className='button-bus-detail-02'>
                                    <Button className='detail-button-02' variant='contained' ><Link to={`/profile/Applicant/${data?.accountID}`} style={{ textDecoration: 'none', color: 'white' }}>Thông tin ứng viên</Link></Button>
                                    <Button className='detail-button-02' variant='contained' ><Link to={`/detail/${data?.offerID}`} style={{ textDecoration: 'none', color: 'white' }}>Xem bài đăng tuyển</Link></Button>
                                    <Button className='update-button-02' variant='contained'
                                        onClick={
                                            async () => {
                                                await setLoading(true)
                                                await jobMapApi.confirm(data?.mapID);
                                                await setLoading(false)
                                            }
                                        }>Chấp nhận</Button>
                                    <Button className='delete-button-02' variant='contained'
                                        onClick={
                                            async () => {
                                                await setLoading(true)
                                                await jobMapApi.cancel(data?.mapID);
                                                await setLoading(false)
                                            }
                                        }>Từ chối</Button>
                                </Box>
                            }
                            {user?.index == 1 &&
                                <Box className='button-bus-detail-02'>
                                    <Button className='detail-button-02' variant='contained' ><Link to={`/profile/Applicant/${data?.accountID}`} style={{ textDecoration: 'none', color: 'white' }}>Thông tin ứng viên</Link></Button>
                                    <Button className='detail-button-02' variant='contained' ><Link to={`/detail/${data?.offerID}`} style={{ textDecoration: 'none', color: 'white' }}>Xem bài đăng tuyển</Link></Button>
                                    <Button className='update-button-02' variant='contained'
                                        onClick={
                                            async () => {
                                                await setLoading(true)
                                                await jobMapApi.finish(data?.mapID);
                                                await setLoading(false)
                                            }
                                        }>Hoàn thành công việc</Button>
                                </Box>
                            }
                            {user?.index == 2 &&
                                <Box className='button-bus-detail-02'>
                                    <Button className='detail-button-02' variant='contained' ><Link to={`/profile/Applicant/${data?.accountID}`} style={{ textDecoration: 'none', color: 'white' }}>Thông tin ứng viên</Link></Button>
                                    <Button className='detail-button-02' variant='contained' ><Link to={`/detail/${data?.offerID}`} style={{ textDecoration: 'none', color: 'white' }}>Xem bài đăng tuyển</Link></Button>
                                    <Button className='update-button-02' variant='contained' ><Link to={`#`} style={{ textDecoration: 'none', color: 'white' }}>Viết đánh giá</Link></Button>
                                </Box>
                            }
                        </Box>
                    ))}
                </Box>
            </Stack>
        </Container>
    )
}

export default ListApplyApplicant