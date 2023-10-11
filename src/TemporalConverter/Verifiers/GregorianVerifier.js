import { Verifier } from './Verifier.js'

/**
 * Performs verifications and validations specific to Gregorian conversions.
 */
export class GregorianVerifier extends Verifier {
  /**
   * Verifies that the passed string matches BCE.
   *
   * @param {string} timeEra - The string to verify matches BCE.
   * @returns {boolean} - Returns true if the passed string matches BCE, false otherwise.
   */
  isPreHumanEra (timeEra) {
    return timeEra === 'BCE' || timeEra === 'BC'
  }

  /**
   * Verifies that the passed string matches CE.
   *
   * @param {string} timeEra - The string to verify matches CE.
   * @returns {boolean} - Returns true if the passed string matches CE, false otherwise.
   */
  isPostHumanEra (timeEra) {
    return timeEra === 'CE' || timeEra === 'AD'
  }

  /**
   * Verifies that the passed argument is in a valid Gregorian time format.
   *
   * @param {string} eraName - The variable to verify.
   * @throws {Error} - Throws an error if the passed argument does not match "/(BCE|CE|BC|AD)/" regex.
   */
  verifyValidEraFormat (eraName) {
    const regex = /(BCE|CE|BC|AD)/
    if (!eraName.match(regex)) {
      throw new Error('Expected string to match "BCE/CE/AD/BC" format.')
    }
  }

  /**
   * Verifies that the passed argument is of either number or string type.
   *
   * @param {unknown} year  - The variable to verify, either number or string.
   * @throws {Error} - Throws an error if the passed argument is not of type number or string.
   */
  verifyValidYearType (year) {
    if (typeof year !== 'number' && typeof year !== 'string') {
      throw new Error('Expected year to be of type number or string, got ' + typeof year)
    }
  }
}
