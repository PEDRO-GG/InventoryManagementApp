import React from "react";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";

export default function InputDollarSignAdornments({
  label,
  amount,
  stateFunction,
}) {
  const handleChange = (event) => {
    stateFunction(event.target.value);
  };

  return (
    <div>
      <FormControl fullWidth style={{ margin: 8 }}>
        <InputLabel htmlFor="standard-adornment-amount">{label}</InputLabel>
        <Input
          id="standard-adornment-amount"
          value={amount}
          onChange={handleChange}
          startAdornment={<InputAdornment position="start">$</InputAdornment>}
        />
      </FormControl>
    </div>
  );
}
