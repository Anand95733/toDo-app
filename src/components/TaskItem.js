import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTask, editTask } from "../redux/actions";
import "./TaskItem.css";

const TaskItem = ({ task }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTask, setNewTask] = useState(task.text);
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  };

  const handleEdit = () => {
    if (isEditing) {
      dispatch(editTask(task.id, newTask));
    }
    setIsEditing(!isEditing);
  };

  return (
    <div className="task-item">
      {isEditing ? (
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="task-edit-input"
        />
      ) : (
        <span className="task-text">{task.text}</span>
      )}
      <div className="task-actions">
        <button onClick={handleEdit} className="edit-btn">
          {isEditing ? "Save" : "Edit"}
        </button>
        <button onClick={handleDelete} className="delete-btn">
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
