import * as fns from 'date-fns';

type DateFormat =
| 'yyyy-MM-dd'
| 'dd-MM-yyyy HH:mm:ss'
| 'HH:mm:ss';

function formatDate(date: Date, format?: DateFormat): string {
  if (!format) return date.toISOString();
  return fns.format(date, format)
}

export { formatDate };
