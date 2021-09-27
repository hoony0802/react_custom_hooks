// Utilize Notification Web API
const useNotification = (title, options) => {
  if (!("Notification" in window)) return;

  const fireNotification = () => {
    if (Notification.permission !== "granted") {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          new Notification(title, options);
        } else return;
      });
    } else new Notification(title, options);
  };

  return fireNotification;
};

const App = () => {
  const triggerNotification = useNotification("Can U Feel my heartB2?", {
    body: "Touch my body",
  });

  return (
    <div className="App" style={{ height: "1000vh" }}>
      <button onClick={triggerNotification}>Notification Alarm</button>
    </div>
  );
};

export default App;
