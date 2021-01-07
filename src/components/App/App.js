import React, { Component } from 'react';
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';
import './App.css';
import Yelp from '../../util/Yelp'

// const business = {
// 	imageSrc: './pizza.webp',
// 	name: 'MarginOtto Pizzeria',
// 	address: '1010 Paddington Way',
// 	city: 'Flavortown',
// 	state: 'NY',
// 	zipCode: '10101',
// 	category: 'Italian',
// 	rating: 4.5,
// 	reviewCount: 90
// };

// const businesses = [business, business, business, business, business, business]


class App extends Component {

	state = {
		businesses : []
	}

	searchYelp = (term, location, sortBy) => {
		Yelp.search(term, location, sortBy)
		.then(businesses => this.setState({businesses: businesses}))
	}

	render() {
		return (
			<div>
			<h1>Apollo Project</h1>
      			<SearchBar searchYelp={this.searchYelp}/>
				<BusinessList businesses={this.state.businesses}/>
			</div>
		);
	}
}

export default App;
