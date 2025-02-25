import Link from "next/link";
import React from "react";

const UserIdPage = () => {
  return (
    <div>
      <h1>Dashboard users</h1>

      <ul>
        <li>
          <Link href="/dashboard/user/1">User 1</Link>
          <Link href="/dashboard/user/2">User 2</Link>
          <Link href="/dashboard/user/3">User 3</Link>
          <Link href="/dashboard/user/4">User 4</Link>
        </li>
      </ul>
    </div>
  );
};

export default UserIdPage;
