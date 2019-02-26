import React from 'react';

const InfoPlanets = ({name, diameter, terrain}) => {
	return (
		<div className='bg-light-yellow dib br3 pa3 ma2 grow bw2 shadow-5 f4 lh-copy measure'>
			<p><em> Name: </em><strong> {name} </strong></p>
			<p><em> Diameter: </em> {diameter} km</p>
			<p><em> Terrain: </em> {terrain} </p>
		</div>
		);
}

export default InfoPlanets;