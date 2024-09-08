import { RadioGroup } from "@nextui-org/react";
import CustomRadio from "./CustomRadio/CustomRadio";

const MoodPicker = () => {
  return (
    <RadioGroup orientation="horizontal" label="How do you feel today?">
      <CustomRadio
        description="Terrible"
        value="1"
        className="data-[selected=true]:border-colour-blue data-[selected=true]:bg-colour-blue/10"
      >
        Worst day ever
      </CustomRadio>
      <CustomRadio
        description="Sad"
        value="2"
        className="data-[selected=true]:border-colour-peach data-[selected=true]:bg-colour-peach/10"
      >
        Not so good today
      </CustomRadio>
      <CustomRadio
        description="Normal"
        value="3"
        className="data-[selected=true]:border-colour-pink data-[selected=true]:bg-colour-pink/10"
      >
        Nothing special
      </CustomRadio>
      <CustomRadio
        description="Good"
        value="4"
        className="data-[selected=true]:border-colour-lavender data-[selected=true]:bg-colour-lavender/10"
      >
        Good day
      </CustomRadio>
      <CustomRadio
        description="Happy"
        value="5"
        className="data-[selected=true]:border-colour-indigo data-[selected=true]:bg-colour-indigo/10"
      >
        Feeling awesome
      </CustomRadio>
    </RadioGroup>
  );
};

export default MoodPicker;
