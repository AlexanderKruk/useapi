import React from 'react';
import Info from './Info';

const InfoList = ({ data }) => {
	return (
			<div>
			{
				data.map((user, i) => {
					return (
						<Info
							key={i} 
					        name={data[i].name}
					        height={data[i].height}
					        mass={data[i].mass}
  					    />
						);
				})
			}
			</div>
		);
}

export default InfoList;