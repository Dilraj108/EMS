import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";

const TaskList = ({ data,onMarkCompleted,onMarkFailed,onMarkAccepted }) => {
  console.log(data.tasks);
  return (
    <div
      id="tasklist"
      className=" h-[52%] overflow-x-auto  rounded-3xl mt-10  px-2 flex items-center flex-nowrap justify-start gap-5"
    >
      {data.tasks.map((task,idx) => {
        if (task.active) {
          return <AcceptTask key={idx} data={task} index={idx} onMarkCompleted={onMarkCompleted} onMarkFailed={onMarkFailed} />;
        }
        if (task.completed) {
          return <CompleteTask key={idx} data={task} />;
        }
        if (task.failed) {
          return <FailedTask key={idx} data={task}  />;
        }
        if (task.newTask) {
          return <NewTask key={idx} data={task} index={idx} onMarkAccepted={onMarkAccepted}/>;
        }
      })}
    </div>
  );
};

export default TaskList;
