import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
export default function Sidebar({ menuitems }) {
  const newmenuitems = menuitems
    ? menuitems
    : ['Projects', 'Members', 'Usage', 'Billing', 'Templates', 'New Team'];
  const { id } = useParams();
  const [menus, setMenus] = useState(newmenuitems);
  return (
    <div style={{ flex: 1, borderRight: '1px solid #d0d0d0' }}>
      <ul>
        {menus.map((item) => {
          return (
            <li>
              <Link to={`/${item}`}>{item}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
