import React from 'react';
import { Sidebar, Main, Widgets } from '../components/';
import { useParams } from 'react-router-dom';
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
    <>
      <Sidebar menuitems={menuitems} />
      <div>
        <h5>My Team</h5>
        <div>Data | Design | Settings</div>
        {id}
      </div>
      <div>
        Side Nav Widget
        <Widgets title="New Tab" />
        <Widgets title="Tabs" />
        <Widgets title="Style" style={style} />
      </div>
    </>
  );
}
