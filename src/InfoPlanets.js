import React from 'react';

const InfoPlanets = ({name, diameter, terrain}) => {
	return (
		<div className='bg-light-yellow dib br3 pa3 ma2 grow bw2 shadow-5 f4 lh-copy measure'>
			<p><strong> Name: </strong> {name} </p>
			<p><strong> Diameter: </strong> {diameter} km</p>
			<p><strong> Terrain: </strong> {terrain} </p>
		</div>
		);
}

export default InfoPlanets;