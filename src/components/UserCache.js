import React from 'react'

export const UserCache = (props) => {
    return (
        <div className="container-component">
      {props.userId && (
        <div className="container-user">
          <div className="row-user">
            <div className="col-user">userID</div>
            <div className="col-user-body">{props.userId}</div>
          </div>
          <div className="row-user">
            <div className="col-user">Global</div>
            <div className="col-user-body">{props.global}</div>
          </div>
          <div className="row-user">
            <div className="col-user">National</div>
            <div className="col-user-body">{props.national}</div>
          </div>
          <div className="row-user">
            <div className="col-user">Friends</div>
            <div className="col-user-body">{props.friends}</div>
          </div>
          <div className="row-user">
            <div className="col-user">Score</div>
            <div className="col-user-body">{props.score}</div>
          </div>
          <div className="row-user">
            <div className="col-user">Level</div>
            <div className="col-user-body">{props.level}</div>
          </div>
          <div className="row-user">
            <div className="col-user">Time</div>
            <div className="col-user-body">{props.time}</div>
          </div>
        </div>
      )}
    </div>
    )
}
