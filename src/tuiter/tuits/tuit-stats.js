import React from "react";

const TuitStats = ({tuit}) => {
  return (
    <div className="d-flex justify-content-between w-75">
      <span>
        <i className="bi bi-chat me-1"></i>
        <p className="d-inline">{tuit.replies}</p>
      </span>
      <span>
        <i className="bi bi-arrow-repeat me-1"></i>
        <p className="d-inline">{tuit.retuits}</p>
      </span>
      <span>
        {tuit.liked ? (
          <i className="bi bi-heart-fill me-1 text-danger"></i>
        ) : (
          <i className="bi bi-heart me-1"></i>
        )}
        <p className="d-inline">{tuit.likes}</p>
      </span>
      <span>
        <i className="bi bi-share"></i>
      </span>
    </div>
  );
}

export default TuitStats;