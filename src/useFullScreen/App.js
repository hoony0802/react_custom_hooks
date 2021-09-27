import { useRef } from "react";

const useFullScreen = (callback) => {
  const element = useRef();
  const triggerFull = () => {
    if (element.current) {
      element.current.requestFullscreen();
      if (callback && typeof callback === "function") {
        callback(true);
      }
    }
  };
  const exitFull = () => {
    const checkFullScreen = document.fullscreenElement;

    if (checkFullScreen !== null) {
      document.exitFullscreen();
    }

    if (callback && typeof callback === "function") {
      callback(false);
    }
  };

  return { element, triggerFull, exitFull };
};

const App = () => {
  const onFullScreen = (isFull) => {
    console.log(isFull ? "We are Full" : "we are small");
  };
  const { element, triggerFull, exitFull } = useFullScreen(onFullScreen);

  return (
    <div className="App" style={{ height: "1000vh" }}>
      <div ref={element}>
        <img
          alt="fall"
          style={{ height: "30rem", width: "20rem" }}
          src="https://images.unsplash.com/photo-1632669860428-9fe00d67e72c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1364&q=80"
        />
        <button onClick={exitFull}>Exit FullScreen</button>
      </div>
      <button onClick={triggerFull}>Make FullScreen</button>
    </div>
  );
};

export default App;
