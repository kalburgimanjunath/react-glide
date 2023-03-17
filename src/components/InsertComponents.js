import React from 'react';
import Widgets from './Widgets';
export default function InsertComponents() {
  const components = [
    {
      layouts: [],
    },
    {
      text: [],
    },
    {
      buttons: [],
    },
    {
      entryfields: [],
    },
    {
      pickers: [],
    },
    {
      lists: [],
    },
    {
      media: [],
    },
    {
      charts: [],
    },
  ];
  return (
    <div style={{ flex: 1, borderRight: '1px solid #d0d0d0' }}>
      <h4>Insert Component</h4>
      <input type="text" placeholder="Filter Components" />
      {/* component list */}
      <Widgets title={components.text} />
    </div>
  );
}
