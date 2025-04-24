import React from 'react'
import { Link } from 'react-router-dom';
import logoSvg from '../../assets/img/pizza-logo.svg';
import '../../scss/app.scss';

function Basket() {
    return (
        <div className="wrapper">
            <div className="header">
                <div className="container">
                <Link to="/">
                    <div className="header__logo">
                        <img width="38" src={logoSvg} alt="Pizza logo" />
                        <div>
                        <h1>React Pizza</h1>
                        <p>самая вкусная пицца во вселенной</p>
                        </div>
                    </div>
                </Link>
                </div>
            </div>
            <div className="content">
                <h1>CART</h1>
            </div>
        </div>
    )
}

export default Basket
