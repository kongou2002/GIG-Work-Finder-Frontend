import { Box, Button, Stack, TextField } from '@mui/material'
import React from 'react'
import { ReactComponent as Tick } from '../asset/gigwork/tick 4.svg'
import "./style.scss"


const Login = () => {
    return (
        <Stack flexDirection="row" justifyContent="space-between">
            <Box flexDirection="column" justifyContent="space-between" className='input'>
                <form>
                    <TextField className='text-field' id="outlined-required" label="Email" type='text' name='Email' placeholder='Email' />
                    <TextField className='text-field' id="outlined-required" label="Password" type='password' name='Password' placeholder='Password' />
                    <Button variant='outlined' className='submit'>submit</Button>
                </form>
            </Box>
            <Box>
                <Stack flexDirection="column" justifyContent="center">
                    <h6>Đăng ký làm Thành Viên để nhận ưu đãi hấp dẫn và tiếp cận
                        được với nhiều chủ cửa hàng hơn nữa</h6>
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