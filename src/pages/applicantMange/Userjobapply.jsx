import { Button, Typography } from '@mui/material';
import { Box, Container, Stack } from '@mui/system';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import jobApplicantApi from '../../api/jobApplicantApi';
//import "./styleUserJO.scss";
function Userbusiness(props) {
    const user = (props)
    const [loading, setLoading] = useState(false)
    const [repo, setRepo] = useState()
    useEffect(() => {
        setLoading(true)
        const fetchJobOffer = async () => {
            var jobList;
            if (user?.index == 1) {
                jobList = await jobApplicantApi.getAllJOActive(user?.id);
            }
            if (user?.index == 0) {
                jobList = await jobApplicantApi.getAllJO(user?.id);
            }
            if (user?.index == 2) {
                jobList = await jobApplicantApi.getAllJOUnActive(user?.id);
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
                            <h1>Hello</h1>
                        </Box>
                    ))}
                </Box>
            </Stack>
        </Container>
    )
}

export default Userbusiness