/**
 * A wrapper for converting to Gregorian from various calendars.
 */
export class ToGregorian {
  /**
   * Handles calculation if Gregorian Year is BCE.
   *
   * @param {number} negativeGregorianYear - Negative value of Gregorian Years.
   * @returns {string} - Returns the year in "YYYY BCE" format.
   */
  KokiToBCE (negativeGregorianYear) {
    return Math.abs(negativeGregorianYear) + ' BCE'
  }

  /**
   * Handles calculation if Gregorian Year is CE.
   *
   * @param {string} positiveGregorianYear - Positive value of Gregorian Years.
   * @returns {string} - Returns the year in "YYYY CE" format.
   */
  KokiToCe (positiveGregorianYear) {
    const startFromOne = 1 // Gregorian Calendar starts from 1
    return (positiveGregorianYear + startFromOne) + ' CE'
  }
}
