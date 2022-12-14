import { Button, Skeleton, Typography } from '@mui/material';
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
        const fetchJobOffer = async () => {
            var jobList;
            if (user?.index == 0) {
                jobList = await jobApplicantApi.getAppIDUnValid(user?.id);

            }
            if (user?.index == 1) {
                jobList = await jobOfferApi.getAppIDUnValid(user?.id);

            }
            if (user?.index == 2) {
                //jobList = await jobApplicantApi.getAllJOUnActive(user?.id);
                jobList = await jobOfferApi.getAppIDValid(user?.id);
            }
            if (user?.index == 3) {
                //jobList = await jobApplicantApi.getAllJOUnActive(user?.id);
                jobList = await jobOfferApi.getAppIDFinish(user?.id);
            }
            if (user?.index == 4) {
                jobList = await jobApplicantApi.getAppIDCancel(user?.id);
            }

            setRepo(jobList);
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
                            {console.log("data: " + data)}
                            <Box className='img-logo-02'>
                                <img src={data?.buLogo} style={{ width: '100px', height: '100px' }} />
                            </Box>
                            <Box className='info-bus-02'>
                                <h1 style={{ color: '#00b000' }}>{data?.jobName}</h1>
                                <p>T??n c???a h??ng: {data?.buName}</p>
                                <p>?????a ch???: {data?.joaddress != '<null>' && data?.joaddress != null ? data?.joaddress : data?.buAddress}</p>
                                {/* <p style={{ color: 'blue' }}>T??nh tr???ng tuy???n: {data?.numOfRecruit}</p> */}
                            </Box>
                            <Box className='button-bus-detail-02'>
                                <Button className='detail-button-02' variant='contained' ><Link to={`/detail/${data?.offerID}`} style={{ textDecoration: 'none', color: 'white' }}>Xem chi ti???t</Link></Button>
                            </Box>
                            {user?.index == 0 &&
                                <Box className='button-bus-detail-02'>
                                    <Button className='detail-button-02' variant='contained' >
                                        <Link to={`/business/${data?.businessID}`} style={{ textDecoration: 'none', color: 'white' }}>
                                            Xem c??ng ty
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
                                        }>Ch???p nh???n</Button>
                                    <Button className='delete-button-02' variant='contained'
                                        onClick={
                                            async () => {
                                                await setLoading(true)
                                                await jobMapApi.cancel(data?.mapID);
                                                await setLoading(false)
                                            }
                                        }>T??? ch???i</Button>
                                </Box>}
                            {user?.index == 2 &&
                                <Box className='button-bus-detail-02'>
                                    <Button className='update-button-02' variant='contained' style={{ textDecoration: 'none', color: 'white' }}>??ang ti???n h??nh</Button>
                                </Box>}
                            {user?.index == 3 &&
                                <Box className='button-bus-detail-02'>
                                    <Button className='detail-button-02' variant='contained' >
                                        <Link to={`/business/${data?.businessID}`} style={{ textDecoration: 'none', color: 'white' }}>
                                            Xem c??ng ty
                                        </Link>
                                    </Button>
                                    <Button className='update-button-02' variant='contained' style={{ textDecoration: 'none', color: 'white' }} >???? ho??n th??nh</Button>

                                </Box>}
                            {user?.index == 4 &&
                                <Box className='button-bus-detail-02'>
                                    <Button className='detail-button-02' variant='contained' >
                                        <Link to={`/business/${data?.businessID}`} style={{ textDecoration: 'none', color: 'white' }}>
                                            Xem c??ng ty
                                        </Link>
                                    </Button>
                                    <Button className='delete-button-02' variant='contained' style={{ textDecoration: 'none', color: 'white' }} >???? b??? t??? ch???i</Button>

                                </Box>}
                        </Box>
                    ))
                    }
                </Box >
            </Stack >
        </Container >
    )
}

export default Userjobapply