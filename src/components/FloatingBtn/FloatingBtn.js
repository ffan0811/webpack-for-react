import React, { Component } from 'react';
import classNames from 'classnames/bind';
import styles from './FloatingBtn.scss';

import FloatingButtonMenu from './FloatingButtonMenu';
import FloatingButton from './FloatingButton';
import FloatingButtonContent from './FloatingButtonContent';

import walletIcon from 'static/images/wallet_icon.svg';

const cx = classNames.bind(styles);

//이 컴포넌트는 나중에 수정

class FloatingBtn extends Component {
	render(){
		return(
			<div className={cx('fab')}>
				<FloatingButtonMenu
		        	direction="up"
		        >
		            <FloatingButton
		              	iconResting={<p>안열림</p>}
		              	iconActive={<p>열림</p>}
		            />
					<FloatingButtonContent>옵션1</FloatingButtonContent>
					<FloatingButtonContent>옵션2</FloatingButtonContent>
					<FloatingButtonContent>옵션3</FloatingButtonContent>
		        </FloatingButtonMenu>
			</div>
		)
	}
}

export default FloatingBtn;