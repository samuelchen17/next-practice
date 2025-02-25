import Link from "next/link";
import React from "react";

const UserIdPage = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  return (
    <div>
      <h1>details page</h1>
      <span>{id}</span>

      <ul>
        <li>
          <Link href="/dashboard/users/1">User 1</Link>
          <Link href="/dashboard/users/2">User 2</Link>
          <Link href="/dashboard/users/3">User 3</Link>
          <Link href="/dashboard/users/4">User 4</Link>
        </li>
      </ul>
    </div>
  );
};

export default UserIdPage;
