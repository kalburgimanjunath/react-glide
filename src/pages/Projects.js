import React from 'react';
import { Sidebar, Main } from '../components/';
import { useParams } from 'react-router-dom';
export default function Projects() {
  const { id } = useParams();
  const menuitems = ['Navigations', 'Menus', 'Components'];
  return (
    <>
      <Sidebar menuitems={menuitems} />
      <div>
        <h5>My Team</h5>
        {id}
      </div>
    </>
  );
}
