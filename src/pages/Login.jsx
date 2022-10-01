import { Box, Stack } from '@mui/material';
import Userfront from "@userfront/react";
import React from 'react';
import { ReactComponent as Tick } from '../asset/image/tick 4.svg';
import "./style.scss";


/* This is the code that is provided by Userfront to integrate the login form into your website. */
Userfront.init("wn99xm6n");

const LoginForm = Userfront.build({
    toolId: "onnnal"
});
const Login = () => {
    return (
        /* A component that is used to display the login form. */
        <Stack flexDirection="row" justifyContent="space-between" className='loginPage'>
            <Box flexDirection="column" justifyContent="space-between" className='input'>
                <LoginForm />;
            </Box>
            <Box>
                <Stack flexDirection="column" justifyContent="space-between" className='benefitList'>
                    <h6>Đăng ký làm Thành Viên để nhận ưu đãi hấp dẫn và</h6>
                    <h6>tiếp cận được với nhiều chủ cửa hàng hơn nữa</h6>
                    <ul>
                        <li className='benefit'> <Tick /> Đăng kí nhận việc chỉ với 1 nhấn </li>
                        <li className='benefit'> <Tick /> Quản lý thông tin cá nhân của bạn và bảo mật </li>
                        <li className='benefit'> <Tick /> Xem chi tiết công việc và mức lương tuyển dụng </li>
                        <li className='benefit'> <Tick /> nhận ưu đãi và lợi ích của các cửa hàng </li>
                    </ul>
                </Stack>
            </Box>
        </Stack>
    )
}

export default Login