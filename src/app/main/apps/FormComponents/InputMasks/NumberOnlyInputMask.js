import React from "react";
import NumberFormat from "react-number-format";
import PropTypes from "prop-types";

function NumberOnlyInputMask(props) {
  const { inputRef, onChange, ...other } = props;
  const MAX_VAL = props.max;
  const MIN_VALUE = props.max;
  const onBlurNumber = (Event) => {
    if (Event.target.value <= MIN_VALUE) {

    }
  };
  const withValueLimit = (values) =>
    MAX_VAL === undefined
      ? true
      : values.floatValue === undefined || values.floatValue === ""
      ? true
      : values.floatValue <= MAX_VAL;
  return (
    <NumberFormat
      {...other}
      getInputRef={inputRef}
      onValueChange={(values) => {
        onChange({
          target: {
            name: props.name,
            value: values.value,
          },
        });
      }}
      isAllowed={withValueLimit}
      onBlur={onBlurNumber}
      decimalSeparator="."
      decimalScale={2}
      type="text"
      isNumericString={true}
      placeholder={props.placeholder}
    />
  );
}

NumberOnlyInputMask.propTypes = {
  inputRef: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default NumberOnlyInputMask;
