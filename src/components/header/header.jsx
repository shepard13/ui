import React, { useState } from "react";
import NavMenu from "../nav-menu/nav-menu";

const MenuBtn = () => {
    return (
        <a
            href='#'
            data-target='slide-out'
            class=' sidenav-trigger show-on-large'
        >
            <i class='material-icons'>menu</i>
        </a>
    );
};

const UserLogedIn = () => {
    return (
        <li>
            <a href='#'>Admin</a>
        </li>
    );
};

const UserAnonim = () => {
    return (
        <a class='waves-effect waves-light btn modal-trigger' href='#modal1'>
            LOGIN
            <i class='material-icons right'>login</i>
        </a>
    );
};

const Header = ({ isLogin }) => {
    return (
        <header>
            <nav>
                <div class='nav-wrapper'>
                    <a href='#!' class='brand-logo center'>
                        Logo
                    </a>
                    {isLogin ? <MenuBtn /> : null}
                    <ul class='right'>
                        {isLogin ? <UserLogedIn /> : <UserAnonim />}
                    </ul>
                </div>
            </nav>
            <NavMenu />
        </header>
    );
};

export default Header;
