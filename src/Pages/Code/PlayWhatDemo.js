import * as React from "react";
import "./Code.css";
import { withNotes, Keyboard, Fretboard, CHORD, SCALE, MODE, ROMAN_NUMERAL, INTERVAL_PAIR } from 'play-what-beta';
import { useState } from "react";

const PLAY_WHAT_CONCEPTS = [
	{
		id: 'chords',
		name: 'Chords',
		data: CHORD
	},
	{
		id: 'scales',
		name: 'Scales',
		data: SCALE
	},
	{
		id: 'modes',
		name: 'Modes',
		data: MODE
	},
	{
		id: 'romanNumerals',
		name: 'Roman Numerals',
		data: ROMAN_NUMERAL
	},
	{
		id: 'intervalPairs',
		name: 'Intervals',
		data: INTERVAL_PAIR
	}
];

function getSelectOptions(data) {
	let options = [];
	for (let i = 0; i < data.length; i++) {
		let datum = data[i];
		options.push(<option key={datum.id} value={datum.id}>{datum.name}</option>);
	}
	return options;
}

function getDisplayName(name) {
	let displayName = name.slice(0, name.length - 1).toLowerCase();
	return ['a', 'e', 'i', 'o', 'u'].includes(displayName.charAt(0)) ?
		' an ' + displayName
		:
		' a ' + displayName;
}

export function PlayWhatDemo(props) {

	const [conceptTypeIndex, setConceptTypeIndex] = useState(0);
	const activeConceptName = PLAY_WHAT_CONCEPTS[conceptTypeIndex].name;
	const activeConcepts = Object.values(PLAY_WHAT_CONCEPTS[conceptTypeIndex].data);
	const [conceptIntervals, setConceptIntervals] = useState(activeConcepts[0].intervals);

	let KeyboardWithNotes = withNotes(Keyboard, { intervals: conceptIntervals });
	let FretboardWithNotes = withNotes(Fretboard, { intervals: conceptIntervals });

	return (
		<div className='play-what-demo'>

			<div className='play-what-title'>
				Try a quick demo:
			</div>

			<div className='play-what-input'>
				<div className='play-what-input-label'>
					Choose a musical concept:
					</div>
				<select
					className='play-what-input-dropdown'
					onChange={(event) => {
						setConceptTypeIndex(event.target.selectedIndex)
					}}>
					{getSelectOptions(PLAY_WHAT_CONCEPTS)}
				</select>
			</div>

			<div className='play-what-input'>
				<div className='play-what-input-label'>
					Choose {getDisplayName(activeConceptName)}:
					</div>
				<select
					className='play-what-input-dropdown'
					onChange={(event) => {
						setConceptIntervals(activeConcepts[event.target.selectedIndex].intervals);
					}}>
					{getSelectOptions(activeConcepts)}
				</select>
			</div>

			<div>
				<KeyboardWithNotes />
			</div>

			<div>
				<FretboardWithNotes />
			</div>

		</div>
	);
}