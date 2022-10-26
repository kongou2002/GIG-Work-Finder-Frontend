import { Button, Typography } from '@mui/material';
import { Box, Container, Stack } from '@mui/system';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import businessApi from '../../../api/businessApi';
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
            Userbusiness
            <Stack>
                <Box>
                    {repo.map(data => (
                        <Box>
                            <Typography>
                                {data.businessName}
                                {data.address}
                                {data.benefit}
                                {data.description}
                                {data.businessName}
                                <img src={data.businessLogo} />
                            </Typography>
                            <Button variant='contained' ><Link to={`/business/${data.businessID}`}>Xem công ty</Link></Button>

                        </Box>
                    ))}
                </Box>
            </Stack>
        </Container>
    )
}

export default Userbusiness