import React, { Fragment, useState } from "react";
import NavMenu from "./nav-menu/nav-menu";
import SignIn from "./sign-in/sign-in";
import { useHistory } from "react-router-dom";

const MenuBtn = () => {
    return (
        <a
            href='#'
            data-target='slide-out'
            className=' sidenav-trigger show-on-large'
        >
            <i className='material-icons'>menu</i>
        </a>
    );
};

const UserLogedIn = ({ setIsLogin }) => {
    let history = useHistory();

    const redirect = () => {
        history.push("/");
    };
    return (
        <Fragment>
            <a
                className='waves-effect waves-light btn modal-trigger'
                onClick={() => {
                    setIsLogin(false);
                    redirect();
                }}
            >
                LOG OUT
                <i className='material-icons right'>logout</i>
            </a>
        </Fragment>
    );
};

const UserAnonim = () => {
    return (
        <a
            className='waves-effect waves-light btn modal-trigger'
            href='#modal1'
        >
            LOG IN
            <i className='material-icons right'>login</i>
        </a>
    );
};

const Header = ({ isLogin, setIsLogin }) => {
    return (
        <header>
            <nav>
                <div className='nav-wrapper'>
                    <a href='#!' className='brand-logo center'>
                        Logo
                    </a>
                    {isLogin ? <MenuBtn /> : null}
                    <ul className='right'>
                        {isLogin ? (
                            <UserLogedIn setIsLogin={setIsLogin} />
                        ) : (
                            <UserAnonim />
                        )}
                    </ul>
                </div>
            </nav>
            <NavMenu />
            <SignIn setIsLogin={setIsLogin} isLogin={isLogin} />
        </header>
    );
};

export default Header;
