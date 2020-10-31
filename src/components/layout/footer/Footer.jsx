import React, {Component} from 'react';

import './Footer.scss';


export default class Footer extends Component {
    state = {  }
    render() { 
        return ( 
            <footer className="footer">
                <div className="footer__content">
                    © 2020 | All rights reserved
                </div>
            </footer>
         );
    }
}