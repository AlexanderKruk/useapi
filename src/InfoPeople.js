import React from 'react';

const InfoPeople = ({name, height, mass}) => {
	return (
		<div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 f4 lh-copy measure'>
			<p><em>Name:</em><strong> {name} </strong></p>
			<p><em>Height:</em> {height} cm</p>
			<p><em>Weight:</em> {mass} kg </p>
		</div>
		);
}

export default InfoPeople;