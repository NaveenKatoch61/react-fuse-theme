import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField } from "@material-ui/core";
import "./StaticText.css";

const useStyles = makeStyles((theme) => ({
  div: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1),
  },
}));

export default function StaticText(props) {
  const fieldData = props.fieldData;
  var style = { borderWidth: "0px" };

  var inputProps = {
    classes: { classes: { notchedOutline: "" } },
  };

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
  const useStyle = makeStyles(() => ({
    customClass: {
      width: fieldData.ControlWidth,
    },
    FormHelperTextProps: {
      textAlign: "center",
    },
    notchedOutline: {
      borderWidth: borderWidth,
      borderColor: "black !important",
    },
  }));

  const cssClasses = useStyle();

  var classes = "common_staticText " + props.className + " " + useStyles.div;

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
    style = { display: "none" };
  }

  inputProps.classes.notchedOutline = cssClasses.notchedOutline;


  return (
    <div id={fieldData.FieldInternalName}>
      <TextField
        className={classes}
        id={fieldData.FieldInternalName}
        name={fieldData.FieldInternalName}
        type="text"
        disabled={true}
        variant="outlined"
        fullWidth
        style={style}
        placeholder={fieldData.LabelText}
        InputProps={inputProps}
        // eslint-disable-next-line react/jsx-no-duplicate-props
        inputProps={{
          style: {
            textAlign: "center",
            color: "black",
            textDecoration: "none",
            fontWeight: "bold",
          },
        }}
      />
    </div>
  );
}
