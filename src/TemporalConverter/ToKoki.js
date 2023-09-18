/**
 * A wrapper for converting to Kōki from various calendars.
 */
export class ToKoki {
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
}
