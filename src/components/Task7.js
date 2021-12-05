import React from "react";

export const Task7 = (props) => {
  return (
    <div className="container-component">
      {props.data.map((element, index) =>
        element.userId === props.user.userId ? (
          <h2>
            Position: {index} - {element.userId} - Score: {element.score}
          </h2>
        ) : (
          <div>
            Position: {index} - {element.userId} - Score: {element.score}
          </div>
        )
      )}
    </div>
  );
};
