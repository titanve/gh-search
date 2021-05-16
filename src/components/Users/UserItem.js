import React from "react";
import "./UserItem.css";

const UserItem = ({ user }) => {
  return (
    <li className="UserItem-item-container">
      <div className="UserItem-info-block">
        <div className="UserItem-user-info">
          <span>
            {user.name}
            <a
              className="UserItem-link"
              href={user.html_url}
              target="_blank"
              rel="noreferrer"
            >
              {user.login}
            </a>
          </span>
          <span>{user.bio}</span>
          <span>Followers: {user.followers}</span>
          <span>Following: {user.following}</span>
          <span>Stars: {user.stars}</span>
          <span>Starred: {user.starred}</span>
        </div>
        <div className="UserItem-avatar">
          <img
            className="UserItem-img-responsive"
            alt={user.avatar_url}
            src={user.avatar_url}
          />
        </div>
      </div>
    </li>
  );
};

export { UserItem };
