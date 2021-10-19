import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { InputLabel } from "@material-ui/core";
import "./VerticalLabel.css";

const VerticalLabel = (props) => {
  const fieldData = props.fieldData;

  var color = "";
  if (fieldData.FontColor !== "Default") {
    color = fieldData.FontColor;
  }
  var fontWeight, fontStyle, textDecoration;
  if (fieldData.LabelUnderline === "YES") {
    textDecoration = "underline";
  } else {
    textDecoration = "none";
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

  const useStyles = makeStyles(() => ({
    style: {
      fontStyle: fontStyle,
      fontWeight: fontWeight,
      textAlign: "center",
      // writingMode: "vertical-rl",
      // paddingRight : "48%!important",
      border: "1px solid",
    },
    styleSpan: {
      transform: "rotate(180deg)",
      writingMode: "vertical-rl",
      color: color,
      textDecoration: textDecoration,
      lineHeight: "20px",
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
  labaeltext = labaeltext.replace(" ", "\n");

  var spanClasses = cssClasses.styleSpan + " new-line";

  return (
    <div>
      <InputLabel className={classes} id={fieldData.FieldInternalName}>
        <span className={spanClasses}>{labaeltext}</span>
      </InputLabel>
    </div>
  );
};

export default VerticalLabel;
