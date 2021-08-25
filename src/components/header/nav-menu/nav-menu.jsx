import React, { Component } from "react";
import { Link } from "react-router-dom";

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
            <ul id='slide-out' class='sidenav'>
                <li>
                    <Link class='waves-effect sidenav-close' to='/Employees'>
                        Employees
                    </Link>
                </li>
                <li>
                    <div class='divider'></div>
                </li>
                <li>
                    <a class='waves-effect sidenav-close' href='#!'>
                        Menu 2
                    </a>
                </li>
            </ul>
        );
    }
}
