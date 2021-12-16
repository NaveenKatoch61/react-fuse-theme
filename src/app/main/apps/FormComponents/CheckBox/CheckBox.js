import React, {useEffect, useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import "./CheckBox.css";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Checkbox from "@material-ui/core/Checkbox";
import FormGroup from "@material-ui/core/FormGroup";

const CheckBox = (props) => {
  const fieldData = props.fieldData;

  var options_Array = fieldData.RadioOptions.split("||~~||");
  var options_States = [];
  options_Array = options_Array.map((element) => {
    options_States[element.split("|~|")[0]] =
      element.split("|~|")[2] === "true";
    return (element = element.split("|~|"));
  });

  const [state, setState] = React.useState({
    options_States: options_States,
  });

  const handleChange = (event) => {
    var options_State = state.options_States;
    options_State[event.target.name] = event.target.checked;
    setState({ ...state, options_States: options_State });
  };

  useEffect(() => {    
    //dispatch(Actions.getContacts(props.match.params));
    console.log("useEffect" +state.options_States);
}, [state]);

  var fontWeight, fontStyle, textDecoration;

  if (fieldData.LabelUnderline === "YES") {
    textDecoration = "underline";
  } else {
    textDecoration = "underline";
  }
  if (fieldData.LabelItalic === "YES") {
    fontStyle = "italic";
  } else {
    fontStyle = "inherit";
  }
  if (fieldData.LabelBold === "YES") {
    fontWeight = "bold";
  } else {
    fontWeight = "inherit";
  }

  var borderWidth = "";
  switch (fieldData.borderWidth) {
    case "Thin": {
      borderWidth = "1px";
      break;
    }
    case "Medium": {
      borderWidth = "2px";
      break;
    }
    case "Thick": {
      borderWidth = "3px";
      break;
    }
    default: {
      borderWidth = "1px";
    }
  }

  const useStyle = makeStyles(() => ({
    customClass: {
      width: fieldData.ControlWidth,
    },
    FormHelperTextProps: {
      textAlign: "center",
    },
    notchedOutline: {},
    style: {
      textDecoration: textDecoration,
      fontStyle: fontStyle,
      fontWeight: fontWeight,
      textAlign: fieldData.TextAlign,
    },
  }));

  const cssClasses = useStyle();

  var classes = "common " + props.className;

  classes += " " + cssClasses.style;

  switch (fieldData.Span) {
    case "One Column": {
      classes += " oneColumn";
      break;
    }
    case "Two Column": {
      classes += " twoColumn";
      break;
    }
    case "Three Column": {
      classes += " threeColumn";
      break;
    }
    case "Four Column": {
      classes += " fourColumn";
      break;
    }
    default: {
      classes += " " + cssClasses.customClass;
    }
  }

  console.log(options_States);

  return (
    <div>
      <FormControl component="fieldset" className={classes}>
        <FormLabel component="legend">{fieldData.LabelText}</FormLabel>
        <FormGroup>
          {options_Array.map((option) => {
            return (
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state.options_States[option[0]]}
                    name={option[0]}
                  />
                }
                label={option[1]}
                onChange={handleChange}
                key={option[0]}
              />
            );
          })}
        </FormGroup>
      </FormControl>
    </div>
  );
};

export default CheckBox;
