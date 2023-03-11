import { useState, useReducer } from "react";
// function ToDo(props) {
//   return (
//     <div>
//       <label>
//         <input
//           type="checkbox"
//           checked={props.status}
//           onChange={(event) => console.log(event.target)}
//         />
//         {props.title}
//       </label>
//     </div>
//   );
// }

const tasks = [
  { title: "Task1", id: 1, status: true },
  { title: "Task2", id: 2, status: false },
  { title: "Task3", id: 3, status: true },
  { title: "Task4", id: 4, status: false },
];

function Todos(props) {
  const reducer = (state, action) => {
    // Whatever the reducer returns, becomes the new state
    if (action.type === "DONE") {
      return state.map((task) => {
        if (task.id === action.id) {
          return { ...task, status: !task.status };
        } else return task;
      });
    }
    return state;
  };

  //   const [taskStatus, setTask] = useState(tasks);
  const [taskStatus2, dispatcher] = useReducer(reducer, tasks);

  const handleChange = (taskId) => {
    // taskStatus.forEach((task) => {
    //   if (task.id === taskId) {
    //     task.status = !task.status;
    //   }
    // });
    // console.log({ taskStatus });
    // setTask([...taskStatus]);
    // setTask(
    //   taskStatus.map((task) => {
    //     if (task.id === taskId) {
    //       return { ...task, status: !task.status };
    //     } else return task;
    //   })
    // );
  };

  return (
    <>
      {taskStatus2.map((task) => (
        <div key={task.id}>
          <label>
            <input
              type="checkbox"
              checked={task.status}
              onChange={() => {
                // handleChange(task.id);
                dispatcher({
                  // Dispatcher, dispactches action and calls the reducer with these actions
                  type: "DONE",
                  id: task.id,
                });
              }}
            />
            {task.title}
          </label>
        </div>
      ))}
    </>
  );
}

export default Todos;

// == //
// === // Absolute equality. Compares the exact value
