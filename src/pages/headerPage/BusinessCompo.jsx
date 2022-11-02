import { User } from '@auth0/auth0-spa-js';
import { Button, Typography } from '@mui/material';
import { Box, Container, Stack } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import businessApi from '../../api/businessApi';
//import "./styleUserBusiness.scss";

function AllBusiness(props) {
    const [loading, setLoading] = useState(false)
    const [repo, setRepo] = useState()
    useEffect(() => {
        setLoading(true)
        const fetchJobOffer = async () => {
            //const jobList = await businessApi.getUID(param.id); //sau sửa lại thành param.id
            //setRepo(jobList);
            const jobList = await businessApi.getAll();
            setRepo(jobList)
            setLoading(false)
        }
        fetchJobOffer();
    }, []);
    return (
        <Container>
            <Stack>
                <Box className='box-job-are'>
                    {repo?.map(data => (
                        <Box className='box-job-of-user'>
                            <Box className='img-logo-bus'>
                                <img src={data?.businessLogo} style={{ width: '100px', height: '100px' }} />
                            </Box>
                            <Box className='info-bus'>
                                <h1>Tên công ty: {data?.businessName}</h1>
                                <p>Địa chỉ: {data?.address}, {data?.location?.city}, {data?.location?.province}</p>
                            </Box>
                            <Box className='button-bus-detail'>
                                <Button className='button-bus-detail-011' variant='contained'><Link style={{ textDecoration: 'none', color: 'white' }} to={`/business/${data.businessID}`} >Xem công ty</Link></Button>
                            </Box>
                        </Box>
                    ))}
                </Box>
            </Stack>
        </Container>
    )
}

export default AllBusiness