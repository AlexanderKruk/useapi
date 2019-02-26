import React from 'react';
import InfoPeople from './InfoPeople';
import InfoPlanets from './InfoPlanets';
import InfoStarships from './InfoStarships';

const InfoList = ({ people, planets, starships }) => {
	return (
			<div>
			{
				people.map((user, i) => {
					return (
						<InfoPeople
							key = {i} 
					        name = {people[i].name}
					        height = {people[i].height}
					        mass = {people[i].mass}
  					    />
						);
				})}
				{
				planets.map((user, i) => {
					return (
						<InfoPlanets
							key = {i} 
					        name = {planets[i].name}
					        diameter = {planets[i].diameter}
					        terrain = {planets[i].terrain}
  					    />
						);
				})
			}
			{
			starships.map((user, i) => {
					return (
						<InfoStarships
							key = {i} 
					        name = {starships[i].name}
					        starshipClass = {starships[i].starship_class}
					        length = {starships[i].length}
  					    />
						);
				})
			}
			</div>
		);
}

export default InfoList;