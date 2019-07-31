import React from 'react';
import './Header.css';

export default class Header extends React.Component {
    render() {
        return(
            <div className="Header">
                <div className="Header-logo">              
                    <img src="https://minisitios.ripley.cl/minisitios/home/campanas/despacho/img/bg-mb.svg" alt="" />                    
                </div>         
            </div>
        );
    }
}