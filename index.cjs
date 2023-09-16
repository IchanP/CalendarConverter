'use strict';

/**
 * Wrapper for time and calendar conversion methods.
 */
class TemporalConverter {
  /**
   * Converts from the Japanese Imperial Year, Kōki, to the Gregorian Calendar.
   *
   * Kōki information: https://en.wikipedia.org/wiki/Japanese_imperial_year .
   *
   * @param {number} kokiYear - The Japanese Imperial Year in integer format.
   * @returns {string} - Returns the converted year in "YYYY BCE/CE" format or an empty string.
   */
  KokiToFormattedGregorian (kokiYear) {
    try {
      this.#numberVerifier(kokiYear);
      const yearsAheadOfGregorian = 660;
      const gregorianFromKoki = kokiYear - yearsAheadOfGregorian;
      return gregorianFromKoki < 0 ? this.#KokiToBCE(gregorianFromKoki) : this.#KokiToCe(gregorianFromKoki)
    } catch (error) {
      console.error(error);
      return ''
    }
  }

  /**
   * Converts from the Gregorian Calendar to Kōki, Japanese Imperial Year.
   *
   * Gregorian Calendar information: https://en.wikipedia.org/wiki/Gregorian_calendar .
   *
   * @param {number} gregorianYear - The Gregorian year in integer format.
   * @param {string} timeEra - The era of the year, accepted args: "BCE/CE/BC/AD".
   * @returns {string} - Returns the converted year in "Kōki YYYY", "Pre-Kōki YYYY" format or an empty string.
   */
  GregoriantoFormattedKoki (gregorianYear, timeEra) {
    try {
      this.#CEVerifier(timeEra);
      return timeEra === 'BCE' || timeEra === 'BC' ? this.#BeforeCommonEraToKoki(Number(gregorianYear)) : this.#postCommonEraToKoki(Number(gregorianYear))
    } catch (error) {
      console.error(error);
      return ''
    }
  }

  /**
   * Converts Gregorian Calendar AD/CE to Kōki.
   *
   * @param {number} ceGregorianYear - The Gregorian Year in the common era.
   * @returns {string} - Returns the Kōki year in "Kōki YYYY" format.
   */
  #postCommonEraToKoki (ceGregorianYear) {
    const yearsBehindKoki = 660;
    return 'Kōki ' + (ceGregorianYear + yearsBehindKoki)
  }

  /**
   * Converts Gregorian Calendar BCE/BC to Kōki.
   *
   * @param {number} bceGregorianYear - The Gregorian Year before the common era.
   * @returns {string} - Returns the Kōki year in "Pre-Kōki/Kōki YYYY" format.
   */
  #BeforeCommonEraToKoki (bceGregorianYear) {
    const yearsBehindKoki = 661;
    const kokiFromGregorian = -bceGregorianYear + yearsBehindKoki; // Negative value of bceGregorianYear
    return kokiFromGregorian < 0 ? 'Pre-Kōki ' + Math.abs(kokiFromGregorian) : 'Kōki ' + kokiFromGregorian
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
    const startFromOne = 1; // Gregorian Calendar starts from 1
    return (positiveGregorianYear + startFromOne) + ' CE'
  }

  /**
   * Helper method that verifies that the passed argument is an integer and of number type.
   *
   * @param {unknown} toVerify - The variable to verify.
   * @throws {Error} - Throws an error if the passed argument is not of type number and an integer.
   */
  #numberVerifier (toVerify) {
    if (typeof toVerify !== 'number' || !Number.isInteger(toVerify)) {
      throw new Error('Expected number as argument but received ' + typeof toVerify)
    }
  }

  /**
   * Verifies that the passed argument is of type string and in BCE/CE format.
   *
   * @param {unknown} toVerify - The variable to verify.
   * @throws {Error} - Throws an error if the passed argument is not of type string and in BCE/CE format.
   */
  #CEVerifier (toVerify) {
    const regex = /(BCE|CE|BC|AD)/;
    if (typeof toVerify !== 'string') {
      throw new Error('Expected string as argument but received' + typeof toVerify)
    } else if (!toVerify.match(regex)) {
      throw new Error('Expected string to match "BCE/CE/AD/BC" format.')
    }
  }
}
const temporalConverter = new TemporalConverter();

module.exports = temporalConverter;
