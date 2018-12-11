import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Logo.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

//형태
// <Logo logo={로고 이미지} />
// 아니면 여기 자체에서 박아줄 수 있다.
const Logo = ({logo}) => {
	return(
		<Link to="/" className={cx('logo')}>
			<img src={logo} alt={"logo"}/>
		</Link>
	);
};

export default Logo;