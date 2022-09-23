import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import "./style.scss";
// import { ReactComponent as Company } from './logo 1.svg';


export default function Header() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" color='primary'>
                <Toolbar >
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <Box className='menu'>
                            <Link to={'/home'}>
                                {<img src='./logo 1.jpg' alt='' />}
                            </Link>
                            <NavLink to={"/jobs"} >
                                <Button color="inherit" className='link'>Việc làm</Button>
                            </NavLink>
                            <NavLink to={"/company"} >
                                <Button color="inherit" className='link'>Công ty</Button>
                            </NavLink>
                            <NavLink to={"/news"} >
                                <Button color="inherit" className='link'>Tin tức</Button>
                            </NavLink>
                            <NavLink to={"/support"} >
                                <Button color="inherit" className='link'>Hỗ trợ</Button>
                            </NavLink>
                        </Box>
                    </Typography>
                    <Link to={'/register'}>
                        <Button color="inherit">register</Button>
                    </Link>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
