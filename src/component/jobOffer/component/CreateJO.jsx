import { Button, TextField } from '@mui/material';
import { Box, Container } from '@mui/system';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import jobOfferApi from '../../../api/JobOffer';

function CreateJO() {
    const [data, setData] = useState({
        jobname: '',
        jobtype: '',
        location: '',
        business: '',
        numofrecruit: '',
        offerendtime: '',
        salary: '',
        age: '',
        jobdescription: '',
        orther: '',
        strattime: '',
        endtime: '',
        address: ''
    })
    const inputsHandler = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(data)
        jobOfferApi.add(data);
    }
    return (
        <Container>
            <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{
                    '& > :not(style)': { m: 1, width: '50ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField id="standard-basic" label="Name" variant="standard" onChange={inputsHandler} name='jobname' />
                <TextField id="standard-basic" label="Phone" variant="standard" onChange={inputsHandler} name='jobtype' />
                <TextField id="standard-basic" label="Email" variant="standard" onChange={inputsHandler} name='location' />
                <Button type='submit'>submit</Button>
            </Box>
        </Container>
    )
}

export default CreateJO