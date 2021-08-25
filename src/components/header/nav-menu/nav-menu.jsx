import React, { Component } from "react";
import { Link } from "react-router-dom";
import adminBack from "../../image/admin-back.png";
import adminIcon from "../../image/admin-settings-male.png";
export default class NavMenu extends Component {
    componentDidMount() {
        const M = window.M;
        document.addEventListener("DOMContentLoaded", function () {
            const nav = document.querySelectorAll(".sidenav");
            M.Sidenav.init(nav, {});
        });
    }

    render() {
        return (
            <ul id='slide-out' className='sidenav'>
                <li>
                    <div className='user-view'>
                        <div className='background'>
                            <img src={adminBack} />
                        </div>
                        <a href='#user'>
                            <img className='circle' src={adminIcon} />
                        </a>
                        <a href='#name'>
                            <span className='white-text name'>Admin</span>
                        </a>
                        <a href='#email'>
                            <span className='white-text email'>
                                jdandturk@gmail.com
                            </span>
                        </a>
                    </div>
                </li>
                <li>
                    <Link
                        className='waves-effect sidenav-close'
                        to='/Employees'
                    >
                        <i className='material-icons'>badge</i>
                        Employees
                        <span className='new badge'>4</span>
                    </Link>
                </li>
                <li>
                    <div className='divider'></div>
                </li>
                <li>
                    <a href='#!'>Menu1</a>
                </li>

                <li>
                    <div className='divider'></div>
                </li>
            </ul>
        );
    }
}
