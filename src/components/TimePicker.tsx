import Picker from "rc-picker";
import "rc-picker/assets/index.css";
import "./TimePicker.scss";
import { Moment } from "moment";
import zhUS from "rc-picker/lib/locale/en_US";
import momentGenerateConfig from "rc-picker/lib/generate/moment";
import { PickerTimeProps } from "rc-picker/lib/Picker";
import classNames from "classnames";

type CustomTimePickerProps = Omit<
  PickerTimeProps<Moment>,
  "locale" | "generateConfig" | "mode" | "picker"
> & {
  hasError?: boolean;
};

const TimePicker = ({
  className,
  hasError,
  ...otherProps
}: CustomTimePickerProps) => {
  return (
    <Picker
      picker="time"
      mode="time"
      className={classNames(className, hasError ? "rc-picker-has-error" : "")}
      locale={zhUS}
      generateConfig={momentGenerateConfig}
      // suffixIcon={<>timeIcon</>}
      {...otherProps}
    />
  );
};

export default TimePicker;
