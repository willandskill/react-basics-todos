import React from "react";

import TaskListItem from "./TaskListItem";

export default props => {
  return (
    <ul className="list-group">
      {props.tasks.map(task => <TaskListItem task={task} {...props} />)}
    </ul>
  );
};
