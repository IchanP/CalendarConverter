import { TimeFrame } from '../TimeFrame.js'
import { Verifier } from './Verifier.js'

/**
 * Performs verifications and validations specific to Japanese Era conversions.
 */
export class JapanaseEraVerifier extends Verifier {
  /**
   * Informs the user that the passed argument does not exist if the argument is falsy.
   *
   * @param {unknown} eraName - The era name to verify for truthy value.
   * @throws {Error} - Throws an error if the passed argument is falsy.
   */
  verifyEraNameExists (eraName) {
    if (!eraName) {
      throw new Error('Passed era name does not exist.')
    }
  }

  /**
   * Verifies that the passed year is in range of the era time period.
   *
   * @param {TimeFrame} eraInfo - The name of the era to verify against.
   * @param {number} eraYearToVerIfy - The year to verify is in range.
   * @throws {Error} - Throws an error if the era year is not in range.
   */
  verifyEraTimeFrame (eraInfo, eraYearToVerIfy) {
    this.verifyEraYearIsPositive(eraYearToVerIfy)
    if (this.#isCurrentEra(eraInfo.name)) {
      return
    }
    if (this.#isOutOfHigherRange(eraInfo, eraYearToVerIfy)) {
      throw new Error('The era year is out of the higher range.')
    }
  }

  /**
   * Verifies that the passed era year is within the higher bounds of the passed era.
   *
   * @param {TimeFrame} eraToVerifyAgainst - The era to verify the era year against.
   * @param {number} eraYearToVerIfy - The year to verify is within the higher range.
   * @returns {boolean} - Returns true if the era year is out of the higher range, false otherwise.
   */
  #isOutOfHigherRange (eraToVerifyAgainst, eraYearToVerIfy) {
    return ((eraToVerifyAgainst.endYear - eraToVerifyAgainst.startYear) + 1) < eraYearToVerIfy
  }

  /**
   * Checks whether the passed argument matches the current era name.
   *
   * @param {string} eraName - The era name to check.
   * @returns {boolean}  - Returns true if the passed arguemnt matches the current era name, false otherwise.
   */
  #isCurrentEra (eraName) {
    return eraName === 'Reiwa' // TODO change this to last era in list not specifically Reiwa.
  }

  /**
   * Verifies that the passed argument is a positive value greater than 0.
   *
   * @param {number} eraYearToVerIfy - The era year to verify.
   * @throws {Error} - Throws an error notifing the user that the era year cannot be less than 1.
   */
  verifyEraYearIsPositive (eraYearToVerIfy) {
    if (eraYearToVerIfy < 1) {
      throw new Error('The era year cannot be less than 1.')
    }
  }
}
