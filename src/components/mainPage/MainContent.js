import Content from "./Content";

function MainComponent(props) {
  return (
    <div>
      <h3>Main page</h3>
      <Content userName={props.userName} />
    </div>
  );
}

export default MainComponent;
