import React, { Component } from 'react';
import './CountrySelector.css';

class CountrySelector extends Component {
	changeSelection(value) {
		if(value === "None") {
			this.props.changeHandler(null);
		} else {
			const country = this.props.countries.find(country => (
				country.name === value
			))
			this.props.changeHandler(country);
		}
	}
	render() {
		const options = this.props.countries
			.map((country, i) => (
				<option
					value={country.name}
					key={i}
				>
					{country.name}
				</option>
			));
		const loading = (this.props.countries.length === 0)
			? <option
					value="None"
				>
					Loading Data...
				</option>
			:	<option
					value="None"
				>
					Select one...
				</option>;
		return (
			<div
				className="country__selector"
			>
				<form>
					<label
						htmlFor="country"
					>
						Select a country:
					</label>
					<select
						id="country"
						name="country"
						onChange={e => this.changeSelection(e.target.value)}
					>
						{loading}
						{options}
					</select>
				</form>
			</div>
		);		
	}
}

CountrySelector.defaultProps = {
	countries: []
};

export default CountrySelector;