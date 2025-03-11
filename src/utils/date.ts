import * as fns from 'date-fns';

type DateFormat = 'yyyy-MM-dd';

function format(date: Date, format: DateFormat): string {
  return fns.format(date, format)
}

export { format };
