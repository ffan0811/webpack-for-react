import React, { Component } from 'react';
import classNames from 'classnames/bind';
import styles from './FloatingButtonContent.scss';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

// const Wrapper = styled('li')(
//   ({ isOpen, slideSpeed, backgroundColor, size, iconColor, margin, direction }) => ({
//     marginTop: (direction === 'down') ? margin : 0,
//     marginBottom: (direction === 'up' && isOpen) ? "3.2rem" : 0,
//     marginLeft: (direction === 'right') ? margin : 0,
//     marginRight: (direction === 'left') ? margin : 0,
//   }),
// );

class FloatingButtonContent extends Component {
    static propTypes = {
        // text: PropTypes.string.isRequired,
        isOpen: PropTypes.bool,
    };

    static defaultProps = {
        isOpen: false,
        to: "/"
    };

    render() {
        const { children, to, className, isOpen, noAni, ...other } = this.props;

        return (
            <li className={cx('wrapper', className, isOpen ? 'active' : 'deactive', noAni ? 'no-ani' : '')} {...other}>
        	    {children}
            </li>
        );
    }
}

export default FloatingButtonContent;
