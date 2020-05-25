import assertString from './util/assertString';

export default function toDate(date: any ) {
  assertString(date);
  date = Date.parse(date);
  return !isNaN(date) ? new Date(date) : null;
}