import { Box, Container } from '@mui/material'
import React from 'react'

function UserUpdatePage() {
    const handleSubmit = () => {

    }
    return (
        <Container>
            <Box component='div'>
                <h1> Cập nhật thông tin người dùng</h1>
            </Box>
            <Box
                component='form'
                onSubmit={handleSubmit}
            >

            </Box>
        </Container>
    )
}

export default UserUpdatePage