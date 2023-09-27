import { Koki } from './Koki'
import { JapaneseEra } from './JapaneseEra'
import { Verifier } from './Verifier'

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
    this.#verifier = new Verifier()
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
   * Converts from the Gregorian Calendar to Kōki, Japanese Imperial Year.
   *
   * Gregorian Calendar information: https://en.wikipedia.org/wiki/Gregorian_calendar .
   *
   * @param {number} gregorianYearToKoki - The Gregorian year in integer format.
   * @param {string} timeEra - The era of the year, accepted args: "BCE/CE/BC/AD".
   * @returns {string} - Returns the converted year in "Kōki YYYY", "Pre-Kōki YYYY" format.
   */
  GregorianToFormattedKoki (gregorianYearToKoki, timeEra) {
    this.#verifyCE(timeEra)

    return timeEra === 'BCE' || timeEra === 'BC'
      ? this.#KokiWrapper.preCommonEraToKoki(Number(gregorianYearToKoki))
      : this.#KokiWrapper.postCommonEraToKoki(Number(gregorianYearToKoki))
  }

  /**
   * Converts from Gregorian Calendar to Japanese Era.
   *
   * Japanese Era information: https://en.wikipedia.org/wiki/Japanese_era_name .
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
   *
   * @param {number} gregorianYearToEra - The gregorian year in integer format.
   * @returns {Array<string>} - Returns an array of the mathcing Japanese Era years in "Name YY" format. Returns an empty string on invalid input.
   */
  LazyGregorianToFormattedJpEra (gregorianYearToEra) {
    this.#verifier.verifyNumber(gregorianYearToEra)
    return this.#JpEraWrapper.gregorianWithoutMonthToJpEra(gregorianYearToEra)
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
   * Verifies that the passed argument is of type string and in BCE/CE format.
   *
   * @param {unknown} toVerify - The variable to verify.
   * @throws {Error} - Throws an error if the passed argument is not of type string and in BCE/CE format.
   */
  #verifyCE (toVerify) {
    const regex = /(BCE|CE|BC|AD)/
    if (typeof toVerify !== 'string') {
      throw new Error('Expected string as argument but received' + typeof toVerify)
    } else if (!toVerify.match(regex)) {
      throw new Error('Expected string to match "BCE/CE/AD/BC" format.')
    }
  }
}
const temporalConverter = new TemporalConverter()

export default temporalConverter
