import React, {Component} from 'react';
import { Link } from "react-router-dom";

import logo from 'assets/logo.svg';
import './Header.scss';


class Header extends Component {
    state = {  }
    render() { 
        return ( 
            <header className="header">
                <div className="header__left">
                    <Link to="/" className="header__logo">
                        <img src={ logo } alt="Handy.io" />
                    </Link>
                    <nav className="header__nav">
                        <ul>
                            <li>
                                <Link to="/services">Services</Link>
                            </li>
                            <li>
                                <Link to="/about">About Handy</Link>
                            </li>
                            <li>
                                <Link to="/contact">Contact us</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="header__right">
                    <nav className="header__nav">
                        <ul>
                            <li>
                                <Link to="/register-contractor">
                                    <u>Become a Contractor</u>
                                </Link>
                            </li>
                            <li>
                                <Link to="/authentication" className="button button--outline" role="button">
                                    Login
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
         );
    }
}
 
export default Header;