export const determineType = (value: any) => {
  if (value === "true" || value === "false") {
    return "boolean";
  } else if (!isNaN(value)) {
    return "number";
  } else if (value.match(/^[A-Za-z0-9+/=]*$/)) {
    return "string";
  } else {
    return "string";
  }
};