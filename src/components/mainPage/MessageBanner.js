import { useContext } from "react";
import { UserContext, ThemeContext } from "./MainAppPage";

function MessageBanner(props) {
  const user = useContext(UserContext);
  const theme = useContext(ThemeContext);
  console.log("From context", user, theme);
  return (
        <div>
          <label>UserName: </label>
          <input
            type="text"
            value={user.userName}
            style={{ background: theme === "light" ? "blue" : "yellow" }}
          />
          <br />
          <label>Password: </label>
          <input
            type="password"
            value={user.password}
            style={{ background: theme === "light" ? "blue" : "yellow" }}
          />
        </div>
  );
}

export default MessageBanner;
