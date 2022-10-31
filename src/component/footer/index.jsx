import { Box, Stack } from '@mui/system';
import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import './style.scss';

function footer(props) {
    return (
        <Stack className='container' alignItems='center'>
            <Box className='footer-top' flexDirection="row" justifyContent='space-between'>
                <Box className='about-us'>
                    <h3>About Us</h3>
                    <ul>
                        <li><Link className='headContent-footer'
                            tag={Link}
                            to="/"
                            exact
                            activeClassName="router-link-exact-active">Trang chủ</Link></li>
                        <li><Link className='headContent-footer'
                            tag={Link}
                            to="/about"
                            exact
                            activeClassName="router-link-exact-active">Về GIG-Worker</Link></li>
                        <li><Link className='headContent-footer'
                            tag={Link}
                            to="/Q&A"
                            exact
                            activeClassName="router-link-exact-active">Câu hỏi thường gặp</Link></li>
                        <li><Link className='headContent-footer'
                            tag={Link}
                            to="/contact"
                            exact
                            activeClassName="router-link-exact-active">Liên hệ</Link></li>
                    </ul>
                </Box>
                <Box className='condition'>
                    <h3>Điều khoản chung</h3>
                    <ul>
                        <li><Link className='headContent-footer'
                            tag={Link}
                            to="/security"
                            exact
                            activeClassName="router-link-exact-active">Quy định bảo mật</Link></li>
                        <li><Link className='headContent-footer'
                            tag={Link}
                            to="/activity"
                            exact
                            activeClassName="router-link-exact-active">Quy chế hoạt động</Link></li>
                        <li><Link className='headContent-footer'
                            tag={Link}
                            to="/report"
                            exact
                            activeClassName="router-link-exact-active">Giải quyết khiếu nại</Link></li>
                        <li><Link className='headContent-footer'
                            tag={Link}
                            to="/terms"
                            exact
                            activeClassName="router-link-exact-active">Thỏa thuận sử dụng</Link></li>
                    </ul>
                </Box>
                <Box className='HR'>
                    <h3>Liên hệ CSKH tại:</h3>
                    <ul>
                        <li>Hồ Chí Minh:(+84)555 666 777 </li>
                        <li>Email: gigworker@gmail.com</li>
                    </ul>
                </Box>
            </Box>
            <Box className='footer-bot'>
                <p>Copyright © 2022</p>
                <p>GIG-Worker</p>
            </Box>
        </Stack>
    );
}

export default footer;