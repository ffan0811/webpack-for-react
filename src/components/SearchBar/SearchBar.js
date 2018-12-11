import React, { Component } from 'react';
import Input from '../Input';

class SearchBar extends Component {

	static defaultProps = {
		lists: []
	}

	state = {
		updateList: this.props.lists,
		focus: false,
		searchInput: ''
	};

	handleUpdate = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		
		var searchQuery = value.toLowerCase();
		var ListsFilter = this.props.lists.filter(function(el){
			var searchValue = el.list.toLowerCase();
			return searchValue.indexOf(searchQuery) !== -1;
		});
		this.setState({
			[name]: value,
			updateList: ListsFilter,
			focus: true
		});
		if(value.length === 0){
			this.setState({
				focus: false
			})
		}
	}

	render(){
		return(
			<div className={this.props.className}>
				<Input
					name="searchInput"
					value={this.state.searchInput}
					onChange={this.handleUpdate}
				/>
				<div className='search-icon'>
					{this.state.focus ? <span onClick={() => this.setState({ focus: false, searchInput: '' })}>취소</span> : <span>검색</span>}
				</div>
			</div>
		)
	}
}

export default SearchBar;