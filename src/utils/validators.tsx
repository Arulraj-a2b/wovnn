/* eslint-disable */
import type { IsEmptyValueType } from "./validatorsTypes";

const isEmpty = (value: IsEmptyValueType): boolean =>
  value === undefined || value === null || value === "";

const isNotNumber = (value: IsEmptyValueType) => {
  if (!isEmpty(value)) {
    const parsedValue = Number(value);
    return Number.isNaN(parsedValue);
  }
  return true;
};

const isValidEmail = (value: string) => {
  if (typeof value === "string") {
    return (
      value
        .trim()
        .match(
          /^([a-zA-Z0-9_+\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,6})$/
        ) !== null
    );
  }
  return false;
};

export { isEmpty, isNotNumber, isValidEmail };
