import { useState } from "react";

const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);

  const onChange = (e) => {
    let willUpdate = true;

    if (typeof validator === "function") {
      willUpdate = validator(value);
    }

    if (willUpdate) {
      setValue(e.target.value);
    }
  };
  return { value, onChange };
};

const App = () => {
  const maxLen = (value) => value.length <= 10;

  const name = useInput("Mr.", maxLen);
  // const [item, setItem] = useState(1);
  // const incrementItem = () => setItem(item + 1);
  // const decrementItem = () => setItem(item - 1);

  return (
    <div className="App">
      <h1>Hello{/* {item} */}</h1>
      <input placeholder="Name" {...name} />
      {/* <button onClick={incrementItem}>Increment</button>
      <button onClick={decrementItem}>Decrement</button> */}
    </div>
  );
};

export default App;
