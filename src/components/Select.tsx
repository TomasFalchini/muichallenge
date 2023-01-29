import * as React from "react";

import MenuItem from "@mui/material/MenuItem";

import Select, { SelectChangeEvent } from "@mui/material/Select";

interface Props {
  defValue: string;
  options: string[];
}

export default function SelectSmall({ defValue, options }: Props) {
  const [value, setValue] = React.useState<string>(defValue);

  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value);
  };

  return (
    <Select
      id="demo-select-small"
      value={value}
      onChange={handleChange}
      sx={{
        border: 0,
        padding: 0,
        height: 16,
        outline: "none",
        fontSize: 14,
      }}
    >
      <MenuItem value={defValue}>
        <em>{defValue}</em>
      </MenuItem>
      {options.map((el) => {
        return (
          <MenuItem value={el}>
            <em>{el}</em>
          </MenuItem>
        );
      })}
    </Select>
  );
}
