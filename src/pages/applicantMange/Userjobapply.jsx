import { Button, Typography } from '@mui/material';
import { Box, Container, Stack } from '@mui/system';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import jobApplicantApi from '../../api/jobApplicantApi';
import jobOfferApi from '../../api/JobOffer';
import jobMapApi from '../../api/jobMapApi';
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
                jobList = await jobOfferApi.getAppIDUnValid(6);
            }
            if (user?.index == 1) {
                jobList = await jobApplicantApi.getAppIDUnValid(6);
            }
            if (user?.index == 2) {
                //jobList = await jobApplicantApi.getAllJOUnActive(user?.id);
                jobList = await jobApplicantApi.getAppIDValid(6);
            }
            if (user?.index == 3) {
                //jobList = await jobApplicantApi.getAllJOUnActive(user?.id);
                jobList = await jobApplicantApi.getAppIDFinish(6);
            }
            if (user?.index == 4) {
                jobList = await jobApplicantApi.getAppIDCancel(6);
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
                                <img src={data?.buLogo} style={{ width: '100px', height: '100px' }} />
                            </Box>
                            <Box className='info-bus-02'>
                                <h1 style={{ color: '#00b000' }}>{data?.jobName}</h1>
                                <p>Tên cửa hàng: {data?.buName}</p>
                                <p>Địa chỉ: {data?.joaddress != undefined ? data?.joaddress : data?.buAddress}</p>
                                {/* <p style={{ color: 'blue' }}>Tình trạng tuyển: {data?.numOfRecruit}</p> */}
                            </Box>
                            <Box className='button-bus-detail-02'>
                                <Button className='detail-button-02' variant='contained' ><Link to={`/detail/${data?.offerID}`} style={{ textDecoration: 'none', color: 'white' }}>Xem chi tiết</Link></Button>
                            </Box>
                            {user?.index == 0 &&
                                <Box className='button-bus-detail-02'>
                                    <Button className='detail-button-02' variant='contained' >
                                        <Link to={`/business/${data?.businessID}`} style={{ textDecoration: 'none', color: 'white' }}>
                                            Xem công ty
                                        </Link>
                                    </Button>
                                </Box>}
                            {console.log("data: ", data)}
                            {user?.index == 1 &&
                                <Box className='button-bus-detail-02'>
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
                                </Box>}
                            {user?.index == 2 &&
                                <Box className='button-bus-detail-02'>
                                    <Button className='delete-button-02' variant='contained' style={{ textDecoration: 'none', color: 'white' }}>Đang tiến hành</Button>
                                </Box>}
                            {user?.index == 3 &&
                                <Box className='button-bus-detail-02'>
                                    <Button className='detail-button-02' variant='contained' >
                                        <Link to={`/business/${data?.businessID}`} style={{ textDecoration: 'none', color: 'white' }}>
                                            Xem công ty
                                        </Link>
                                    </Button>
                                    <Button className='delete-button-02' variant='contained' style={{ textDecoration: 'none', color: 'white' }} >Đã bị từ chối</Button>

                                </Box>}
                            {user?.index == 4 &&
                                <Box className='button-bus-detail-02'>
                                    <Button className='detail-button-02' variant='contained' >
                                        <Link to={`/business/${data?.businessID}`} style={{ textDecoration: 'none', color: 'white' }}>
                                            Xem công ty
                                        </Link>
                                    </Button>
                                    <Button className='delete-button-02' variant='contained' style={{ textDecoration: 'none', color: 'white' }} >Đã bị từ chối</Button>

                                </Box>}
                        </Box>
                    ))}
                </Box>
            </Stack>
        </Container>
    )
}

export default Userjobapply