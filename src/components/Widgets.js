import React from 'react';
export default function Widgets({ title, style, children }) {
  return (
    <div>
      <h3>{title}</h3>
      {children}
      {style &&
        style.map((item) => {
          return <div>{item.toUpperCase()}</div>;
        })}
    </div>
  );
}
