import React from 'react';
export default function Widgets({ title, style, tab }) {
  return (
    <div>
      <h3>{title}</h3>
      {tab}
      {style &&
        style.map((item) => {
          return <div>{item.toUpperCase()}</div>;
        })}
    </div>
  );
}
