import { useState } from "react";
import "../style/profile.scss";

export function Profile({ username, setModal }) {
  return (
    <div className="dimmed">
      <div className="userProfile">
        <div className="name">{username.id}</div>
        <div className="infoBox">
          <div className="created">
            <h3>Joined</h3>
            <p>{username.created}</p>
          </div>
          <div className="karma">
            <h3>Karma</h3>
            <p>{username.karma}</p>
          </div>
        </div>
        <div className="about">
          <h4>About</h4>
          <p dangerouslySetInnerHTML={{ __html: `${username.about}` }}></p>
        </div>
        <div
          className="close"
          onClick={() => {
            setModal(false);
          }}
        >
          확인
        </div>
      </div>
    </div>
  );
}
