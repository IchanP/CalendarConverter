import { Koki } from './Koki.js'
import { JapaneseEra } from './JapaneseEra.js'
import { GregorianVerifier } from './Verifiers/GregorianVerifier.js'

/**
 * Wrapper for time and calendar conversion methods.
 */
class TemporalConverter {
  #KokiWrapper
  #JpEraWrapper
  #verifier
  /**
   * Constructs the field wrappers.
   */
  constructor () {
    this.#verifier = new GregorianVerifier()
    this.#KokiWrapper = new Koki()
    this.#JpEraWrapper = new JapaneseEra()
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
    this.#verifier.verifyNumber(kokiYear)
    const yearsAheadOfGregorian = 660
    const gregorianFromKoki = kokiYear - yearsAheadOfGregorian
    return gregorianFromKoki < 0
      ? this.#KokiWrapper.KokiToBCE(gregorianFromKoki)
      : this.#KokiWrapper.KokiToCe(gregorianFromKoki)
  }

  /**
   * Converts from Japanese Era to Gregorian Calendar.
   *
   * Japanese Era information: https://en.wikipedia.org/wiki/Japanese_era_name .
   *
   * @param {string} eraName - The name of the Era.
   * @param {number} eraYear - The year in the era.
   * @returns {string} - Returns the converted year in "YYYY CE" format.
   */
  JpEraToFormattedGregorian (eraName, eraYear) {
    this.#verifier.verifyNumber(eraYear)
    return this.#JpEraWrapper.FromJpEraToGregorian(eraName, eraYear)
  }

  /**
   * Converts from the Gregorian Calendar to Kōki, Japanese Imperial Year.
   *
   * Gregorian Calendar information: https://en.wikipedia.org/wiki/Gregorian_calendar .
   * NOTE - Deprecated use KokiFromGregorian instead.
   *
   * @param {number} gregorianYearToKoki - The Gregorian year in integer format.
   * @param {string} timeEra - The era of the year, accepted args: "BCE/CE/BC/AD".
   * @returns {string} - Returns the converted year in "Kōki YYYY", "Pre-Kōki YYYY" format.
   */
  GregorianToFormattedKoki (gregorianYearToKoki, timeEra) {
    this.#verifier.verifyValidYearType(gregorianYearToKoki)
    this.#verifier.verifyString(timeEra)
    this.#verifier.verifyValidEraFormat(timeEra)

    return this.#verifier.isPreHumanEra(timeEra)
      ? this.#KokiWrapper.preCommonEraToKoki(Number(gregorianYearToKoki))
      : this.#KokiWrapper.postCommonEraToKoki(Number(gregorianYearToKoki))
  }

  /**
   * Converts from Gregorian Calendar to Japanese Era.
   *
   * Japanese Era information: https://en.wikipedia.org/wiki/Japanese_era_name .
   * NOTE - Deprecated, use JpEraFromGregorian instead.
   *
   * @param {number} gregorianYearToEra - The Gregorian year in integer format.
   * @param {number} month The month in integer format.
   * @returns {string} - Returns the Japanese Era in "Name YY" format.
   */
  GregorianToFormattedJpEra (gregorianYearToEra, month) {
    this.#verifier.verifyNumber(gregorianYearToEra)
    this.#verifier.verifyNumber(month)
    this.#verifier.verifyMonth(month)

    return this.#JpEraWrapper.gregorianWithMonthToJpEra(gregorianYearToEra, month)
  }

  /**
   * Converts from Gregorian Calendar to all matching Japanese Era years.
   *
   * Japanese Era information: https://en.wikipedia.org/wiki/Japanese_era_name .
   * NOTE - Deprecated use FirstJpErasFromGregorian instead.
   *
   * @param {number} gregorianYearToEra - The gregorian year in integer format.
   * @returns {Array<string>} - Returns an array of the mathcing Japanese Era years in "Name YY" format.
   */
  LazyGregorianToFormattedJpEra (gregorianYearToEra) {
    this.#verifier.verifyNumber(gregorianYearToEra)
    return this.#JpEraWrapper.gregorianWithoutMonthToJpEra(gregorianYearToEra)
  }

  // NOTE these are just wrappers for some of the above methods, but with different names.

  /**
   * Converts from Gregorian Calendar to all matching Japanese Era years.
   *
   * Japanese Era information: https://en.wikipedia.org/wiki/Japanese_era_name .
   *
   * @param {number} gregorianYearToEra - The gregorian year in integer format.
   * @returns {Array<string>} - Returns an array of the mathcing Japanese Era years in "Name YY" format.
   */
  FirstJpErasFromGregorian (gregorianYearToEra) {
    return this.LazyGregorianToFormattedJpEra(gregorianYearToEra)
  }

  /**
   * Converts from the Gregorian Calendar to Kōki, Japanese Imperial Year.
   *
   * Gregorian Calendar information: https://en.wikipedia.org/wiki/Gregorian_calendar .
   *
   * @param {number} gregorianYearToKoki - The Gregorian year in integer format.
   * @param {string} timeEra - The era of the year, accepted args: "BCE/CE/BC/AD".
   * @returns {string} - Returns the converted year in "Kōki YYYY", "Pre-Kōki YYYY" format.
   */
  KokiFromGregorian (gregorianYearToKoki, timeEra) {
    return this.GregorianToFormattedKoki(gregorianYearToKoki, timeEra)
  }

  /**
   * Converts from Gregorian Calendar to Japanese Era.
   *
   * Japanese Era information: https://en.wikipedia.org/wiki/Japanese_era_name .
   *
   * @param {number} gregorianYearToEra - The Gregorian year in integer format.
   * @param {number} month - The month in integer format.
   * @returns {string} - Returns the Japanese Era in "Name YY" format.
   */
  JpEraFromGregorian (gregorianYearToEra, month) {
    return this.GregorianToFormattedJpEra(gregorianYearToEra, month)
  }
}
const temporalConverter = new TemporalConverter()

export default temporalConverter
