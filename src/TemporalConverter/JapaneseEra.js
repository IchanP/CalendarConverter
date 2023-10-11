import { TimeFrame } from './TimeFrame.js'
import { japaneseEras } from './Data/japaneseeras.js'
import { JapanaseEraVerifier } from './Verifiers/JapaneseEraVerifier.js'
/**
 * A wrapper for converting to Japanese Era from various calendars.
 */
export class JapaneseEra {
  #listOfEras
  #verifier
  /**
   * Initializes the era list.
   */
  constructor () {
    this.#listOfEras = japaneseEras
    this.#verifier = new JapanaseEraVerifier()
  }

  /**
   * Converts from Gregoran to Japanese Era Year, based on year and month.
   *
   * @param {number} gregorianYear - The Gregorian year.
   * @param {month} month - The month.
   * @returns {string} - Returns the matching Japanese Era year or an empty string if no match was found.
   */
  gregorianWithMonthToJpEra (gregorianYear, month) {
    let matchingEra
    for (const era of this.#listOfEras) {
      if (gregorianYear > new Date().getFullYear()) {
        matchingEra = this.#listOfEras.slice(-1)[0]
        break
      }
      // Catches scenario where the era ends in the same year as it started but the passed month is out of range
      if ((era.startYear === gregorianYear && era.startYear === era.endYear) && (era.startMonth > month || era.endMonth < month)) {
        throw new Error('Year and month does not match any existing eras')
      }
      // Matches if GregorianYear is on a year with an era change
      if ((era.endYear === gregorianYear && era.endMonth > month)) {
        matchingEra = era
        break
      }
      if (era.startYear === gregorianYear && era.startMonth <= month) {
        matchingEra = era
        break
      }
      if ((era.startYear <= gregorianYear && gregorianYear < era.endYear)) {
        matchingEra = era
        break
      }
    }
    if (!matchingEra) {
      throw new Error('Year and month does not match any existing eras')
    }
    return this.#formatFromGregorian(matchingEra, gregorianYear)
  }

  /**
   * Converts from Gregorian to Japanese Era year, excluding month.
   *
   * @param {number} gregorianYear - The Gregorian year.
   * @returns {Array<string>} - Returns the matching Japanese years, in
   */
  gregorianWithoutMonthToJpEra (gregorianYear) {
    const foundEras = this.#listOfEras.filter((era) => {
      if (era.startYear <= gregorianYear && gregorianYear <= era.endYear) {
        return era
      }
      // Catch Reiwa in the future
      if (gregorianYear > era.endYear && era.endYear === new Date().getFullYear()) {
        return era
      }
      return undefined
    })
    const japaneseDates = []
    for (const foundEra of foundEras) {
      japaneseDates.push(this.#formatFromGregorian(foundEra, gregorianYear))
    }
    if (japaneseDates.length === 0) {
      throw new Error('Year does not match any existing eras')
    }
    return japaneseDates
  }

  /**
   * Converts from Japanese Era to Gregorian Calendar.
   *
   * @param {string} eraName - The name of the Era.
   * @param {number} eraYear - The year in the era.
   * @returns {string} - Returns the converted year in "YYYY CE" format.
   */
  FromJpEraToGregorian (eraName, eraYear) {
    this.#verifier.verifyString(eraName)
    const eraToConvertToGregorian = this.#findEraByName(eraName)
    this.#verifier.verifyEraNameExists(eraToConvertToGregorian)
    this.#verifier.verifyEraTimeFrame(eraToConvertToGregorian, eraYear)
    // TODO one abstraction level
    return eraToConvertToGregorian.startYear + (eraYear - 1) + ' CE'
  }

  /**
   * Attemps to find an era by name.
   *
   * @param {string} eraName - The name to identify the Era with.
   * @returns {TimeFrame} - Returns the era.
   */
  #findEraByName (eraName) {
    let foundEra
    for (const era of this.#listOfEras) {
      if (era.name === eraName) {
        foundEra = era
        break
      }
    }
    return foundEra
  }

  /**
   * Formats a TimeFrame object to Japanasee Date from Gregorian year.
   *
   * @param {TimeFrame} timeEra - A TimeFrame object to convert to string.
   * @param {number} gregorianYear - The Gregorian Year to convert from.
   * @returns {string} - Date in "Name YY" format.
   */
  #formatFromGregorian (timeEra, gregorianYear) {
    return timeEra.name + ' ' + ((gregorianYear - timeEra.startYear) + 1)
  }
}
