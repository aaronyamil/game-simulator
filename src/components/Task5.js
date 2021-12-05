import React from "react";

export const Task5 = (props) => {
  return (
    <div className="container-component">
      <div className="title-component">Calculate Friends Position</div>
      <input
        type="button"
        onClick={() => props.calculateFriendsPosition()}
        value="calcular"
      />
      <br />
      <span>UserId: </span>
      <i>{props.user.userId}</i>
      <br />
      <span>
        User Position <i>Friends</i>:
      </span>
      <b> {props.position}</b>
    </div>
  );
};
