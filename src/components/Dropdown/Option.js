import React, { Component } from 'react';

class Option extends Component {

	onSelect = () => {
		this.props.onSelect(this.props.index, this.props.value);
	};

	render() {
		return(
			<div
				className={this.props.selected ? this.props.className : this.props.className }
				onClick={this.onSelect}
			>
				{this.props.children}
			</div>
		)
	}
}

export default Option;