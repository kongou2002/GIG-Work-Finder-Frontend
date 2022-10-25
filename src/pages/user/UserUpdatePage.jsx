import { Box, Button, Container, TextField } from '@mui/material'
import { DatePicker } from "@mui/x-date-pickers";
import axios from 'axios';
import React from 'react'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function UserUpdatePage() {
    const nav = useNavigate();
    const user = JSON.parse(localStorage.getItem('FWApp-gig:rememberedAccount'));
    console.log(user);
    const [data, setData] = useState({
        name: user?.name
    });
    const inputsHandler = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }
    const handleSubmit = (event) => {
        event.preventDefault(event)
        console.log(data)
        //         try {
        //             // axios.post("https://gig-worker-backend.azurewebsites.net/JobOffer/CreateJO",
        //             axios.post("https://localhost:8080/")
        //             data
        //             )
        //                 .then(res => {
        //                 console.log(res.data)
        //             })
        // } catch (error) {
        //     alert("501 Not Implemented: Máy chủ không công nhận các phương thức yêu cầu hoặc không có khả năng xử lý nó.")
        // }
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

                <TextField variant='filled' name='userName' label='Họ và tên' value={user?.name} onChange={inputsHandler} />
                <TextField variant='filled' name='address' label='Địa chỉ' onChange={inputsHandler} />
                {/* <DatePicker
                        label="Basic example"
                        value={dateValue}
                        onChange={(newValue) => {
                            setDateValue(newValue);
                        }}
                        renderInput={(dateValue) => */}
                <TextField variant='filled' name='dob' label='Ngày sinh' onChange={inputsHandler} />
                <TextField variant='filled' name='gender' label='Giới tính' onChange={inputsHandler} />
                <TextField variant='filled' name='city' label='Quận' onChange={inputsHandler} />
                <TextField variant='filled' name='province' label='Tỉnh/Thành phố' onChange={inputsHandler} />
                <TextField variant='filled' name='decription' label='Mô tả' onChange={inputsHandler} />
                <TextField variant='filled' name='phone' label='Số điện thoại' onChange={inputsHandler} />
                <Button type='submit' > Cập nhật</Button>
            </Box>
            <Button type='button' onClick={() => nav('/')}>Bỏ qua</Button>
        </Container >
    )
}

export default UserUpdatePage