import { useEffect, useRef } from "react";

const useFadeIn = (duration = 1, delay = 0) => {
  useEffect(() => {
    if (typeof (duration || delay) !== "number") return;
    if (element.current) {
      const { current } = element;
      current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
      current.style.opacity = 1;
    }
  }, [duration, delay]);
  const element = useRef();

  return { ref: element, style: { opacity: 0 } };
};

const App = () => {
  const fadeInH1 = useFadeIn(1, 2);
  const fadeInP = useFadeIn(5, 10);

  return (
    <div className="App">
      <h1 {...fadeInH1}>Hi</h1>
      <p {...fadeInP}>E Why Wls?</p>
    </div>
  );
};

export default App;
