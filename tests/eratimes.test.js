import { japaneseEras } from '../src/TemporalConverter/Data/japaneseeras'

describe('Era continuity, japaneseeras.js', () => {
  test('the eras from 3rd element should have continuity', () => {
    for (let i = 4; i < japaneseEras.length; i++) {
      const currentEra = japaneseEras[i]
      const previousEra = japaneseEras[i - 1]
      expect(currentEra.startYear).toBe(previousEra.endYear)
      expect(currentEra.startMonth).toBe(previousEra.endMonth)
    }
  })
})
