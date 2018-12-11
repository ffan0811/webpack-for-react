import React, { Component, Children, cloneElement, Fragment } from "react";
import classNames from 'classnames/bind';
import styles from './Dropdown.scss';

import arrowIcon from './arrow_icon.svg';

const cx = classNames.bind(styles);

// 형태
// import Dropdown, { Option } from '.../Dropdown';
// <Dropdown onSelect={value => console.log(`Selected: ${value}`)}><Option value="옵션1">옵션1</Option><Option value="옵션2">옵션2</Option></Dropdown>

class Dropdown extends Component {

	state = {
		activeOptionIndex: 0,
    	isOpen: false
	}

	getAdditionalProps = (index, props) => ({
	    onSelect: this.onSelect,
	    index,
	    selected: index === this.state.activeOptionIndex,
	    ...props
	});

	// 리스트에 현재 선택된 항목도 나옴
	// getChildrenOptionssWithProps = () => {
	// 	const selected = this.getAdditionalProps().selected;

	//     return Children.map(this.props.children, (child, index) => {
	//     	return cloneElement(child, this.getAdditionalProps(index, child.props));
	//     });
	// };

	// 리스트에 현재 선택된 항목은 나오지 않음
	getChildrenOptionssWithProps = () => {
	    return Children.map(this.props.children, (child, index) => {
	        if (index !== this.state.activeOptionIndex){
	            return cloneElement(child, this.getAdditionalProps(index, child.props));
	        }
	        
	        return;
	    }
	    );
	};

	getActiveOptionLabel = () => {
	    const { children } = this.props;
	    const { activeOptionIndex } = this.state;
	    const currentChildren = children[activeOptionIndex];

	    if (currentChildren) {
	      return currentChildren.props.children;
	    }

	    return false;
	};

	toggleList = () => {
	    this.setState({ isOpen: !this.state.isOpen });
	};

	onSelect = (optionIndex, value) => {
	    const { onSelect } = this.props;

	    this.setState({
	      activeOptionIndex: optionIndex,
	      isOpen: false
	    });

	    if (onSelect !== "undefined") onSelect(value);

	};

	render(){

		const childrenOptionssWithProps = this.getChildrenOptionssWithProps();
    	const label = this.getActiveOptionLabel();

		return(
			<Fragment>
				{this.state.isOpen ? <div onClick={this.toggleList} className={cx('cover')}></div> : null}
				<div className={cx('dropdown')}>
					
					<div className={cx('shown-list')} onClick={this.toggleList}>
						{label || "클릭하세요."}
						<img className={cx(this.state.isOpen ? 'arrow-open' : 'arrow-close')} src={arrowIcon} alt="목록보기"/>
					</div>

					<div className={cx('dropdown-list', this.state.isOpen ? 'open' : 'close')}>
						{childrenOptionssWithProps}
					</div>
				</div>
			</Fragment>
		)
	}
}

export default Dropdown;