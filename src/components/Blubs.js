import React from 'react';
import { Link } from 'react-router-dom';
export default function Blubs({ items }) {
  return (
    <div className="blubs">
      {items &&
        items.map((item) => {
          return (
            <div className="item">
              <Link to={`../details/:${item}`}>{item}</Link>
              <p>no users</p>
            </div>
          );
        })}
    </div>
  );
}
