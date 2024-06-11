import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <div className="logo">pluB</div>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/dashboard">Dashboard</Link></li>
                    <li><Link to="/payment">Payment</Link></li>
                    <li><Link to="/exchange">Exchange</Link></li>
                    <li><Link to="/tariffs">Tariffs</Link></li>
                    <li><Link to="/marketplace">Marketplace</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
