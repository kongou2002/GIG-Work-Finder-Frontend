import { Button, MenuItem, TextField } from '@mui/material';
import { Box, Container } from '@mui/system';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import jobOfferApi from '../../../api/JobOffer';
import locationApi from '../../../api/locationApi';

function CreateJO() {
    const id = 2
    const [repo, setRepo] = useState()
    const [loading, setLoading] = useState()
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
    useEffect(() => {
        setLoading(true)
        const fetchData = async () => {
            const joblocation = await jobOfferApi.getJobType(id);
            setRepo(joblocation);
            setLoading(false)
        }
        fetchData();
    }, []);
    const inputsHandler = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }
    const handleSubmit = (e) => {
        try {
            e.preventDefault()

            jobOfferApi.add(data);
            alert('Thêm thành công')
        } catch (error) {
            alert("501 Not Implemented: Máy chủ không công nhận các phương thức yêu cầu hoặc không có khả năng xử lý nó.")
        }

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