/**
 * Wrapper for time and calendar conversion methods.
 */
class TemporalConverter {
  /**
   * Converts from the Japanese Imperial Year, Kōki, to the Gregorian Calendar.
   *
   * Kōki information: https://en.wikipedia.org/wiki/Japanese_imperial_year .
   *
   * @param {number} year - The Japanese Imperial Year in number format.
   * @returns {string} - Returns the converted year in "YYYY BCE/CE" format.
   */
  KokiToGregorian (year) {
    const reducedYears = year - 660
    let gregorianYear = reducedYears
    if (reducedYears < 0) {
      gregorianYear = Math.abs(reducedYears) + 'BCE'
    } else if (reducedYears >= 0) {
      const shiftedYears = reducedYears + 1 // This is necessary as "0" does not exist in the Gregorian Calendar
      gregorianYear = shiftedYears + 'CE'
    }
    return gregorianYear
  }
}

export default TemporalConverter
