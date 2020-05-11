function format_two_digits(n) {
  return n < 10 ? '0' + n : n;
}
export function time_format(d) {
  let hours = format_two_digits(d.getHours());
  let minutes = format_two_digits(d.getMinutes());

  return hours + ':' + minutes;
}


