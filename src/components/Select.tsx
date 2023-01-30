import * as React from "react";

import MenuItem from "@mui/material/MenuItem";

import styled from "@emotion/styled";

interface Props {
  defValue: string;
  options: string[];
}

const Selects = styled("select")(({ theme }) => ({
  padding: "0",

  backgroundColor: "transparent",
  border: "transparent",
  textAlign: "start",
  fontSize: "14px",
  fontWeight: "600",
}));

const Options = styled("option")(({ theme }) => ({
  height: "100%",
  padding: "0",
  backgroundColor: "transparent",
  border: "transparent",
  textAlign: "center",
}));

export default function SelectSmall({ defValue, options }: Props) {
  const [value, setValue] = React.useState<string>(defValue);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setValue(event.target.value);
  };

  return (
    <Selects id="demo-select-small" value={value} onChange={handleChange}>
      <Options value={defValue}>{defValue}</Options>
      {options.map((el) => {
        return (
          <Options value={el}>
            <em>{el}</em>
          </Options>
        );
      })}
    </Selects>
  );
}
