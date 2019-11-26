import * as React from "react";
import "./SidePanel.css";

export function SidePanelLink(props) {

	let classes = ['side-panel-link'];
	if (props.active) classes.push('active');

	return (
		(props.link ?
			<a href={props.link} target='_blank' rel='noopener noreferrer'>
				<div className='side-panel-link'>
					<div className='side-panel-link-icon'>{props.icon}</div>
					<div className='side-panel-link-text'>{props.text}</div>
					<div className='side-panel-link-hover-icon'>{props.hoverIcon}</div>
				</div>
			</a>
			:
			<div className={classes.join(' ')} onClick={props.action}>
				{props.active && <>
					<div className='side-panel-link-corner top'><div></div></div>
					<div className='side-panel-link-corner bottom'><div></div></div>
				</>}
				<div className='side-panel-link-icon'>{props.icon}</div>
				<div className='side-panel-link-text'>{props.text}</div>
			</div>
		)
	);
}