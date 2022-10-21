import { Button, MenuItem, TextField } from '@mui/material';
import { Box, Container } from '@mui/system';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

function UserCreatePage() {

    return (
        <Container>
            <Box
                component="form"
                // onSubmit={handleSubmit}
                sx={{
                    '& > :not(style)': { m: 1, width: '50ch' },
                }}
                noValidate
                autoComplete="off"
            >

                <TextField label="Name" variant="standard"
                    // onChange={ } 
                    name='jobname' />
                <TextField label="Phone" variant="standard"
                    //  onChange={ } 
                    name='jobtype' />
                <TextField label="Email" variant="standard"
                    // onChange={ } 
                    name='location' />
                <TextField
                    select
                    label="provivince"
                    // value={select}
                    // onChange={inputsHandler}
                    name='provivince'>
                    {/* {provivince.map((option) => (
                        <MenuItem key={option} value={option} >
                            {option}
                        </MenuItem>
                    ))} */}
                </TextField>
                <TextField
                    select
                    label="provivince City"
                    value={fetch?.locationid}
                    // onChange={inputsHandler}
                    name='provivince'>
                    {/* {provivince.map((option) => (
                        <MenuItem key={fetch?.locationid} value={fetch?.locationid}>
                            {fectch?.city}
                        </MenuItem>
                    ))} */}
                </TextField>
                <TextField />


                <Button type='submit'>submit</Button>
            </Box>
        </Container>
    )
}

export default UserCreatePage