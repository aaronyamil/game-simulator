import React from "react";

export const User = (props) => {
  return (
    <div>
      {props.user.userId && (
        <div className="container-user">
          <div className="row-user">
            <div className="col-user">userID</div>
            <div className="col-user-body">{props.user.userId}</div>
          </div>
          <div className="row-user">
            <div className="col-user">Nombre</div>
            <div className="col-user-body">{props.user.name}</div>
          </div>
          <div className="row-user">
            <div className="col-user">Level</div>
            <div className="col-user-body">{props.user.level}</div>
          </div>
          <div className="row-user">
            <div className="col-user">Coins</div>
            <div className="col-user-body">{props.user.coins}</div>
          </div>
          <div className="row-user">
            <div className="col-user">Time</div>
            <div className="col-user-body">{props.user.time}</div>
          </div>
          <div className="row-user">
            <div className="col-user">Country</div>
            <div className="col-user-body">{props.user.country}</div>
          </div>
          <div className="row-user">
            <div className="col-user">Friends</div>
            <div className="col-user-body">{props.user.friends.length}</div>
          </div>
        </div>
      )}
    </div>
  );
};
