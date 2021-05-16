import React from "react";

const UserItem = ({ user }) => {
  return <li>{user.login}</li>;
};

export { UserItem };
