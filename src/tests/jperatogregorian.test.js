import temporalConverter from '../TemporalConverter/temporalconverter'

describe('jp-era-to-gregorian', () => {
  test('should throw an error if the passed name is not a japanese era', () => {
    expect(() => temporalConverter.JpEraToFormattedGregorian('keking', 2)).toThrow()
    expect(() => temporalConverter.JpEraToFormattedGregorian('Jokyo', 1)).toThrow()
    expect(() => temporalConverter.JpEraToFormattedGregorian('Anei', 2)).toThrow()
  })
  test('should throw when passed invalid name type', () => {
    expect(() => temporalConverter.JpEraToFormattedGregorian(2, 1)).toThrow()
    expect(() => temporalConverter.JpEraToFormattedGregorian(null, 2)).toThrow()
    expect(() => temporalConverter.JpEraToFormattedGregorian(false, 3)).toThrow()
    expect(() => temporalConverter.JpEraToFormattedGregorian({}, 0)).toThrow()
    expect(() => temporalConverter.JpEraToFormattedGregorian([], 2)).toThrow()
    expect(() => temporalConverter.JpEraToFormattedGregorian(2.1, 3)).toThrow()
  })
  test('should throw when passed era year is out of range', () => {
    expect(() => temporalConverter.JpEraToFormattedGregorian('Taika', 7)).toThrow()
    expect(() => temporalConverter.JpEraToFormattedGregorian('Taika', 6)).not.toThrow()
    expect(() => temporalConverter.JpEraToFormattedGregorian('Taika', 0)).toThrow()
    expect(() => temporalConverter.JpEraToFormattedGregorian('Tenpyō-kanpō', 2)).toThrow()
  })
  test('should not throw on 1 if era ends same year as it started', () => {
    expect(() => temporalConverter.JpEraToFormattedGregorian('Tenpyō-kanpō', 1)).not.toThrow()
    expect(() => temporalConverter.JpEraToFormattedGregorian('Shuchō', 1)).not.toThrow()
  })
  test('should not throw when Reiwa is out of higher range', () => {
    expect(() => temporalConverter.JpEraToFormattedGregorian('Reiwa', 100)).not.toThrow()
    expect(() => temporalConverter.JpEraToFormattedGregorian('Reiwa', 6)).not.toThrow()
  })
  test('should return correct values', () => {
    expect(temporalConverter.JpEraToFormattedGregorian('Hōki', 1)).toBe('770 CE')
    expect(temporalConverter.JpEraToFormattedGregorian('Kōnin', 10)).toBe('819 CE')
    expect(temporalConverter.JpEraToFormattedGregorian('Reiwa', 100)).toBe('2118 CE')
    expect(temporalConverter.JpEraToFormattedGregorian('Reiwa', 5)).toBe('2023 CE')
  })
})
