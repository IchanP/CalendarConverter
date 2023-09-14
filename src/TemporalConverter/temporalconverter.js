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
    const reducedYears = year - 659
    let gregorianYear = reducedYears
    if (reducedYears <= 0) {
      const shiftedYears = Math.abs(reducedYears) - 1 // This is necessary as "0" does not exist in the Gregorian Calendar
      gregorianYear = shiftedYears + 'BCE'
    } else if (reducedYears > 0) {
      gregorianYear = reducedYears + 'CE'
    }
    return gregorianYear
  }
}

export default TemporalConverter
