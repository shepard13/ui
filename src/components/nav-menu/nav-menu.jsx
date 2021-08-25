import React, { Component } from "react";

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
                    <a class='waves-effect' href='#!'>
                        Menu 1
                    </a>
                </li>
                <li>
                    <div class='divider'></div>
                </li>
                <li>
                    <a class='waves-effect' href='#!'>
                        Menu 2
                    </a>
                </li>
            </ul>
        );
    }
}
