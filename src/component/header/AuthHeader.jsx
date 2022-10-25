import { ForkRight } from "@mui/icons-material";
import { AppBar, Avatar, Button, Menu, MenuItem, Toolbar, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import Profile from "../../pages/user/Profile";
import Login from "../authentication/login";
import Logout from "../authentication/logout";
import "./style.scss";
// <<<<<<< HEAD
// =======
// import { Stack } from "@mui/system";
// import Logo from '../../asset/image/logo.jpg'
// import { Button } from "@mui/material";
// >>>>>>> 79a006337449df1f7c04ad71ace3f5032742c37b
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
    const Logo = 'logo1.jpg';//url cuar logo owr day

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
        window.location.reload();
    }
    const handleButton = (event) => {
        const eventRole = event.target.value;
        localStorage.setItem("role", eventRole);
        setRole(eventRole);
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
                            <div>
                                <div className='logo'>
                                    <img src={Logo} alt='' style={{ width: "100px", height: "60px" }} />
                                </div>
                                <div onClick={toggle} />
                                <div isOpen={isOpen} navbar>
                                    <div className="mr-auto" navbar>
                                        <div>
                                            <Link
                                                className='headContent'
                                                tag={Link}
                                                to="/"
                                                exact
                                                activeClassName="router-link-exact-active"
                                            >
                                                Việc Làm
                                            </Link>
                                            <Link
                                                className='headContent'
                                                tag={Link}
                                                to="/company"
                                                exact
                                                activeClassName="router-link-exact-active"
                                            >
                                                Công Ty
                                            </Link>
                                            <Link
                                                className='headContent'
                                                tag={Link}
                                                to="/news"
                                                exact
                                                activeClassName="router-link-exact-active"
                                            >
                                                Tin Tức
                                            </Link>
                                            <Link
                                                className='headContent'
                                                tag={Link}
                                                to="/support"
                                                exact
                                                activeClassName="router-link-exact-active"
                                            >
                                                Hỗ Trợ
                                            </Link>
                                            {isAuthenticated && role == 'Recruiter' && (
                                                <div>
                                                    <div>
                                                        <Link
                                                            tag={Link}
                                                            to="/external-api"
                                                            exact
                                                            activeClassName="router-link-exact-active"
                                                        >
                                                            Quản lý cửa hàng
                                                        </Link>
                                                    </div>
                                                    <div>
                                                        <Link
                                                            tag={Link}
                                                            to="/external-api"
                                                            exact
                                                            activeClassName="router-link-exact-active"
                                                        >
                                                            Quản lý bài đăng
                                                        </Link>
                                                    </div>
                                                    <div>
                                                        <Link
                                                            tag={Link}
                                                            to="/external-api"
                                                            exact
                                                            activeClassName="router-link-exact-active"
                                                        >
                                                            Quản lý nhân sự
                                                        </Link>
                                                    </div>
                                                </div>

                                            )}
                                            {isAuthenticated && role == 'Applicant' && (
                                                <div>
                                                    <div>
                                                        <Link
                                                            tag={Link}
                                                            to="/external-api"
                                                            exact
                                                            activeClassName="router-link-exact-active"
                                                        >
                                                            Quản lý công việc
                                                        </Link>
                                                    </div>
                                                    <div>
                                                        <Link
                                                            tag={Link}
                                                            to="/external-api"
                                                            exact
                                                            activeClassName="router-link-exact-active"
                                                        >
                                                            Thời khóa biểu
                                                        </Link>
                                                    </div>
                                                </div>

                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Stack>
                    </div>
                    {/* Account Authentication show below */}
                    {!isAuthenticated && (
                        <div style={{ flex: "right" }}>
                            <div style={{ display: 'inline-block' }}>
                                <form>
                                    <input name="role" id="applicant" type="radio" value="Applicant" onClick={handleButton} checked style={{ color: "red" }} />
                                    <label for="applicant" style={{ paddingRight: '5px' }}>Applicant</label>
                                    <input name="role" id="recruiter" type="radio" onClick={handleButton} value="Recruiter" />
                                    <label for="recruiter">Recruiter</label>
                                </form>
                            </div>
                            <Login />
                        </div>
                    )}


                    {isAuthenticated && (
                        <div style={{ float: "right" }}>
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
                                    <MenuItem>Profile</MenuItem>
                                </Link>

                                <MenuItem onClick={handleClose}>My account</MenuItem>
                                <MenuItem onClick={handleChangeRole}>Change to {(role == "Recruiter") ? "Applicant" : "Recruiter"}</MenuItem>
                                <MenuItem onClick={handleLogout}>Log out</MenuItem>
                            </Menu>
                        </div>
                    )}
                </Toolbar>
            </AppBar>
        </div >
    );//end of return
};
