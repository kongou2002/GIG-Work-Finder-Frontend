import { useAuth0 } from "@auth0/auth0-react";
import React, { useState } from 'react';
import { NavLink as RouterNavLink } from 'react-router-dom';
// import "./style.scss";
import { Stack } from "@mui/system";
export default function AuthHeader() {
    const [isOpen, setIsOpen] = useState(false);
    const {
        user,
        isAuthenticated,
        loginWithRedirect,
        logout,
    } = useAuth0();
    console.log(user)
    const toggle = () => setIsOpen(!isOpen);

    const logoutWithRedirect = () =>
        logout({
            returnTo: window.location.origin,
        });
    return (
        <div className="nav-container">
            <Stack color="light" light expand="md">
                <div className="container">
                    <div className="logo" />
                    <div onClick={toggle} />
                    <div isOpen={isOpen} navbar>
                        <div className="mr-auto" navbar>
                            <div>
                                <RouterNavLink
                                    tag={RouterNavLink}
                                    to="/job"
                                    exact
                                    activeClassName="router-link-exact-active"
                                >
                                    việc làm
                                </RouterNavLink>
                                <RouterNavLink
                                    tag={RouterNavLink}
                                    to="/company"
                                    exact
                                    activeClassName="router-link-exact-active"
                                >
                                    công ty
                                </RouterNavLink>
                                <RouterNavLink
                                    tag={RouterNavLink}
                                    to="/news"
                                    exact
                                    activeClassName="router-link-exact-active"
                                >
                                    tin tức
                                </RouterNavLink>
                                <RouterNavLink
                                    tag={RouterNavLink}
                                    to="/support"
                                    exact
                                    activeClassName="router-link-exact-active"
                                >
                                    hỗ trợ
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
                                <div>
                                    <button
                                        id="qsLoginBtn"
                                        color="primary"
                                        block
                                        onClick={() => loginWithRedirect({})}
                                    >
                                        Log in
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </Stack>
        </div>
    );
};
