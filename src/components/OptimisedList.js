import { useCallback, useEffect, useState } from "react";

function List(props) {
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  useEffect(() => {
    console.log("Rendering list component");
  });

  return (
    <>
      {items.map((item) => (
        <div key={item} onClick={props.handler}>
          List item: {item}
        </div>
      ))}
    </>
  );
}

function ListWrapper(props) {
  const [myState, setMyState] = useState(false);
  const [dependentState, setDepState] = useState(false);

  const handler = useCallback(
    (event) => {
      console.log("Clicked on ", event.target);
    },
    [dependentState]
  );
  useEffect(() => {
    console.log("Rendering parent");
  });

  return (
    <>
    <h1>{props.heading}</h1>
      <button onClick={() => setMyState(!myState)}>
        Change state of ListWrapper
      </button>
      <List handler={handler}></List>
    </>
  );
}

export default ListWrapper;
