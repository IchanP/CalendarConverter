/**
 * Performs general verifications such as type and range checks.
 */
export class Verifier {
  /**
   * Helper method that verifies that the passed argument is an integer and of number type.
   *
   * @param {unknown} toVerify - The variable to verify.
   * @throws {Error} - Throws an error if the passed argument is not of type number and an integer.
   */
  verifyNumber (toVerify) {
    if (typeof toVerify !== 'number' || !Number.isInteger(toVerify)) {
      throw new Error('Expected number as argument but received ' + typeof toVerify)
    }
  }

  /**
   * Verifies that the passed argument is a number between the values of 1 and 12.
   *
   * @param {number} month - The number to verify.
   * @throws {Error} - Throws an error if the passed argument is not between 1 and 12.
   */
  verifyMonth (month) {
    if (month < 1 || month > 12) {
      throw new Error('Expected month to be between 1 and 12, received ' + month)
    }
  }

  /**
   * Helper emthod that verifies that the passed argument is of type string.
   *
   * @param {unknown} toVerify - The variable to verify.
   * @throws {Error} - Throws an error if the passed argument is not of type string.
   */
  verifyString (toVerify) {
    if (typeof toVerify !== 'string') {
      throw new Error('Expected paramater to be of type string, got ' + typeof toVerify)
    }
  }
}
