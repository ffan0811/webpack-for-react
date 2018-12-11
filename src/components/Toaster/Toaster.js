import React, { Fragment } from 'react';
import classNames from 'classnames/bind';
import styles from './Toaster.scss';

import Modal from 'components/atoms/Modal';

import closeIcon from 'static/images/close_icon.svg';

const cx = classNames.bind(styles);

const Toaster = ({show, children, onClose, close, Yes, No, Warn}) => {
	return(
		<Fragment>
				{show &&
					<div className={cx('toast-container')}>
						<Modal className={cx('toaster', Yes ? 'yes': '', No ? 'no': '', Warn ? 'warn': '')} visible>
							{close ? <div onClick={onClose} className={cx('close')}>
								<img src={closeIcon} alt="닫기"/>
							</div> : null}
							{children}
						</Modal>
					</div>
				}
		</Fragment>
	)
}

export default Toaster;
