import React from 'react';
import './App.css';

import { SidePanel } from "./SidePanel/SidePanel";

import { Resume } from "./Pages/Resume/Resume";
import { Code } from "./Pages/Code/Code";
import { Music } from "./Pages/Music/Music";
import { Art } from "./Pages/Art/Art";
import { Page } from "./Common/Page";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  withRouter
} from "react-router-dom";

const APP_PAGES = [
  {
    id: 'resume',
    name: 'Resume',
    component: Resume
  },
  {
    id: 'code',
    name: 'Code',
    component: Code
  },
  {
    id: 'music',
    name: 'Music',
    component: Music
  },
  {
    id: 'art',
    name: 'Art',
    component: Art
  }
]

const APP_LINKS = [
  {
    id: 'linkedin',
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/danielbednarczyk/'
  },
  {
    id: 'github',
    name: 'GitHub',
    link: 'https://github.com/dan9418/'
  },
  {
    id: 'bandcamp',
    name: 'Bandcamp',
    link: 'https://atlaseuphoria.bandcamp.com/'
  }
]

function getRoutes() {
  let routes = [];
  for (let i = 0; i < APP_PAGES.length; i++) {
    let route = APP_PAGES[i];
    let RouteComponent = route.component;
    routes.push(
      <Route key={route.id} path={`/${route.id}`}>
        <Page title={route.name}>
          <RouteComponent />
        </Page>
      </Route>
    );
  }
  return routes;
}

function App() {
  let SidePanelWithRouter = withRouter(SidePanel);
  return (
    <Router>
      <SidePanelWithRouter pages={APP_PAGES} links={APP_LINKS} />
      <Switch>
        {getRoutes()}
        <Redirect key='default' to="/resume" />
      </Switch>
    </Router>
  );
}

export default App;
