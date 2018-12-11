import React from 'react';
import { Link } from 'react-router-dom';
import { pullRight, h1 } from './Layout.css';

const Layout = ({ children }) => {
    return (
        <div>
            <Link to="/">
                <h1 className={h1}>
                    webpack-for-react
                </h1>
            </Link>
            {children}
            <p className={pullRight}>
                Made with mijeong
            </p>
        </div>
    );
};

export default Layout;