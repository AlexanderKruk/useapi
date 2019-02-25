import React from 'react';

const Info = ({name, height, mass}) => {
	return (
		<div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
			<p><strong>Name:</strong> {name}</p>
			<p><strong>Height:</strong> {height}cm</p>
			<p><strong>Mass:</strong> {mass}kg</p>
		</div>
		);
}

export default Info;