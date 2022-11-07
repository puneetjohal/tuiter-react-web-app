import React from "react";
import TuitStats from "./tuit-stats";
import { useDispatch } from "react-redux";
import { deleteTuit } from "./tuits-reducer";

const TuitItem = ({tuit}) => {
  const dispatch = useDispatch();
  const deleteTuitHandler = (id) => {
    dispatch(deleteTuit(id));
  }

  return (
    <li className="list-group-item d-flex">
      <div>
        <img src={`/images/${tuit.image}`}
             width="48px"
             className="rounded-circle me-3"/>
      </div>
      <div className="w-100">
        <p className="fw-bold d-inline">
          {tuit.userName}
        </p>
        <i className="bi bi-patch-check-fill text-primary ms-2 me-2"></i>
        <p className="d-inline">
          {`${tuit.handle} · ${tuit.time}`}
        </p>
        <i className="btn bi bi-x-lg float-end"
           onClick={() => deleteTuitHandler(tuit._id)}>
        </i>
        <p>{tuit.tuit}</p>
        <TuitStats tuit={tuit}/>
      </div>
    </li>
  );
}

export default TuitItem;

