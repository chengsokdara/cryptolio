import currency from "currency.js";

export const USD = (value: number | string) =>
  currency(value, { precision: 3 }).format();
