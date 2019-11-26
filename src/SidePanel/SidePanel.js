import * as React from "react";
import "./SidePanel.css";
import { ICONS } from "../Common/Icon";
import { SidePanelLink } from "./SidePanelLink";

import { Link } from "react-router-dom";

function getPageLinks(props) {
	let pageLinks = [];
	for (let i = 0; i < props.pages.length; i++) {
		let page = props.pages[i];
		let path = `/${page.id}`;
		pageLinks.push(
			<Link key={page.id} to={path}>
				<SidePanelLink
					active={path === props.location.pathname}
					text={page.name}
					icon={ICONS[page.id]}
				/>
			</Link>
		);
	}
	return pageLinks;
}

function getExternalLinks(props) {
	let externalLinks = [];
	for (let i = 0; i < props.links.length; i++) {
		let link = props.links[i];
		externalLinks.push(
			<SidePanelLink
				key={i}
				link={link.link}
				text={link.name}
				icon={ICONS[link.id]}
				hoverIcon={ICONS.newtab}
			/>
		);
	}
	return externalLinks;
}

export function SidePanel(props) {
	return (
		<div className='side-panel'>
			<div className='side-panel-pic-container'>
				<img className='side-panel-pic' src='/img/me.jpg' alt='Me'/>
			</div>
			<div className='side-panel-info'>
				<div className='side-panel-info-item name'>Dan Bednarczyk</div>
				<div className='side-panel-info-item title'>Web Developer</div>
				<div className='side-panel-info-item location'>{ICONS.location}Davis, CA</div>
			</div>
			<div className='side-panel-section'>
				<div className='side-panel-section-header' />
				{getPageLinks(props)}
			</div>
			<div className='side-panel-section'>
				<div className='side-panel-section-header' />
				{getExternalLinks(props)}
			</div>
		</div>
	);
}