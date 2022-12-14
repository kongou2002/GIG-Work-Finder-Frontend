import { ForkRight } from "@mui/icons-material";
import { AppBar, Avatar, Button, Menu, MenuItem, Toolbar, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import Profile from "../../pages/user/ViewTheirProfile";
import Login from "../authentication/login";
import Logout from "../authentication/logout";
import "./style.scss";

export default function AuthHeader() {

    const [isOpen, setIsOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [role, setRole] = useState(localStorage.getItem('role'));
    console.log(role);
    const isAuthenticated = localStorage.getItem("isAuthenticated") == null ? false : localStorage.getItem("isAuthenticated");
    const user = JSON.parse(localStorage.getItem("FWApp-gig:rememberedAccount"));

    console.log("User: ");
    console.log(user);
    const toggle = () => setIsOpen(!isOpen);
    const nav = useNavigate();
    const Logo = require('../../asset/image/logo.jpg');//url cuar logo owr day

    // <<<<<<< HEAD
    const [anchorEl, setAnchorEl] = React.useState(null);


    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleLogout = () => {
        Logout();
        nav('/');
    }
    const handleChangeRole = (event) => {
        const roleLocal = localStorage.getItem('role');
        localStorage.setItem('role', "Applicant" == roleLocal ? "Recruiter" : "Applicant");
        setRole(localStorage.getItem('role'));
        nav('/');
        window.location.reload();
    }

    const handleShowProfile = (event) => {
        return <Profile />
    }
    return (
        <div>
            <AppBar position="static">
                <Toolbar sx={{ bgcolor: '#021C1E' }}>
                    {/* <Button><img src="logo 1.jpg" alt="" /></Button> */}
                    {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        GIG-worker
                    </Typography> */}
                    {/* Button base on role view */}
                    <div className="nav-container, headPage">
                        <Stack color="light" light expand="md" >
                            <div className="link-button">
                                <Link to={'/'}>
                                    <div className='logo'>
                                        <img src={Logo} alt='' style={{ width: "100px", height: "60px" }} />
                                    </div>
                                </Link>
                                <div onClick={toggle} />
                                <div className="button-of-link" isOpen={isOpen} navbar>
                                    <div className="all-button-link">
                                        <Link
                                            className='headContent'
                                            tag={Link}
                                            to="/alljob"
                                            exact
                                            activeClassName="router-link-exact-active"
                                        >
                                            Việc Làm
                                        </Link>
                                        <Link
                                            className='headContent'
                                            tag={Link}
                                            to="/allBusiness"
                                            exact
                                            activeClassName="router-link-exact-active"
                                        >
                                            Công Ty
                                        </Link>
                                        <Link
                                            className='headContent'
                                            tag={Link}
                                            to="/about"
                                            exact
                                            activeClassName="router-link-exact-active"
                                        >
                                            Giới Thiệu
                                        </Link>
                                        <Link
                                            className='headContent'
                                            tag={Link}
                                            to="/contact"
                                            exact
                                            activeClassName="router-link-exact-active"
                                        >
                                            Hỗ Trợ
                                        </Link>
                                        {isAuthenticated && role == 'Recruiter' && (
                                            <div className="manage-recruiter-button">
                                                <div>
                                                    <Link
                                                        className='headContent'
                                                        tag={Link}
                                                        to="/businessManage"
                                                        exact
                                                        activeClassName="router-link-exact-active"
                                                    >
                                                        Quản lý cửa hàng
                                                    </Link>
                                                </div>
                                                <div>
                                                    <Link
                                                        className='headContent'
                                                        tag={Link}
                                                        to="/jobofferManage"
                                                        exact
                                                        activeClassName="router-link-exact-active"
                                                    >
                                                        Quản lý bài đăng
                                                    </Link>
                                                </div>
                                                <div>
                                                    <Link
                                                        className='headContent'
                                                        tag={Link}
                                                        to="/applicantManage"
                                                        exact
                                                        activeClassName="router-link-exact-active"
                                                    >
                                                        Quản lý nhân sự
                                                    </Link>
                                                </div>
                                            </div>

                                        )}
                                        {isAuthenticated && role == 'Applicant' && (
                                            <div className="manage-applicant-button">
                                                <div>
                                                    <Link
                                                        className='headContent'
                                                        tag={Link}
                                                        to="/jobApplyManage"
                                                        exact
                                                        activeClassName="router-link-exact-active"
                                                    >
                                                        Quản lý công việc
                                                    </Link>
                                                </div>
                                                <div style={{ width: '260px' }}>
                                                </div>
                                                {/* <div>
                                                    <Link
                                                        className='headContent'
                                                        tag={Link}
                                                        to="/external-api"
                                                        exact
                                                        activeClassName="router-link-exact-active"
                                                    >
                                                        Thời khóa biểu
                                                    </Link>
                                                </div> */}
                                            </div>

                                        )}
                                    </div>
                                </div>
                            </div>
                        </Stack>
                    </div>
                    {/* Account Authentication show below */}
                    {
                        !isAuthenticated && (
                            <div className="login-gg-area" style={{ float: "right" }}>
                                <Button onClick={() => { nav('/Login') }}>Đăng nhập/Đăng ký</Button>
                            </div>
                        )
                    }


                    {
                        isAuthenticated && (
                            <div className="profile-dashboard" style={{ float: "right" }}>
                                <Stack flexDirection={'row'} sx={{ alignItems: 'center' }}>

                                    <Button onClick={handleMenu}>
                                        <div style={{ color: "White" }}> {user?.name}</div>
                                        <Avatar alt="Remy Sharp" src={user?.picUrl} sx={{ ml: '20px' }} />
                                    </Button>

                                </Stack>

                                <Menu
                                    id="menu-appbar"
                                    anchorEl={anchorEl}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    open={Boolean(anchorEl)}
                                    onClose={handleClose}
                                >

                                    <Link to={'/profile'} style={{ textDecoration: "none", color: 'black' }}>
                                        <MenuItem>Thông tin cá nhân</MenuItem>
                                    </Link>

                                    {/* <MenuItem onClick={handleClose}>Thông báo</MenuItem> */}
                                    <MenuItem onClick={handleChangeRole}>Chuyển sang {(role == "Recruiter") ? "Ứng Viên" : "Nhà Tuyển Dụng"}</MenuItem>
                                    <MenuItem onClick={handleLogout}>Đăng xuất</MenuItem>
                                </Menu>
                            </div>
                        )
                    }
                </Toolbar >
            </AppBar >
        </div >
    );//end of return
};
