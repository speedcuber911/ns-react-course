import { useEffect, useRef, useState } from "react";

function InputWithRef() {
  const [val, setVal] = useState(true);
  const inputRef = useRef(null);
  const boxRef = useRef(null);
  //   console.log("Outside", inputRef);

  useEffect(() => {
    // console.log("INside", inputRef);
    // inputRef.current.focus();
    console.log("Height of box is", boxRef.current.clientHeight);
    console.log("Width of box is", boxRef.current.clientWidth);
  }, []);

  return (
    <>
      <div
        ref={boxRef}
        style={{
          background: "yellow",
        }}
      >
        ABC
        <br />
        nin
        <br />
        sdni
        <br />
        <br />
      </div>
      <form
        onSubmit={(event) => {
          console.log(event);
        }}
      >
        <input
          placeholder="abc"
          type="text"
          value={val}
          onChange={(event) => setVal(event.target.value)}
          ref={inputRef}
          autoFocus={true}
        />
        <button
          onClick={() => {
            console.log("Hello");
            setVal(!val);
          }}
        >
          Submit
        </button>
      </form>
    </>
  );
}

export default InputWithRef;
