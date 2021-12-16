import React, { useState } from "react";
import "./TextField.css";
import { TextField, Tooltip } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
// import NumberOnlyInputMask from "../InputMasks/NumberOnlyInputMask";

function TextFormField(props) {
  const fieldData = props.fieldData;

  const [fieldValue, setFieldValue] = useState(fieldData.FieldDefaultValue);
  var textFieldtype = "text";

  if (fieldData.FieldType === "Password") {
    textFieldtype = "password";
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
    notchedOutline: {
      borderWidth: borderWidth,
      borderColor: fieldData.borderColor + "!important",
    },
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
  var isMultiline = false;
  var rows = "1";
  var inputProps = {
    classes: { notchedOutline: "", input: "" },
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
    // shrink: false,
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

  if (fieldData.BorderColor !== "Default") {
    inputProps.classes.notchedOutline = cssClasses.notchedOutline;
  }

  if (fieldData.FieldCategory === "REQUIRED") {
    isRequired = true;
    labelStyle.classes.asterisk = "asterisk_required";
  } else if (fieldData.FieldCategory === "WARNING") {
    isRequired = true;
  } else if (fieldData.FieldCategory === "DISABLED") {
    disabled = true;
  } else if (fieldData.FieldCategory === "HIDDEN") {
    hiddenStyle = { visibility: "hidden" };
  } else if (fieldData.FieldCategory === "READONLY") {
    inputProps.readOnly = true;
  }

  if(fieldData.RemoveFieldSpace=== "Checked")
  {
    hiddenStyle = { display: "none" };
  }

  if (fieldData.LabelUnderline === "YES") {
    labelStyle.style.textDecoration = "underline";
  }
  if (fieldData.LabelItalic === "YES") {
    labelStyle.style.fontStyle = "italic";
  }
  if (fieldData.LabelBold === "YES") {
    labelStyle.style.fontWeight = 'bold';
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
  if (fieldData.rows !== null && fieldData.rows !== undefined) {
    isMultiline = true;
    rows = fieldData.rows;
  }

  // if (fieldData.FieldType === "Integer" || fieldData.FieldType === "Float") {
  //   inputProps.inputComponent = NumberOnlyInputMask;
  // }
  var pattern = new RegExp(
    /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
  );

  const setValueHandler = (e) => {
    if (fieldData.FieldType === "Integer") {
      setFieldValue(e.target.value.replace(/[^0-9]/g, ""));
    } else if (fieldData.FieldType === "Float") {
      if (parseFloat(e.target.value) || e.target.value === "") {
        setFieldValue(e.target.value);
      }
    } else {
      setFieldValue(e.target.value);
    }
  };

  const afterValueChange = (e) => {
    if (fieldData.FieldType === "Email" && !pattern.test(e.target.value)) {
      setFieldValue("");
    }
  };
  
  return (
    <div>
      <Tooltip title={fieldData.FieldCalloutText}>
        <TextField
          className={classes}
          id={fieldData.FieldInternalName}
          name={fieldData.FieldInternalName}
          label={LabelText}
          disabled={disabled}
          variant="outlined"
          fullWidth
          type={textFieldtype}
          style={hiddenStyle}
          required={isRequired}
          InputLabelProps={labelStyle}
          InputProps={inputProps}
          // eslint-disable-next-line react/jsx-no-duplicate-props
          inputProps={{
            maxLength: fieldData.FieldMaxCharacters,
            minLength: fieldData.FieldMinimumCharacters,
            min: fieldData.MinimumValueRange,
            max: fieldData.MaximumValueRange,
          }}
          placeholder={fieldData.FieldPlaceHolder}
          helperText={fieldData.FieldSupportingText}
          multiline={isMultiline}
          rows={rows}
          FormHelperTextProps={{
            classes: {
              root: cssClasses.FormHelperTextProps,
            },
          }}
          onChange={setValueHandler}
          onBlur={afterValueChange}
          value={fieldValue}
        />
      </Tooltip>
    </div>
  );
}

export default TextFormField;
