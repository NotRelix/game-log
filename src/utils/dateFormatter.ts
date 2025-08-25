import { format, formatDistanceStrict } from "date-fns";

export const formatLongDate = (date: Date) => {
  return format(date, "MMMM dd, yyyy ");
};

export const formatDistanceDate = (date: Date) => {
  return `${formatDistanceStrict(new Date(date), new Date())} ago`;
};
