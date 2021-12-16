import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import "./Separator.css";

const Separator = (props) => {
  const fieldData = props.fieldData;
  var style = { borderWidth: "0px" };

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
  style.borderWidth = borderWidth;
  const useStyles = makeStyles(() => ({
    customClass: {
      width: fieldData.ControlWidth,
    },
  }));

  const cssClasses = useStyles();

  var classes = "common_separator " + props.className;

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

  if (fieldData.Hide === "YES") {
    style = { visibility: "hidden" };
  }
  if (fieldData.RemoveFieldSpace === "Checked") {
    style = { display: "none" };
  }
  return (
    <div
      className={classes}
      id={fieldData.FieldInternalName}
      style={style}
    ></div>
  );
};

export default Separator;
