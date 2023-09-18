import { ToKoki } from './ToKoki'
import { ToGregorian } from './ToGregorian'
import { ToJapaneseEra } from './ToJapaneseEra'

/**
 * Wrapper for time and calendar conversion methods.
 */
class TemporalConverter {
  #toGregorianWrapper
  #toKokiWrapper
  #toJpEraWrapper
  /**
   * Constructs the field wrappers.
   */
  constructor () {
    this.#toKokiWrapper = new ToKoki()
    this.#toGregorianWrapper = new ToGregorian()
    this.#toJpEraWrapper = new ToJapaneseEra()
  }

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
      this.#numberVerifier(kokiYear)
      const yearsAheadOfGregorian = 660
      const gregorianFromKoki = kokiYear - yearsAheadOfGregorian
      return gregorianFromKoki < 0
        ? this.#toGregorianWrapper.KokiToBCE(gregorianFromKoki)
        : this.#toGregorianWrapper.KokiToCe(gregorianFromKoki)
    } catch (error) {
      return ''
    }
  }

  /**
   * Converts from the Gregorian Calendar to Kōki, Japanese Imperial Year.
   *
   * Gregorian Calendar information: https://en.wikipedia.org/wiki/Gregorian_calendar .
   *
   * @param {number} gregorianYearToKoki - The Gregorian year in integer format.
   * @param {string} timeEra - The era of the year, accepted args: "BCE/CE/BC/AD".
   * @returns {string} - Returns the converted year in "Kōki YYYY", "Pre-Kōki YYYY" format or an empty string.
   */
  GregorianToFormattedKoki (gregorianYearToKoki, timeEra) {
    try {
      this.#CEVerifier(timeEra)

      return timeEra === 'BCE' || timeEra === 'BC'
        ? this.#toKokiWrapper.preCommonEraToKoki(Number(gregorianYearToKoki))
        : this.#toKokiWrapper.postCommonEraToKoki(Number(gregorianYearToKoki))
    } catch (error) {
      return ''
    }
  }

  /**
   * Converts from Gregorian Calendar to Japanese Era.
   *
   * Japanese Era information: https://en.wikipedia.org/wiki/Japanese_era_name .
   *
   * @param {number} gregorianYearToEra - The Gregorian year in integer format.
   * @param {number} [month] The month in integer format, may be omitted.
   * @returns {string} - Returns the Japanese Era in "Name YY, M Month" format. Or "Name YY" if month is omitted. Returns an empty string on invalid input.
   */
  GregorianToFormattedJpEra (gregorianYearToEra, month) {
    try {
      this.#numberVerifier(gregorianYearToEra)
      if (month !== undefined) {
        this.#numberVerifier(month)
        this.#monthVerifier(month)
      }
      if (month) {

      }
      if (!month) {

      }
      return 'yep'
    } catch (error) {
      return ''
    }
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
    const regex = /(BCE|CE|BC|AD)/
    if (typeof toVerify !== 'string') {
      throw new Error('Expected string as argument but received' + typeof toVerify)
    } else if (!toVerify.match(regex)) {
      throw new Error('Expected string to match "BCE/CE/AD/BC" format.')
    }
  }

  /**
   * Verifies that the passed argument is a number between the values of 1 and 12.
   *
   * @param {number} month - The number to verify.
   * @throws {Error} - Throws an error if the passed argument is not between 1 and 12.
   */
  #monthVerifier (month) {
    if (month < 1 || month > 12) {
      throw new Error('Expected month to be between 1 and 12, received' + month)
    }
  }
}
const temporalConverter = new TemporalConverter()

export default temporalConverter
