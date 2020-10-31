import React from 'react';
import './Home.scss';

import TopServices from 'components/services/top-services/TopServices.jsx';

export default class Home extends React.Component {
    render(){
        return (
            <main className="container home">
                <div className="home__hero">
                    <h1>
                        Find a <u>professional</u><br />
                        you can <u>trust</u>
                    </h1>
                </div>
                <div className="home__search">
                    <form>
                        <input type="text" placeholder="Type service name..."/>
                        <button type="submit" className="button button--primary">Search for professionals</button>
                    </form>
                </div>
                <div className="home__top-services">
                    <TopServices />
                </div>
            </main>
        );
    }
}