import React from 'react';

export class Video extends React.Component {
	render() {
		console.log('Video src = ', this.props.src);
		return (
			<div>
				<video controls autoplay="autoplay" key={this.props.src}>
					<source src={this.props.src} type="video/mp4" />
				</video>
			</div>
		);
	}
}
