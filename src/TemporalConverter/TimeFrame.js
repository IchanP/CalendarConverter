/**
 * Builds a timeframe with year and month.
 */
export class TimeFrame {
  /**
   * Initialises the fields.
   *
   * @param {string} name - Name of the timeframe.
   * @param {number} startYear - The year the timeframe starts.
   * @param {number} endYear - The year the timeframe ends.
   * @param {number} startMonth - The month the timeframe starts.
   * @param {number} endMonth - The month the timeframe ends.
   */
  constructor (name, startYear, endYear, startMonth, endMonth) {
    if (typeof name !== 'string') {
      throw new Error('Expected paramater to be of type string, got ' + typeof string)
    }
    this.#numberVerifier(startYear)
    this.#numberVerifier(endYear)
    this.#numberVerifier(startMonth)
    this.#numberVerifier(endMonth)

    this.name = name
    this.startYear = startYear
    this.endYear = endYear
    this.startMonth = startMonth
    this.endMonth = endMonth
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
}
