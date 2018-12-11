import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import isString from 'lodash/isString';
import React, { Component } from 'react';
import isBoolean from 'lodash/isBoolean';
import isFunction from 'lodash/isFunction';

import styles from './ToggleSwitch.scss';
const cx = classnames.bind(styles);

class ToggleSwitch extends Component {

  // 부모 컴포넌트에서 setStatus로 변경이 되는 enabled의 true/false에 따라 설정해주면 스위치가 이동한다.

  state = { enabled: this.enabledFromProps() }

  isEnabled = () => this.state.enabled

  enabledFromProps() {
    let { enabled } = this.props;

    // If enabled is a function, invoke the function
    enabled = isFunction(enabled) ? enabled() : enabled;

    // Return enabled if it is a boolean, otherwise false
    return isBoolean(enabled) && enabled;
  }

  toggleSwitch = (evt) => {
    evt.persist();
    evt.preventDefault();

    const { onClick, onStateChanged } = this.props;

    this.setState({ enabled: !this.state.enabled }, () => {
      const state = this.state;

      // Augument the event object with SWITCH_STATE
      const switchEvent = Object.assign(evt, { SWITCH_STATE: state });

      // Execute the callback functions
      isFunction(onClick) && onClick(switchEvent);
      isFunction(onStateChanged) && onStateChanged(state);
    });
  }

  render() {
    const { enabled } = this.state;

    // Isolate special props and store the remaining as restProps
    const { enabled: _enabled, theme, onClick, className, onStateChanged, ...restProps } = this.props;

    // Use default as a fallback theme if valid theme is not passed
    const switchTheme = (theme && isString(theme)) ? theme : 'default';

    const switchClasses = cx(
      'switch',
      `switch--${switchTheme}`,
      className
    )

    const togglerClasses = cx(
      'switch-toggle',
      `switch-toggle--${enabled ? 'on' : 'off'}`
    )

    return (
      <div className={switchClasses} onClick={this.toggleSwitch} {...restProps}>
        <div className={togglerClasses}></div>
      </div>
    )
  }
}

ToggleSwitch.propTypes = {
  theme: PropTypes.string,
  enabled: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.func
  ]),
  onStateChanged: PropTypes.func
}

export default ToggleSwitch;
