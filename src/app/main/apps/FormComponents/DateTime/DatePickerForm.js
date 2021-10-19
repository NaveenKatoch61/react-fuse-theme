import React, { useState } from "react";
import "./DatePickerForm.css";
import { makeStyles } from "@material-ui/core/styles";
import { KeyboardDatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

const DatePickerForm = (props) => {
  const fieldData = props.fieldData;
  var defValue  = fieldData.FieldDefaultValue;
  if(fieldData.FieldDefaultValue === ""){
    defValue = null;
  }
  const [fieldValue, setFieldValue] = useState(defValue);
  var format = "";

  if (fieldData.FieldType === "Date") {
    format = fieldData.DateFormat;
  }
  
  
  var borderWidth = "1px";
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
      borderWidth = "";
    }
  }
  const useStyles = makeStyles(() => ({
    customClass: {
      width: fieldData.ControlWidth,
    },
    multilineColor: {
      backgroundColor: fieldData.FieldBackgroundColor,
    },
    multilineColorWithHeight: {
      backgroundColor: fieldData.FieldBackgroundColor,
      height: fieldData.height,
    },
    multilineHeight: {
      height: fieldData.height,
    },
    FormHelperTextProps: {
      textAlign: fieldData.FieldSupportingTextAlignment,
    },
  }));

  const cssClasses = useStyles();
  var classes = "common " + props.className;
  var LabelText = "";
  var isRequired = false;
  var disabled = false;
  var hiddenStyle = {};
  var inputProps = {
    classes: { input: "" },
    readOnly: false,
  };
  if (
    fieldData.FieldBackgroundColor !== "Default" &&
    fieldData.height !== null
  ) {
    inputProps.classes.input = cssClasses.multilineColorWithHeight;
  } else if (
    fieldData.FieldBackgroundColor !== "Default" &&
    fieldData.height === null
  ) {
    inputProps.classes.input = cssClasses.multilineColor;
  } else if (
    fieldData.FieldBackgroundColor === "Default" &&
    fieldData.height !== null
  ) {
    inputProps.classes.input = cssClasses.multilineHeight;
  }

  var labelStyle = {
    shrink: true,
    style: {
      color: "",
      textDecoration: "none",
      fontStyle: "none",
      fontWeight: "none",
    },
    classes: { asterisk: "" },
  };

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

  if (fieldData.HideLabel === "NO") {
    LabelText = fieldData.LabelText;
  }


  if (fieldData.FieldCategory === "REQUIRED") {
    isRequired = true;
    labelStyle.classes.asterisk = "asterisk_required";
  } else if (fieldData.FieldCategory === "WARNING") {
    isRequired = true;
  } else if (fieldData.FieldCategory === "DISABLED") {
    disabled = true;
  } else if (fieldData.FieldCategory === "HIDDEN") {
    hiddenStyle = { display: "none" };
  } else if (fieldData.FieldCategory === "READONLY") {
    inputProps.readOnly = true;
  }


  console.log(fieldData.LabelUnderline );
  if (fieldData.LabelUnderline === "YES") {
    labelStyle.style.textDecoration = "underline";
  }
  if (fieldData.LabelItalic === "YES") {
    labelStyle.style.fontStyle = "italic";
  }
  if (fieldData.LabelBold === "YES") {
    // labelStyle.style.fontWeight = 'bold';
  }
  if (fieldData.LabelFontColor !== "Default") {
    labelStyle.style.color = fieldData.LabelFontColor;
  }

  if (
    fieldData.LabelAlignment === "Top" ||
    fieldData.FieldDefaultValue !== ""
  ) {
    // labelStyle.shrink = true;
  } else if (fieldData.LabelAlignment === "Left") {
    // labelStyle.shrink = false;
  }

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        inputVariant="outlined"
        className={classes}
        id={fieldData.FieldInternalName}
        name={fieldData.FieldInternalName}
        label={LabelText}
        disabled={disabled}
        style={hiddenStyle}
        required={isRequired}
        InputLabelProps={labelStyle}
        InputProps={inputProps}
        placeholder={fieldData.FieldPlaceHolder}
        helperText={fieldData.FieldSupportingText}
        format={format}
        onChange={setFieldValue}
        value={fieldValue}
      />
    </MuiPickersUtilsProvider>
  );
};

export default DatePickerForm;
