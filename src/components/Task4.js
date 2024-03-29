import React from "react";

export const Task4 = (props) => {
  return (
    <div className="container-component">
      <div className="title-component">Calculate National Position</div>
      <input
        type="button"
        onClick={() => props.calculateNationalRankPosition()}
        value="calcular"
      />
      <br />
      <span>UserId: </span>
      <i>{props.user.userId}</i>
      <br />
      <span>
        User Position <i>{props.user.country}</i>:{" "}
      </span>
      <b>{props.position}</b>
    </div>
  );
};
