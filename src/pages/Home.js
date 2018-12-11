import React from 'react';
import { Link } from 'react-router-dom';
import Layout from 'components/Layout';
import classNames from 'classnames/bind';
import styles from './Home.scss';

import SearchBar from '../components/SearchBar';


const cx = classNames.bind(styles);

const Home = () => {
  	return (
    	<Layout>
     		<p className={cx('style11')}>zHsello World of React <span>and Webpack!</span></p>
      		<p>
        		<Link to="/dynamic">zzsNddasdfsdavigate to Dynamic Page</Link>
      		</p>
			
			<SearchBar/>
			
    	</Layout>
  	);
};

export default Home;