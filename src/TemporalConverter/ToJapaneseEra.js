import { japaneseEras } from './japaneseeras'
/**
 * A wrapper for converting to Japanese Era from various calendars.
 */
export class ToJapaneseEra {
  #listOfEras
  /**
   * Initializes the era list.
   */
  constructor () {
    this.#listOfEras = japaneseEras
  }

  /**
   * Converts from Gregoran to Japanese Era Year, based on year and month.
   *
   * @param {number} gregorianYear - The Gregorian year.
   * @param {month} month - The month.
   * @returns {string} - Returns the matching Japanese Era year.
   */
  gregorianWithMonthToJpEra (gregorianYear, month) {
    // TODO sort return formatting
    for (const era of this.#listOfEras) {
      // Checks if it's on a year with an era change
      if (era.endYear === gregorianYear && era.endMonth > month) {
        console.log(era)
        break
      }
      if (era.startYear === gregorianYear && era.startMonth <= month) {
        console.log(era)
        break
      }
      //   if (era.startYear >= gregorianYear && gregorianYear <= era.endYear) {
    //    break
    //  }
    }
  }

  /**
   * Converts from Gregorian to Japanese Era year, excluding month.
   *
   * @param {number} gregorianYear - The Gregorian year.
   * @returns {Array<string>} - Returns the matching Japanese Era year, if 2 matches will return the year at the start of the Gregorian Year.
   */
  gregorianWithoutMonthToJpEra (gregorianYear) {

  }
}
