import * as React from "react";
import "./Album.css";
import { ICONS } from "../../../Common/Icon";

function getAlbumLinks(props) {
	let links = [];
	for (let i = 0; i < props.links.length; i++) {
		let link = props.links[i];
		links.push(<a key={i} href={link.link} target='_blank' rel='noopener noreferrer'>{ICONS[link.icon]}</a>);
	}
	return links;
}

function getAlbumTracks(props) {
	let tracks = [];
	for (let i = 0; i < props.tracks.length; i++) {
		let track = props.tracks[i];
		tracks.push(<li className='album-track' key={i}>{track.title}<span className='album-track-note'>{track.note}</span></li>)
	}
	return <ol>{tracks}</ol>;
}

export function Album(props) {
	return (
		<div className='album'>
			<h3>{props.title + ' (' + props.year + ')'}</h3>
			<p className='album-summary'>{props.summary}</p>
			<div className='album-content'>
				<div className='album-art-container'>
					<img className='album-art' src={props.art.path} alt={props.art.name} />
					<div className='album-link-container'>{getAlbumLinks(props)}</div>
				</div>
				<div className='album-tracklist'>{getAlbumTracks(props)}</div>
			</div>
		</div>
	);
}