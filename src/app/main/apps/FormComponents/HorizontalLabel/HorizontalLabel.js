import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { InputLabel } from "@material-ui/core";
import "./HorizontalLabel.css";

const HorizontalLabel = (props) => {
  const fieldData = props.fieldData;
  var color = "";
  if (fieldData.FontColor !== "Default") {
    color = fieldData.FontColor;
  }

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
  console.log(fieldData.TextAlign);
  const useStyles = makeStyles(() => ({
    style: {
      textDecoration: textDecoration,
      fontStyle: fontStyle,
      fontWeight: fontWeight,
      textAlign: fieldData.TextAlign,
      border: "1px solid",
      paddingLeft: "5px!important",
    },
    styleSpan: {
      lineHeight: "52px",
      color: color,
    },
  }));

  const cssClasses = useStyles();
  var classes = "common " + props.className;

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

  classes += " " + cssClasses.style;
  var labaeltext = fieldData.LabelText;

  var spanClasses = cssClasses.styleSpan;

  return (
    <div>
      <InputLabel className={classes} id={fieldData.FieldInternalName}>
        <span className={spanClasses}>{labaeltext}</span>
      </InputLabel>
    </div>
  );
};

export default HorizontalLabel;
