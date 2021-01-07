import React, { Component } from 'react';
import './SearchBar.css';



class SearchBar extends Component {

	constructor(props) {
		super(props);
		this.state = {
			term: '',
			location: '',
			sortBy: 'best_match'
		}
		this.sortByOptions = {
			'Best Match': 'best_match',
			'Highest Rated': 'rating',
			'Most Reviewed': 'review_count',
			'Distance': 'distance'
		};
	}

	getSortByClass = (sortByOption) => {
		if (this.state.sortBy === sortByOption) {
			return 'active'
		} else {
			return ''
		}
	}

	handleSortByChange = (sortByOption) => {
		this.setState({...this.state, sortBy: sortByOption})
	}

	handleTermChange = (e) => {
		this.setState({...this.state, term: e.target.value})
	}

	handleLocationChange = (e) => {
		this.setState({...this.state, location: e.target.value})
	}

	renderSortByOptions =() => {
		return Object.keys(this.sortByOptions).map((sortByOption) => {
			let sortByOptionValue = this.sortByOptions[sortByOption];
			return <li onClick={this.handleSortByChange.bind(this, sortByOptionValue)} className={this.getSortByClass(sortByOptionValue)} key={sortByOptionValue}>{sortByOption}</li>;
		});
	}

	handleSearch = (e) => {
		this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy)
		e.preventDefault()
	}

	render() {
		return (
			<div className="SearchBar">
				<div className="SearchBar-sort-options">
					<ul>{this.renderSortByOptions()}</ul>
				</div>
				<div className="SearchBar-fields">
					<input onChange={this.handleTermChange} placeholder="Search Businesses" />
					<input onChange={this.handleLocationChange}  placeholder="Where?" />
				</div>
				<div className="SearchBar-submit">
					<a onClick={this.handleSearch} href="www.#.com">Let's Go</a>
				</div>
			</div>
		);
	}
}

export default SearchBar;
