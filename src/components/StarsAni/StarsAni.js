import React, { Fragment } from 'react';
import styles from './StarsAni.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const StarsAni = () => {
  return(
    <Fragment>
      <div className={cx('star','stars0')}></div>
      {/*<div className={cx('star','stars1')}></div>
      <div className={cx('star','stars2')}></div>*/}
    </Fragment>

  )
};

export default StarsAni;
