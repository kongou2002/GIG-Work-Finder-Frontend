import { useAuth0 } from "@auth0/auth0-react";
import React, { useState } from 'react';
import { NavLink as RouterNavLink } from 'react-router-dom';
import "./style.scss";
import { Stack } from "@mui/system";
import Logo from '../../asset/image/logo.jpg'
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
    return (
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
                                {/* {isAuthenticated &&(
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
                                )} */}
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
                                        <button
                                            id="qsLoginBtn"
                                            color="primary"
                                            block
                                            onClick={() => loginWithRedirect({})}
                                        >
                                            Đăng nhập
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </Stack>
        </div>
    );
};
