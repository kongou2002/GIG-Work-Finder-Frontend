import { Button, Typography } from '@mui/material';
import { Box, Container, Stack } from '@mui/system';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import jobApplicantApi from '../../api/jobApplicantApi';
//import "./styleUserJO.scss";
function ListApplyApplicant(props) {
    const user = (props)
    console.log('user: ' + user)
    const [loading, setLoading] = useState(false)
    const [repo, setRepo] = useState()
    useEffect(() => {
        setLoading(true)
        const fetchJobOffer = async () => {
            var jobList;
            if (user?.index == 0) {
                jobList = await jobApplicantApi.getRID(2); // SỬAAAAAAAAAAAAAAAAAAAAAAAAAAA
            }
            if (user?.index == 1) {
                // jobList = await jobOfferApi.getAllJO(user?.id);
            }
            if (user?.index == 2) {
                //jobList = await jobOfferApi.getAllJOUnActive(user?.id);
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
                                <h1 style={{ color: '#00b000' }}>ỨNG VIÊN: {data?.firstName} {data?.lastName}</h1>
                                <p>Ứng tuyển vị trí: {data?.jobName}</p>
                                <p>Địa chỉ: {(data?.businessAddress != null) ? data?.businessAddress : data?.joAddress}</p>
                                {data?.businessAddress != null &&
                                    <p>Cửa hàng: {data?.businessName}</p>
                                }
                            </Box>
                            <Box className='button-bus-detail-02'>
                                <Button className='detail-button-02' variant='contained' ><Link to={`/profile/Applicant/${data?.accountID}`} style={{ textDecoration: 'none', color: 'white' }}>Thông tin ứng viên</Link></Button>
                                <Button className='detail-button-02' variant='contained' ><Link to={`/detail/${data?.offerID}`} style={{ textDecoration: 'none', color: 'white' }}>Xem bài đăng tuyển</Link></Button>
                                <Button className='update-button-02' variant='contained' ><Link to={`#`} style={{ textDecoration: 'none', color: 'white' }}>Chấp nhận</Link></Button>
                                <Button className='delete-button-02' variant='contained' ><Link to={`#`} style={{ textDecoration: 'none', color: 'white' }}>Từ chối</Link></Button>
                            </Box>
                        </Box>
                    ))}
                </Box>
            </Stack>
        </Container>
    )
}

export default ListApplyApplicant