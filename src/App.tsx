import "./App.css";
import TimePicker from "./components/TimePicker";
import moment from "moment";

function App() {
  return (
    <div className="App">
      <TimePicker
        defaultValue={moment()}
        onChange={(value) => {
          console.log({ value });
        }}
        format="HH:mm"
        showSecond={false}
        placeholder="HH:mm"
        allowEmpty
      />
    </div>
  );
}

export default App;
