import React from 'react';
import Widgets from './Widgets';
export default function InsertComponents() {
  const expcomponents = [
    {
      layouts: ['title', 'separator', 'basic table'],
    },
    {
      text: ['action text', 'rich text', 'text', 'hint'],
    },
    {
      buttons: ['relation', 'link', 'faviorite', 'email', 'phone'],
    },
    {
      entryfields: [],
    },
    {
      pickers: [],
    },
    {
      lists: ['list relation', 'inline list'],
    },
    {
      media: ['map', 'image', 'audio', 'video', 'web embed'],
    },
    {
      charts: ['progress bar', 'charts'],
    },
  ];
  const ChildTemp = ({ items }) => {
    return Object.entries(items).map(([key, value], index) => {
      return (
        <>
          <div>
            <h3>{key.toUpperCase()}</h3>
            <div className="button-icon-container">
              {value.map((item) => {
                return <button className="button-icon">{item}</button>;
              })}
            </div>
          </div>
        </>
      );
    });
    // return (
    //   items &&
    //   items.length > 0 &&
    //   items.map((item) => {
    //     return <div>{item}</div>;
    //   })
    // );
  };

  return (
    <div style={{ flex: 1, borderRight: '1px solid #d0d0d0', margin: 20 }}>
      <h4>Insert Component</h4>
      <input type="text" placeholder="Filter Components" />
      {/* component list */}
      {Object.entries(expcomponents).map(([key, value], index) => {
        return (
          <>
            <ChildTemp items={value} key={key} />
          </>
        );
      })}
    </div>
  );
}
