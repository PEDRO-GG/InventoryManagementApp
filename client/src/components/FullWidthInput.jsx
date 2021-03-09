import React from "react";
import TextField from "@material-ui/core/TextField";

export default function FullWidthInput({ label, value, stateFunction }) {
  const handleChange = (event) => {
    stateFunction(event.target.value);
  };
  return (
    <TextField
      id="standard-full-width"
      label={label}
      onChange={handleChange}
      style={{ margin: 8 }}
      value={value}
      fullWidth
      margin="normal"
      InputLabelProps={{
        shrink: true,
      }}
    />
  );
}
