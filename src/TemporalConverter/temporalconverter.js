/**
 * Wrapper for time and calendar conversion methods.
 */
class TemporalConverter {
  /**
   * Converts from the Japanese Imperial Year, Kōki, to the Gregorian Calendar.
   *
   * Kōki information: https://en.wikipedia.org/wiki/Japanese_imperial_year .
   *
   * @param {number} kokiYear - The Japanese Imperial Year in number format.
   * @returns {string} - Returns the converted year in "YYYY BCE/CE" format or an empty string.
   */
  KokiToFormattedGregorian (kokiYear) {
    try {
      const yearsAheadOfGregorian = 660
      if (typeof kokiYear !== 'number') {
        throw new Error('Expected number as argument but received ' + typeof kokiYear)
      }
      const gregorianYear = kokiYear - yearsAheadOfGregorian
      return gregorianYear < 0 ? this.#KokiToBCE(gregorianYear) : this.#KokiToCe(gregorianYear)
    } catch (error) {
      console.error(error)
      return ''
    }
  }

  /**
   * Handles calculation if Gregorian Year is BCE.
   *
   * @param {number} negativeGregorianYear - Negative value of Gregorian Years.
   * @returns {string} - Returns the year in "YYYY BCE" format.
   */
  #KokiToBCE (negativeGregorianYear) {
    return Math.abs(negativeGregorianYear) + ' BCE'
  }

  /**
   * Handles calculation if Gregorian Year is CE.
   *
   * @param {string} positiveGregorianYear - Positive value of Gregorian Years.
   * @returns {string} - Returns the year in "YYYY CE" format.
   */
  #KokiToCe (positiveGregorianYear) {
    const startFromOne = 1 // Gregorian Calendar starts from 1
    return (positiveGregorianYear + startFromOne) + ' CE'
  }
}

const temporalConverter = new TemporalConverter()

export default temporalConverter
