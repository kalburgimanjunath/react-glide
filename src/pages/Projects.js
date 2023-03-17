import React from 'react';
import { Sidebar, Main, Widgets, InsertComponents } from '../components/';
import { useParams, Link } from 'react-router-dom';
export default function Projects() {
  const { id } = useParams();
  const menuitems = ['Navigations', 'Menus', 'Components'];
  const style = [
    'list',
    'tiles',
    'calender',
    'map',
    'checklist',
    'cards',
    'swipe',
    'details',
  ];
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar menuitems={menuitems} />
      <InsertComponents />
      <div style={{ flex: 1, padding: 20 }}>
        <h5>My Team</h5>
        <div>
          <Link to="">Data</Link> | <Link to="">Design</Link> |
          <Link to="">Settings</Link>
        </div>
        {id}
      </div>
      <div style={{ flex: 1 }}>
        Side Nav Widget
        <Widgets title="New Tab">
          <div>
            Data Source:
            <input type="text" />
          </div>
          <div>
            Label:
            <input type="text" placeholder="New Tab" />
          </div>
        </Widgets>
        <Widgets title="Tabs" />
        <Widgets title="Style" style={style} />
      </div>
    </div>
  );
}
