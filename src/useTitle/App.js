import { useEffect, useState } from "react";
import "./styles.css";

const useTitle = (initialTitle) => {
  const [title, setTitle] = useState(initialTitle);

  const updateTitle = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.textContent = title;
  };

  useEffect(updateTitle, [title]);

  return setTitle;
};

const App = () => {
  const titleUpdater = useTitle("Loading...");

  setTimeout(() => titleUpdater, 3000);

  return (
    <div className="App">
      <div>Hi</div>
    </div>
  );
};

export default App;
