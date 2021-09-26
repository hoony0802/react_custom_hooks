import { useEffect } from "react";

const useBeforeLeave = (onBefore) => {
  useEffect(() => {
    if (typeof onBefore !== "function") return;

    const handle = (evnet) => {
      const { clientY } = evnet;
      if (clientY <= 0) onBefore();
    };

    document.addEventListener("mouseleave", handle);
    return () => document.removeEventListener("mouseleave", handle);
  }, [onBefore]);
};

const App = () => {
  const begForLife = () => console.log("Plz don't leave!");
  useBeforeLeave(begForLife);
  return (
    <div className="App">
      <h1>Hi</h1>
    </div>
  );
};

export default App;
