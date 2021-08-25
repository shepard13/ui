import React from "react";
import NavMenu from "../nav-menu/nav-menu";
const Header = () => {
    return (
        <header>
            <nav>
                <div class='nav-wrapper'>
                    <a href='#!' class='brand-logo center'>
                        Logo
                    </a>
                    <a
                        href='#'
                        data-target='slide-out'
                        class='sidenav-trigger show-on-large'
                    >
                        <i class='material-icons'>menu</i>
                    </a>

                    <ul class='right'>
                        <a
                            class='waves-effect waves-light btn modal-trigger'
                            href='#modal1'
                        >
                            LOGIN
                            <i class='material-icons right'>login</i>
                        </a>
                    </ul>
                </div>
            </nav>
            <NavMenu />
        </header>
    );
};

export default Header;
