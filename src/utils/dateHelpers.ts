enum DayOfWeek {
  Sunday,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
}

enum Months {
  January,
  February,
  March,
  April,
  May,
  June,
  July,
  August,
  September,
  October,
  November,
  December,
}

/**
 * @param {number} n - input number
 * returns a string to represent an ending of a number
 */

const getEnding = (n: number) => {
  const str = n.toString();
  const last = str[str.length - 1];
  switch (last) {
    case '1':
      return 'st';
    case '2':
      return 'nd';
    case '3':
      return 'rd';
    default:
      return 'th';
  }
};

/**
 * formats provided date to be like that: "Tuesday, 21th of September"
 * @param {Date} date - input date
 * @return {string} formatted date string
 */

export const formatDate = (date: Date): string => {
  const day = DayOfWeek[date.getDay()];
  const dateNumber = date.getDate();
  const month = Months[date.getMonth()];

  return `${day}, ${dateNumber}${getEnding(dateNumber)} of ${month}`;
};
