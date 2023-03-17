import React from 'react';
import { Link } from 'react-router-dom';
export default function Blubs({ items }) {
  console.log(items);
  return (
    <div className="blubs">
      {items &&
        items.map((item) => {
          return (
            <div>
              <Link to={`../details/:${item}`}>{item}</Link>
            </div>
          );
        })}
    </div>
  );
}
