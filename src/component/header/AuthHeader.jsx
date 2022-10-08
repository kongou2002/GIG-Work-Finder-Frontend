import { useAuth0 } from "@auth0/auth0-react";
import { AccountCircle } from "@mui/icons-material";
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, IconButton, Menu, MenuItem, Toolbar, Typography } from "@mui/material";
import React, { useState } from 'react';
import "./style.scss";
// <<<<<<< HEAD
// =======
// import { Stack } from "@mui/system";
// import Logo from '../../asset/image/logo.jpg'
// import { Button } from "@mui/material";
// >>>>>>> 79a006337449df1f7c04ad71ace3f5032742c37b
export default function AuthHeader() {
    const [isOpen, setIsOpen] = useState(false);
    const [data, setData] = useState({
        email: '',
        image: '',
    });
    const {
        user,
        isAuthenticated,
        loginWithRedirect,
        logout,
    } = useAuth0();
    const get = () => {
        setData(user.email, user.picture)
    }
    console.log()
    const toggle = () => setIsOpen(!isOpen);

    const logoutWithRedirect = () =>
        logout({
            returnTo: window.location.origin,
        });
// <<<<<<< HEAD
    const [anchorEl, setAnchorEl] = React.useState(null);


    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <div>
            
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        GIG-worker
                    </Typography>
                    {isAuthenticated && (
                        <div>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleMenu}
                                color="inherit"
                            >
                                <AccountCircle />
                            </IconButton>
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
                                <MenuItem onClick={handleClose}>Profile</MenuItem>
                                <MenuItem onClick={handleClose}>My account</MenuItem>
                                <MenuItem onClick={handleClose}>Log out</MenuItem>
                            </Menu>
=======
    {/* return (
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
                                <RouterNavLink
                                    className='headContent'
                                    tag={RouterNavLink}
                                    to="/"
                                    exact
                                    activeClassName="router-link-exact-active"
                                >
                                    Việc Làm
                                </RouterNavLink>
                                <RouterNavLink
                                    className='headContent'
                                    tag={RouterNavLink}
                                    to="/company"
                                    exact
                                    activeClassName="router-link-exact-active"
                                >
                                    Công Ty
                                </RouterNavLink>
                                <RouterNavLink
                                    className='headContent'
                                    tag={RouterNavLink}
                                    to="/news"
                                    exact
                                    activeClassName="router-link-exact-active"
                                >
                                    Tin Tức
                                </RouterNavLink>
                                <RouterNavLink
                                    className='headContent'
                                    tag={RouterNavLink}
                                    to="/support"
                                    exact
                                    activeClassName="router-link-exact-active"
                                >
                                    Hỗ Trợ
                                </RouterNavLink>
                                {isAuthenticated &&(
                                    <div>
                                        <RouterNavLink
                                            tag={RouterNavLink}
                                            to="/external-api"
                                            exact
                                            activeClassName="router-link-exact-active"
                                        >
                                            External API
                                        </RouterNavLink>
                                    </div>
                                )}
                            </div>
                            {isAuthenticated && (
                                <div>
                                    <RouterNavLink
                                        tag={RouterNavLink}
                                        to="/external-api"
                                        exact
                                        activeClassName="router-link-exact-active"
                                    >
                                        External API
                                    </RouterNavLink>
                                </div>
                            )}
                        </div>

                        <div className='log-in-out'>
                            <div className="d-none d-md-block" navbar>
                                {isAuthenticated && (
                                    <div nav inNavbar>
                                        <div nav caret id="profileDropDown">
                                            <img
                                                src={user.picture}
                                                alt="Profile"
                                                className="nav-user-profile rounded-circle"
                                                width="50"
                                            />
                                        </div>
                                        <div>
                                            <div header>{user.name}</div>
                                            <RouterNavLink
                                                tag={RouterNavLink}
                                                to="/profile"
                                                className="dropdown-profile"
                                                activeClassName="router-link-exact-active"
                                            >
                                                Profile
                                            </RouterNavLink>
                                            <RouterNavLink
                                                id="qsLogoutBtn"
                                                onClick={() => logoutWithRedirect()}
                                            >
                                                Logout
                                            </RouterNavLink>
                                        </div>
                                    </div>
                                )}
                            </div>
                            {!isAuthenticated && (
                                <div className="d-md-none" navbar>
                                    <div className='btn-login'>
                                        <Button
                                            id="qsLoginBtn"
                                            color="primary"
                                            block
                                            onClick={() => loginWithRedirect({})}
                                        >
                                            Đăng nhập
                                        </Button>
                                    </div>
                                </div>
                            )} */}
{/* >>>>>>> 79a006337449df1f7c04ad71ace3f5032742c37b */}
                        </div>
                    )}
                </Toolbar>
            </AppBar>
        </div>
    );
};
