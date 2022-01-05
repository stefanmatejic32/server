/**
 * Returns the next date (i.e the day after).
 * @param {Date} date  The date to get the next day of.
 * @returns {Date}
 */
function getNextDay(date) {
  let tomorrow = new Date(date);
  tomorrow.setDate(date.getUTCDate() + 1); // Returns epoch value.
  return new Date(tomorrow); // Convert from epoch to Date.
}

/**
 * Creates and returns a Google Calendars 'events resource'.
 * @param {string} date  A string in the following format: 'Year-month-day'.
 * @param {string} startTime  The start time to associate with the 'start dateTime'.
 * @param {string} endTime  The end time to associate with the 'end dateTime'.
 * @returns {object}  A Google Calendars 'events resource'.
 */
function makeEventResource(date, startTime, endTime, user) {
  return {
    summary: user + " appointment",
    start: {
      dateTime: date + startTime,
      timeZone: "UTC",
    },
    end: {
      dateTime: date + endTime,
      timeZone: "UTC",
    },
  };
}

module.exports = {
  getNextDay,
  makeEventResource,
};
