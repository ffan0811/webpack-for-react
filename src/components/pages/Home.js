import React from 'react';
import { Link } from 'react-router-dom';
import Layout from 'components/Layout';
import classNames from 'classnames/bind';
import styles from './Home.scss';

const cx = classNames.bind(styles);

const Home = () => {
  	return (
    	<Layout>
     		<p className={cx('style11')}>Hsello World of React <span>and Webpack!</span></p>
      		<p>
        		<Link to="/dynamic">zzNddasdfsdavigate to Dynamic Page</Link>
      		</p>
    	</Layout>
  	);
};

export default Home;