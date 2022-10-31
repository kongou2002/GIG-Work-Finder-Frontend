/* eslint-disable no-unreachable */
import { Button, Rating, Skeleton } from '@mui/material';
import { Box, Container, Stack } from '@mui/system';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Moment from 'moment';
import './footerStyle.scss'

function QandA() {
    return (
        <Box className='ria-background'>
            <Box className='trong-background'>
                <h1 style={{ color: '#00b000' }}>Thông tin liên hệ và hỗ trợ</h1>
                <p>Hãy liên lạc với chúng tôi nếu bạn cần hỗ trợ!</p>
                <div className='contact'>
                    <h2>Địa chỉ:</h2>
                    <p>Lô E2a-7, Đường D1, Đ. D1, Long Thạnh Mỹ, Thành Phố Thủ Đức, Thành phố Hồ Chí Minh.</p>
                </div>
                <div className='contact'>
                    <h2>Số điện thoại và email liên lạc:</h2>
                    <p>Hồ Chí Minh:(+84)555 666 777</p>
                    <p>Email: gigworker@gmail.com</p>
                </div>
            </Box>
        </Box >
    )

}

export default QandA