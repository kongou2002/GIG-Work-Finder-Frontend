import { Button, Typography } from '@mui/material';
import { Box, Container, Stack } from '@mui/system';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import jobAppApi from '../../../api/jobApplicantApi';
import "./styleUserJO.scss";
function Userbusiness(props) {
    const [repo, setRepo] = useState([]);
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
            <h1>Hello</h1>
        </Container>
    )
}

export default Userbusiness