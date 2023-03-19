import { useState, useReducer, useCallback } from "react";

/*

  A To-do app
  1. Capability of adding tasks
  2. Capability of removing tasks
  3. Capability of editting tasks
  4. Filter for (complete/incomplete) tasks
  5. Date and time of when the task is added & when the task was last editted
  6. Styling

*/

function getFormattedDate() {
  const t = new Date();
  return t.toDateString() + "|" + t.toTimeString().split(" ")[0];
}

const reducerFn = (state, action) => {
  // Always returns a new state. Don't mutate the state
  console.log("Reducer called");
  // Whatever the reducer returns, becomes the new state
  if (action.type === "ERASE") return [];
  if (action.type === "DONE") {
    return state.map((task) => {
      if (task.id === action.id) {
        return {
          ...task,
          status: !task.status,
          lastUpdated: action.lastUpdated,
        };
      } else return task;
    });
  }
  if (action.type === "ADD_ITEM") {
    if (state.find((el) => el.id === action.id)) {
      return state;
    } else {
      return [
        ...state,
        {
          title: action.title,
          id: action.id,
          status: false,
          createdAt: action.createdAt,
        },
      ];
    }
  }
  if (action.type === "REMOVE_ITEM") {
    return state.filter((el) => action.id !== el.id);
  }
  return state;
};

function ToDoItem(props) {
  console.log("Rendeing toDoItem");
  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={props.status}
          onChange={() => props.marksAsDone(props.taskId)}
        />
        <span style={{ textDecoration: props.status ? "line-through" : "" }}>
          {props.title}
        </span>
        <span style={{ fontSize: "10px" }}>({props.createdAt})</span>
        {props.lastUpdated ? (
          <span style={{ fontSize: "10px" }}>({props.lastUpdated})</span>
        ) : (
          <></>
        )}
      </label>
      <div
        onClick={props.removeItem}
        style={{
          display: "inline-block",
          color: "red",
          fontSize: "10px",
          cursor: "pointer",
        }}
      >
        X
      </div>
    </div>
  );
}

function Todos(props) {
  // Pure function. When called with same input, always same output
  // Don't cause side-effects

  //   const [taskStatus, setTask] = useState(tasks);
  const [taskStatus2, dispatcher] = useReducer(reducerFn, []);
  const [taskValue, setTaskValue] = useState("");
  const [filterState, setFilterState] = useState("All");

  const markAsDoneCallback = useCallback((taskId) => {
    dispatcher({
      // Dispatcher, dispactches action and calls the reducer with these actions
      type: "DONE",
      id: taskId,
      lastUpdated: getFormattedDate(),
    });
  });

  const removeTaskItem = (taskId) => () => {
    dispatcher({
      type: "REMOVE",
      id: taskId,
    });
  };

  return (
    <>
      <select
        onChange={(event) => setFilterState(event.target.value)}
        value={filterState}
      >
        <option>All</option>
        <option>Complete</option>
        <option>In-complete</option>
      </select>
      {taskStatus2
        .filter((taskEl) => {
          if (filterState === "Complete" && taskEl.status) {
            return true;
          } else if (filterState === "In-complete" && !taskEl.status) {
            return true;
          } else if (filterState === "All") return true;
        })
        .map((task) => (
          <ToDoItem
            status={task.status}
            key={task.id}
            taskId={task.id}
            title={task.title}
            createdAt={task.createdAt}
            lastUpdated={task.lastUpdated}
            marksAsDone={markAsDoneCallback}
            // removeItem={removeTaskItem(task.id)}
          />
        ))}
      <input
        type="text"
        placeholder="Task description"
        value={taskValue}
        onChange={(event) => setTaskValue(event.target.value)}
      />
      <button
        onClick={() => {
          console.log("Clicked on add task");
          dispatcher({
            type: "ADD_ITEM",
            title: taskValue,
            id: taskStatus2.length + 1,
            createdAt: getFormattedDate(),
          });
          setTaskValue("");
        }}
      >
        Add task
      </button>
    </>
  );
}

export default Todos;

// == //
// === // Absolute equality. Compares the exact value
