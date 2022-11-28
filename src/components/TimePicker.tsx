import Picker, { TimePickerProps } from "rc-time-picker";
import "rc-time-picker/assets/index.css";
import "./TimePicker.scss";
import classNames from "classnames";

interface CustomTimePickerProps extends TimePickerProps {
  hasError?: boolean;
}

const TimePicker = ({
  className,
  hasError,
  ...otherProps
}: CustomTimePickerProps) => {
  return (
    <Picker
      className={classNames(className, hasError ? "rc-picker-has-error" : "")}
      inputIcon={<i className="icon">icon</i>}
      {...otherProps}
    />
  );
};

export default TimePicker;
