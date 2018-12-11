import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styledJss from 'styled-components';

export const DIRECTIONS = {
  up: 'column-reverse',
  down: 'column',
  left: 'row-reverse',
  right: 'row',
};

const StyledUl = styledJss('ul')(
  ({ direction }) => ({
    display: 'flex',
    width: 'fit-content',
    listStyle: 'none',
    margin: '0',
    padding: '0',
    flexDirection: DIRECTIONS[direction],
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative'
  }),
);

class FloatingButtonMenu extends Component {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.arrayOf(PropTypes.element).isRequired,
    direction: PropTypes.string,
  };

  static defaultProps = {
    className: '',
    direction: 'down',
  };

  state = {
    isOpen: false,
    noAni: true,
  };

  toggleMenu = (event) => {
    event.preventDefault();
    this.setState({
      isOpen: !this.state.isOpen,
      noAni: false,
    });
  };

  render() {
    const { direction, className } = this.props;
    const { isOpen, noAni } = this.state;
    const childrenWithProps = React.Children.map(this.props.children, child =>
      React.cloneElement(child, {
        isOpen,
        noAni,
        direction,
      }),
    );

    return (
      <StyledUl
        className={className}
        onClick={this.toggleMenu}
        direction={direction}
      >
        {childrenWithProps}
      </StyledUl>
    );
  }
}

export default FloatingButtonMenu;
