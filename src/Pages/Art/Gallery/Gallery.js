import * as React from "react";
import "./Gallery.css";
import { useState } from "react";
import { ICONS } from "../../../Common/Icon";

function navigateGallery(setIndex, current, distance, max) {
	let newIndex = (current + distance) % max;
	if (newIndex < 0) newIndex = newIndex + max;
	setIndex(newIndex);
}

export function Gallery(props) {

	const [index, setIndex] = useState(0);
	const main = props.images[index];

	return (
		<div className='gallery'>
			<div className='gallery-top'>
				<span className='gallery-name'>{main.name}</span>
				<span className='gallery-year'>{main.year && '(' + main.year + ')'}</span>
			</div>
			<div className='gallery-mid'>
				<div className='gallery-nav' onClick={() => navigateGallery(setIndex, index, -1, props.images.length)}>{ICONS.navLeft}</div>
				<div className='gallery-caption'>{(index + 1) + '/' + props.images.length}</div>
				<div className='gallery-nav' onClick={() => navigateGallery(setIndex, index, 1, props.images.length)}>{ICONS.navRight}</div>
			</div>
			<div className='gallery-bottom'>
				<img className='gallery-image' src={main.path} alt={main.name} />
			</div>
		</div>
	);
}