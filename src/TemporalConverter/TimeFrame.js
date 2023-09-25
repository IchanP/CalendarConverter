import { Verifier } from './Verifier'

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
    const verifier = new Verifier()
    if (typeof name !== 'string') {
      throw new Error('Expected paramater to be of type string, got ' + typeof name)
    }
    verifier.numberVerifier(startYear)
    verifier.numberVerifier(endYear)
    verifier.numberVerifier(startMonth)
    verifier.numberVerifier(endMonth)
    verifier.monthVerifier(startMonth)
    verifier.monthVerifier(endMonth)

    this.name = name
    this.startYear = startYear
    this.endYear = endYear
    this.startMonth = startMonth
    this.endMonth = endMonth
  }
}
