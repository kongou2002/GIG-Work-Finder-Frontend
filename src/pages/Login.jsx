import { Box, Button, Stack, TextField } from '@mui/material'
import React from 'react'
import { ReactComponent as Tick } from '../asset/gigwork/tick 4.svg'


const Login = () => {
    return (
        <Stack flexDirection="row" justifyContent="space-between">
            <Box>
                <form>
                    
                    <TextField type='text' name='Email' placeholder='Email' />
                    <TextField type='password' name='Password' placeholder='Password' />
                    <Button variant='outlined' >submit</Button>
                </form>
            </Box>
            <Box>
                <Stack>
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