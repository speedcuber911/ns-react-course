import MessageBanner from "./MessageBanner";

function Content(props) {
  return (
    <div>
      <h2>Content</h2>
      <MessageBanner message={props.userName} />
    </div>
  );
}

export default Content;
