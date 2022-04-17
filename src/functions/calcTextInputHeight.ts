export const calcTextInputHeight = (value: string) => {
  const rowsNum = value.split("\n").length;
  return rowsNum;
};
