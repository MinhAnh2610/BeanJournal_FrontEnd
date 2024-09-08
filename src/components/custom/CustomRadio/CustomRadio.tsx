import { Radio, cn } from "@nextui-org/react";
import "./CustomRadio.css";

const CustomRadio = (props: any) => {
  const { children, ...otherProps } = props;

  return (
    <Radio
      {...otherProps}
      classNames={{
        base: cn(
          "inline-flex m-0 items-center justify-between",
          "flex-row-reverse max-w-[300px] cursor-pointer rounded-lg gap-4 p-4 border-2 border-transparent"
        ),
      }}
    >
      {children}
    </Radio>
  );
};

export default CustomRadio;
