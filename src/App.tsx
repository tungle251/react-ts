import "./App.css";
import TimePicker from "./components/TimePicker";

function App() {
  return (
    <div className="App">
      <TimePicker
        className="time-picker"
        disabledTime={(now) => ({
          disabledHours: () => [now.hours()],
          disabledMinutes: () => [now.minutes()],
        })}
        onChange={(value, dateString) => {
          console.log({ value, dateString });
        }}
        allowClear
        format="HH:mm"
        showSecond={false}
        placeholder="HH:mm"
      />
    </div>
  );
}

export default App;
