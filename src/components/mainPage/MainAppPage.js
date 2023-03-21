import { useEffect, useState } from "react";
import MainComponent from "./MainContent";
import Navbar from "./Navbar";

function MainAppPage() {
  const [userName, setUserName] = useState("Yash");
  useEffect(() => {
    setTimeout(() => {
      setUserName("Parikshit");
    }, 2000)
  }, [userName]);
  return (
    <div>
      <Navbar />
      <MainComponent userName={userName} />
    </div>
  );
}

export default MainAppPage;
