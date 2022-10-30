/* eslint-disable no-unreachable */
import { Button, Rating, Skeleton } from '@mui/material';
import { Box, Container, Stack } from '@mui/system';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Moment from 'moment';
import './footerStyle.scss'

function AboutGigworker() {
    return (
        <Box className='ria-background'>
            <Box className='trong-background'>
                <h1 style={{ color: '#00b000', fontSize: '24px' }}>Giới thiệu Website GIG-Worker</h1>
                <h1>Về GIG-Worker</h1>
                <p>GIG-Worker là một trang web giúp bạn tìm kiếm những công việc part-time của các công ty uy tín,
                    cung cấp những có hợi việc làm tốt nhất để bạn kiếm thêm thu nhập. Đồng thời giúp các nhà tuyển dụng
                    dễ dàng tìm kiếm nhân sự cho nhiều vị trí trong công ty.</p>
                <p></p>

                <h1>Điều gì khiến GIG-Worker là trang web tìm việc phù hợp với mọi người?</h1>
                <p>1. Đăng nhập dễ dàng với tài khoản Google.</p>
                <p>2. Dễ dàng tìm kiếm công việc và ứng tuyển.</p>
                <p>3. Nhiều công ty, cửa hàng uy tín tham gia cộng đồng.</p>
                <p>4. Tìm kiếm nhân sự danh chóng cho các doanh nghiệp cửa hàng.</p>

                <h1>Bạn muốn liên hệ với chúng tôi?</h1>
                <p>Hồ Chí Minh:(+84)555 666 777</p>
                <p>Email: gigworker@gmail.com</p>

                <h1>Bạn muốn gia nhập GIG-Worker?</h1>
                <p>Đăng nhập dễ dàng với Google.</p>
            </Box>
        </Box >
    )

}

export default AboutGigworker