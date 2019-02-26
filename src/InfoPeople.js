import React from 'react';

const InfoPeople = ({name, height, mass}) => {
	return (
		<div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 f4 lh-copy measure'>
			<p>Name:<strong> {name} </strong></p>
			<p>Height:<strong>{height}cm</strong></p>
			<p>Weight: <strong>{mass}kg</strong></p>
		</div>
		);
}

export default InfoPeople;