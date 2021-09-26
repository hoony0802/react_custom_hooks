import { useEffect, useRef } from "react";
import "./styles.css";

const useClick = (onClick) => {
  const element = useRef();

  useEffect(() => {
    if (typeof onClick !== "function") return;

    if (element.current) {
      element.current.addEventListener("click", onClick);
    }

    return () => {
      if (element.current) {
        element.current.removeEventListener("click", onClick);
      }
    };
  }, [onClick]);

  return element;
};

const App = () => {
  const sayHello = () => console.log("say hello");
  const title = useClick(sayHello);

  return (
    <div className="App">
      <h1 ref={title}>Hi</h1>
    </div>
  );
};

export default App;