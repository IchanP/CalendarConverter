/**
 * A wrapper for converting to Kōki from various calendars.
 */
export class Koki {
  /**
   * Converts Gregorian Calendar AD/CE to Kōki.
   *
   * @param {number} ceGregorianYear - The Gregorian Year in the common era.
   * @returns {string} - Returns the Kōki year in "Kōki YYYY" format.
   */
  postCommonEraToKoki (ceGregorianYear) {
    const yearsBehindKoki = 660
    return 'Kōki ' + (ceGregorianYear + yearsBehindKoki)
  }

  /**
   * Converts Gregorian Calendar BCE/BC to Kōki.
   *
   * @param {number} bceGregorianYear - The Gregorian Year before the common era.
   * @returns {string} - Returns the Kōki year in "Pre-Kōki/Kōki YYYY" format.
   */
  preCommonEraToKoki (bceGregorianYear) {
    const yearsBehindKoki = 661
    const kokiFromGregorian = -bceGregorianYear + yearsBehindKoki // Negative value of bceGregorianYear
    return kokiFromGregorian < 0
      ? 'Pre-Kōki ' + Math.abs(kokiFromGregorian)
      : 'Kōki ' + kokiFromGregorian
  }

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
