import React, { Fragment } from 'react';
import classNames from 'classnames/bind';
import { Scrollbars } from 'react-custom-scrollbars';
import styles from './ScrollBox.scss';

const cx = classNames.bind(styles);

// 형태
// <ScrollBars><div><p>스크롤 박스에 들어갈 내용</p></div></ScrollBox>

// <ScrollBars>에 들어있는 style값은 default 값입니다.

const ScrollBox = ({title, className, children}) => {
	return(
		<Scrollbars
			style={{height: '100px', width: '500px'}}
			className={className}
		>
			{children}
		</Scrollbars>
	);
};

export default ScrollBox;
