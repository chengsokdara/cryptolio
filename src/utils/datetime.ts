import moment from "moment";

export const fullDateTime = (value: number | string) =>
  moment(value).format("LLLL");
