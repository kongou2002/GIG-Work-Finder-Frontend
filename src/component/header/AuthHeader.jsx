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
                                            Vi???c L??m
                                        </Link>
                                        <Link
                                            className='headContent'
                                            tag={Link}
                                            to="/allBusiness"
                                            exact
                                            activeClassName="router-link-exact-active"
                                        >
                                            C??ng Ty
                                        </Link>
                                        <Link
                                            className='headContent'
                                            tag={Link}
                                            to="/about"
                                            exact
                                            activeClassName="router-link-exact-active"
                                        >
                                            Gi???i Thi???u
                                        </Link>
                                        <Link
                                            className='headContent'
                                            tag={Link}
                                            to="/contact"
                                            exact
                                            activeClassName="router-link-exact-active"
                                        >
                                            H??? Tr???
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
                                                        Qu???n l?? c???a h??ng
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
                                                        Qu???n l?? b??i ????ng
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
                                                        Qu???n l?? nh??n s???
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
                                                        Qu???n l?? c??ng vi???c
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
                                                        Th???i kh??a bi???u
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
                                <Button onClick={() => { nav('/Login') }}>????ng nh???p/????ng k??</Button>
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
                                        <MenuItem>Th??ng tin c?? nh??n</MenuItem>
                                    </Link>

                                    {/* <MenuItem onClick={handleClose}>Th??ng b??o</MenuItem> */}
                                    <MenuItem onClick={handleChangeRole}>Chuy???n sang {(role == "Recruiter") ? "???ng Vi??n" : "Nh?? Tuy???n D???ng"}</MenuItem>
                                    <MenuItem onClick={handleLogout}>????ng xu???t</MenuItem>
                                </Menu>
                            </div>
                        )
                    }
                </Toolbar >
            </AppBar >
        </div >
    );//end of return
};
