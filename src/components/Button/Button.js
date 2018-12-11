import React from 'react';
import styles from './Button.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

//형태
//1. <Button>버튼이름</Button>
//2. <Button disabled>버튼이름</Button>

const Button = ({children, className, style, disabled, onClick, ...rest}) => {
	return (
		<div
			className={cx('button', disabled ? 'disabled' : null, className)}
			style={{ ...style }}
			onClick={onClick}
			{...rest}
		>
			{children} 
		</div>
	);
};

export default Button;