import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

export default function HorizontalRadio({ value, label, stateFunction }) {
  const handleChange = (event) => {
    stateFunction(!value);
  };

  return (
    <FormControl component="fieldset" style={{ margin: 8 }}>
      <FormLabel component="legend">{label}</FormLabel>
      <RadioGroup
        aria-label={label}
        name={label}
        value={value ? "Available" : "Not Available"}
        onChange={handleChange}
        row
      >
        <FormControlLabel
          value="Available"
          control={<Radio />}
          label="Available"
        />
        <FormControlLabel
          value="Not Available"
          control={<Radio />}
          label="Not Available"
        />
      </RadioGroup>
    </FormControl>
  );
}
