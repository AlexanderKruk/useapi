import React from 'react';

const InfoStarships = ({name, starshipClass, length}) => {
	return (
		<div className='bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5 f4 lh-copy measure'>
			<p><em>Name:</em><strong> {name}</strong></p>
			<p><em>Class:</em> {starshipClass}</p>
			<p><em>Length:</em> {length} m</p>
		</div>
		);
}

export default InfoStarships;