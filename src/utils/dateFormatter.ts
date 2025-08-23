import { format } from "date-fns";

export const formatLongDate = (date: Date) => {
  return format(date, "MMMM dd, yyyy ");
};
