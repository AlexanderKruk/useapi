import React from 'react';

const InfoStarships = ({name, starshipClass, length}) => {
	return (
		<div className='bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5 f4 lh-copy measure'>
			<p><strong>Name:</strong> {name}</p>
			<p><strong>Class:</strong> {starshipClass}</p>
			<p><strong>Length:</strong> {length}m</p>
		</div>
		);
}

export default InfoStarships;