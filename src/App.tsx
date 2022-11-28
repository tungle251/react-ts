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
        format="h:mm a"
        showSecond={false}
        placeholder="h:mm a"
        allowEmpty
        use12Hours
      />
    </div>
  );
}

export default App;
