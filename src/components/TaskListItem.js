import React from "react";

export default props => {
  const { task } = props;
  const renderText = task => {
    // Strikethrough on text...
    return task.isDone ? <del>{task.name}</del> : task.name;
  };

  return (
    <li
      key={task.id}
      className={
        "list-group-item " + (task.isDone ? "list-group-item-light" : "")
      }
    >
      <p className="lead float-left m-0">{renderText(task)}</p>
      <span className="float-right">
        <button
          className={
            "btn btn-sm " +
            (task.isDone ? "btn-outline-success" : "btn-success")
          }
          onClick={event => props.handleToggleDone(task.id)}
        >
          {task.isDone ? "UNDO" : "DONE"}
        </button>
        <button
          className="btn btn-sm btn-danger ml-1"
          onClick={event => props.handleDelete(task.id)}
        >
          DELETE
        </button>
      </span>
    </li>
  );
};
