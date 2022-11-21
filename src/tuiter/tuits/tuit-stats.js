import React from "react";
import { useDispatch } from "react-redux";
import { updateTuitThunk } from "../../services/tuits-thunks";

const TuitStats = ({tuit}) => {
  const dispatch = useDispatch();
  const likeTuit = alreadyLiked => {
    dispatch(updateTuitThunk({
      ...tuit,
      liked: !alreadyLiked,
      likes: alreadyLiked ? tuit.likes - 1 : tuit.likes + 1,
    }));
  }
  const dislikeTuit = alreadyDisliked => {
    dispatch(updateTuitThunk({
      ...tuit,
      disliked: !alreadyDisliked,
      dislikes: alreadyDisliked ? tuit.dislikes - 1 : tuit.dislikes + 1,
    }));
  }

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
          <i onClick={() => likeTuit(true)} className="bi bi-heart-fill me-1 text-danger"></i>
        ) : (
          <i onClick={() => likeTuit(false)} className="bi bi-heart me-1"></i>
        )}
        <p className="d-inline">{tuit.likes}</p>
      </span>
      <span>
        {tuit.disliked ? (
          <i onClick={() => dislikeTuit(true)} className="bi bi-hand-thumbs-down-fill me-1"></i>
        ) : (
          <i onClick={() => dislikeTuit(false)} className="bi bi-hand-thumbs-down me-1"></i>
        )}
        <p className="d-inline">{tuit.dislikes}</p>
      </span>
      <span>
        <i className="bi bi-share"></i>
      </span>
    </div>
  );
}

export default TuitStats;