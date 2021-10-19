import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import "./RadioButton.css";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

const RadioButton = (props) => {
  const fieldData = props.fieldData;
  var options_Array = fieldData.RadioOptions.split("||~~||");
  options_Array = options_Array.map(
    (element) => (element = element.split("|~|"))
  );



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
    notchedOutline: {
    },
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




  
  return (
    <div>
      <FormControl component="fieldset" className={classes} >
        <FormLabel component="legend">{fieldData.LabelText}</FormLabel>

        <RadioGroup aria-label={props.FieldInternalName} name={props.FieldInternalName} >
          {options_Array.map((option) => (
            <FormControlLabel
              value={option[0]}
              control={<Radio />}
              label={option[1]} 
              key={option[0]}
            />
          ))}
        </RadioGroup>
      </FormControl>
    </div>
  );
};

export default RadioButton;
