import React from 'react';
import { Main, Sidebar } from '../components/';
export const InviteFriend = () => {
  return (
    <div>
      <input type="email" placeholder="Invite Friend" />
      <button type="button">Send Invite</button>
    </div>
  );
};
export const MemberTable = ({ users }) => {
  return (
    <div>
      <table>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
          <th>Status</th>
        </tr>
        <tbody>
          {users.map((user) => {
            return (
              <tr>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>{user.status}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default function Members() {
  const members = [
    {
      name: 'Manjunath Kalburgi',
      email: 'manjunathkalburgi65512@gmail.com',
      role: 'Admin',
      status: 'Active',
    },
    {
      name: 'Narayan Kalburgi',
      email: 'narayankalburgi65512@gmail.com',
      role: 'Admin',
      status: 'Active',
    },
  ];
  return (
    <>
      <Sidebar />
      <Main title="Members" />
      <InviteFriend />
      <div>{members.length} Members</div>
      <MemberTable users={members} />
      {/* Invite Friend
      Table */}
    </>
  );
}
