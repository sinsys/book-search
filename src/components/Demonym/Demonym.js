import React from 'react';
import './Demonym.css';

function convertAorAn(val){
  const letter = val.charAt(0).toLowerCase();
  if ('aeiou'.includes(letter)) {
    return 'An';
  }
  return 'A';
}

export default function Demonym(props) {
	return (
		<div 
			className="demonym"
		>
			{convertAorAn(props.name)} {props.name} comes from {props.country}
		</div>
	)
}