import React from 'react';
import { FaWeight } from 'react-icons/fa';
import { MdPerson, MdPublish } from 'react-icons/md';
import { IconContext } from "react-icons";
import './InfoList.css';

const InfoPeople = ({name, height, mass}) => {
	return (
		<div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 f4 lh-copy measure '>
		<span className='vcentered'>
		 <IconContext.Provider value={{ color: "blue", size: 32, verticalAlign: 'middle', className: "global-class-name" }}>
					<MdPerson />
		  </IconContext.Provider>
            <strong> {name} </strong></span>
			<p><MdPublish /><strong>{height}cm</strong></p>
			<p><FaWeight /><strong>{mass}kg</strong></p>
		</div>
		);
}

export default InfoPeople;