import React from 'react';
import { Link } from 'react-router-dom';
import Layout from './Layout';
import classNames from 'classnames/bind';
import styles from './Home.scss';

const cx = classNames.bind(styles);

const Home = () => {
  	return (
    	<Layout>
     		<p className={cx('style11')}>Hsello World of React <span>and Webpack!</span></p>
      		<p>
        		<Link to="/dynamic">Navigate to Dynamic Page</Link>
      		</p>
    	</Layout>
  	);
};

export default Home;