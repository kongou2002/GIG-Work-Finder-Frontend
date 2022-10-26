import { Button, Typography } from '@mui/material';
import { Box, Container, Stack } from '@mui/system';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import businessApi from '../../../api/businessApi';
import "./styleUserBusiness.scss";
function Userbusiness(props) {
    const userid = (props)
    const [loading, setLoading] = useState(false)
    const [repo, setRepo] = useState()
    useEffect(() => {
        setLoading(true)
        const fetchJobOffer = async () => {
            const jobList = await businessApi.getUID(2);
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
                        <Box className='box-job-of-user'>
                            <Box className='img-logo'>
                                <img src={data?.businessLogo} style={{ width: '100px', height: '100px' }} />
                            </Box>
                            <Box className='info-bus'>
                                <h1>{data?.businessName}</h1>
                                <p>Địa chỉ: {data?.address}, {data?.location?.city}, {data?.location?.province}</p>
                            </Box>
                            <Box>
                                <Button variant='contained' ><Link to={`/business/${data.businessID}`}>Xem công ty</Link></Button>
                            </Box>
                        </Box>
                    ))}
                </Box>
            </Stack>
        </Container>
    )
}

export default Userbusiness