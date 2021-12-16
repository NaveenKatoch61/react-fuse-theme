import React from "react";
import "./Widget.css";
import TextField from "../TextField/TextField";
import UnMappedField from "../UnMappedField/UnMappedField";
import DatePickerForm from "../DateTime/DatePickerForm";
import DateTimePickerForm from "../DateTime/DateTimePickerForm";
import TimePickerForm from "../DateTime/TimePickerForm";
import Separator from "../Separator/Separator";
import StaticText from "../StaticText/StaticText";
import VerticalLabel from "../VerticalLabel/VerticalLabel";
import HorizontalLabel from "../HorizontalLabel/HorizontalLabel";
import RadioButton from "../RadioButton/RadioButton";
import CheckBox from "../CheckBox/CheckBox";
import DynamicDropdownLookup from "../DynamicDropdownLookup/DynamicDropdownLookup";

function Widget(props) {
  const widgetDataArray = props.widgetData;

  return (
    <div>
      {Object.keys(widgetDataArray).map((fieldIndex) => {
        if (widgetDataArray[fieldIndex] === null) {
          return (
            <UnMappedField key={fieldIndex} id={fieldIndex}></UnMappedField>
          );
        } else {
          switch (widgetDataArray[fieldIndex].FieldType) {
            case "Long Text":
            case "Integer":
            case "Float":
            case "Email":
            case "Password":
            case "Text": {
              return (
                <TextField
                  key={fieldIndex}
                  fieldData={widgetDataArray[fieldIndex]}
                ></TextField>
              );
            }
            case "Date": {
              return (
                <DatePickerForm
                  key={fieldIndex}
                  fieldData={widgetDataArray[fieldIndex]}
                ></DatePickerForm>
              );
            }
            case "Time": {
              return (
                <TimePickerForm
                  key={fieldIndex}
                  fieldData={widgetDataArray[fieldIndex]}
                ></TimePickerForm>
              );
            }
            case "Date Time": {
              return (
                <DateTimePickerForm
                  key={fieldIndex}
                  fieldData={widgetDataArray[fieldIndex]}
                ></DateTimePickerForm>
              );
            }
            case "Static Text": {
              return (
                <StaticText
                  key={fieldIndex}
                  fieldData={widgetDataArray[fieldIndex]}
                ></StaticText>
              );
            }
            case "Separator": {
              return (
                <Separator
                  key={fieldIndex}
                  fieldData={widgetDataArray[fieldIndex]}
                ></Separator>
              );
            }
            case "Vertical Label": {
              return (
                <VerticalLabel
                  key={fieldIndex}
                  fieldData={widgetDataArray[fieldIndex]}
                ></VerticalLabel>
              );
            }
            case "Horizontal Label": {
              return (
                <HorizontalLabel
                  key={fieldIndex}
                  fieldData={widgetDataArray[fieldIndex]}
                ></HorizontalLabel>
              );
            }
            case "RadioButton": {
              return (
                <RadioButton
                  key={fieldIndex}
                  fieldData={widgetDataArray[fieldIndex]}
                ></RadioButton>
              );
            }
            case "CheckBox": {
              return (
                <CheckBox
                  key={fieldIndex}
                  fieldData={widgetDataArray[fieldIndex]}
                ></CheckBox>
              );
            }
            case "DynamicDropdownLookup": {
              return (
                <DynamicDropdownLookup
                  key={fieldIndex}
                  fieldData={widgetDataArray[fieldIndex]}
                ></DynamicDropdownLookup>
              );
            }
            default: {
              console.log(widgetDataArray[fieldIndex].FieldType);
              return <div key={fieldIndex}></div>;
            }
          }
        }
      })}
    </div>
  );
}

export default Widget;
