import React from 'react';
import styles from './Input.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Input = ({fullWidth, className, readOnly, ...rest}) => {
  return (
    <input
      autoComplete="off"
      className={cx('input', {'full-width': fullWidth}, className, readOnly ? 'read-only' : '')}
      readOnly={readOnly}  {...rest}/>
  );
};

export default Input;