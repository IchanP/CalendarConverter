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
  KokiToFormattedGregorian (year) {
    if (!year) {
      return NaN
    }
    const reducedYears = year - 660
    return reducedYears < 0 ? this.#KokiToBCE(reducedYears) : this.#KokiToCe(reducedYears)
  }

  /**
   * Handles calculation if Gregorian Year is BCE.
   *
   * @param {number} reducedYears - Negative value of Gregorian Years.
   * @returns {string} - Returns the year in "YYYY BCE" format.
   */
  #KokiToBCE (reducedYears) {
    return Math.abs(reducedYears) + ' BCE'
  }

  /**
   * Handles calculation if Gregorian Year is CE.
   *
   * @param {string} reducedYears - Positive value of Gregorian Years.
   * @returns {string} - Returns the year in "YYYY CE" format.
   */
  #KokiToCe (reducedYears) {
    return (reducedYears + 1) + ' CE'
  }
}

const temporalConverter = new TemporalConverter()

export default temporalConverter
