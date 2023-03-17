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
    <div>
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
