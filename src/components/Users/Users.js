import React from "react";
import { UserItem } from "./UserItem";

const Users = ({ users }) => {
  return (
    <ul>
      {users.length > 0
        ? users.map((user, i) => {
            return <UserItem key={i} user={user} />;
          })
        : null}
    </ul>
  );
};

export { Users };
