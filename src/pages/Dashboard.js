import React from 'react';
import { Sidebar, Main } from '../components/';
export default function Dashboard() {
  return (
    <>
      <Sidebar />
      <div>
        <h5>My Team</h5>
        <Main title="Projects" />
      </div>
    </>
  );
}
