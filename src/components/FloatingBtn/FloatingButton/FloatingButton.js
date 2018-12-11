/* eslint-disable react/no-unused-prop-types */
import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled('div')(
  ({ backgroundColor, size, iconColor, isOpen }) => ({
    display: 'flex',
    border: 'none',
    cursor: 'pointer',
    outline: 'none',
    padding: '0',
    WebkitUserDrag: 'none',
    justifyContent: 'center',
    alignItems: 'center',
    WebkitTransition: '-webkit-transform 300ms',
    transition: 'transform 300ms',
    WebkitTransform: `rotate(${isOpen ? 180 : 0}deg)`,
	transform: `rotate(${isOpen ? 180 : 0}deg)`, 
    zIndex: '32'
  })
);
// const IconResting = ({ iconResting, isOpen }) =>
//   styled(iconResting)({
//     position: 'absolute',
//     opacity: isOpen ? 0 : 1,
//   });
// const IconActive = ({ iconActive, isOpen }) =>
//   styled(iconActive)({
//     position: 'absolute',
//     opacity: isOpen ? 1 : 0,
// });

class FloatingButton extends Component {
  static propTypes = {
    // iconResting: PropTypes.func.isRequired,
    // iconActive: PropTypes.func.isRequired,
    isOpen: PropTypes.bool,
  };

  static defaultProps = {
    isOpen: false
  };

  render() {
    const { iconResting, iconActive, isOpen } = this.props;
    // const StyledIconResting = IconResting({ iconResting, isOpen });
    // const StyledIconActive = IconActive({ iconActive, isOpen });

    return (
      <Wrapper {...this.props}>
      	{isOpen ? <div>{iconResting}</div> : <div>{iconActive}</div>}
      </Wrapper>
    );
  }
}

export default FloatingButton;
