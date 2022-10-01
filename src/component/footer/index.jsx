import { Box, Stack } from '@mui/system';
import React from 'react';
import './style.scss';

function footer(props) {
    return (
        <Stack className='container' alignItems='center'>
            <Box className='footer-top' flexDirection="row" justifyContent='space-between'>
                <Box className='about-us'>
                    <h3>About Us</h3>
                    <ul>
                        <li>Trang chủ</li>
                        <li>Về GIG-Worker</li>
                        <li>Câu hỏi thường gặp</li>
                        <li>Liên hệ</li>
                    </ul>
                </Box>
                <Box className='condition'>
                    <h3>Điều khoảng chung</h3>
                    <ul>
                        <li>Quy định bảo mật</li>
                        <li>Quy chế hoạt động</li>
                        <li>Giải quyết khiếu nại</li>
                        <li>Thỏa thuận sử dụng</li>
                    </ul>
                </Box>
                <Box className='HR'>
                    <h3>Liên hệ tuyển dụng tại</h3>
                    <ul>
                        <li>Hồ Chí Minh:(+84)555 666 777 </li>
                        <li>Email: gigworker@gmail.com</li>
                    </ul>
                </Box>
            </Box>
            <Box className='footer-bot'>
                <p>Coppyright © 2022</p>
                <p>GIG-Worker</p>
            </Box>
        </Stack>
    );
}

export default footer;