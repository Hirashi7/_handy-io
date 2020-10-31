import React, {Component} from 'react';
import './TopServices.scss';

import { Link } from "react-router-dom";

import iconElectrician from 'assets/icon-electrician.svg';

export default class TopServices extends Component {

    render() { 
        return (
           <div className="top-services">
               <h4 className="top-services__heading">Top services</h4>
               <div className="top-services__wrapper">
                <article class="top-services__item">
                    <div className="top-services__item-content">
                        <img src={ iconElectrician } alt="Electrician" className="top-services__item-img" loading="lazy"/>
                        <h2 className="top-services__item-name">Electrician</h2>
                    </div>
                </article>
                <article class="top-services__item">
                    <div className="top-services__item-content">
                        <img src={ iconElectrician } alt="Electrician" className="top-services__item-img" loading="lazy"/>
                        <h2 className="top-services__item-name">Electrician</h2>
                    </div>
                </article>
                <article class="top-services__item">
                    <div className="top-services__item-content">
                        <img src={ iconElectrician } alt="Electrician" className="top-services__item-img" loading="lazy"/>
                        <h2 className="top-services__item-name">Electrician</h2>
                    </div>
                </article>
                <article class="top-services__item">
                    <div className="top-services__item-content">
                        <img src={ iconElectrician } alt="Electrician" className="top-services__item-img" loading="lazy"/>
                        <h2 className="top-services__item-name">Electrician</h2>
                    </div>
                </article>
               </div>
               <div className="top-services__actions">
                    <Link to="/services">Go to full list...</Link>
               </div>
           </div>
        );
    }
}