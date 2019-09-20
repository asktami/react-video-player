import React from 'react';

export class Menu extends React.Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick = e => {
		const text = e.target.value;
		this.props.chooseVideo(text);
	};

	render() {
		return (
			<form>
				<input
					type="radio"
					name="src"
					id="fast"
					value="fast"
					defaultChecked={'true'}
					onChange={this.handleClick}
				/>
				<label htmlFor="fast">fast</label>{' '}
				<input
					type="radio"
					name="src"
					id="slow"
					value="slow"
					onChange={this.handleClick}
				/>
				<label htmlFor="slow">slow</label>{' '}
				<input
					type="radio"
					name="src"
					id="cute"
					value="cute"
					onChange={this.handleClick}
				/>
				<label htmlFor="cute">cute</label>{' '}
				<input
					type="radio"
					name="src"
					id="eek"
					value="eek"
					onChange={this.handleClick}
				/>
				<label htmlFor="eek">eek</label>
			</form>
		);
	}
}
