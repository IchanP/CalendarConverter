import temporalConverter from '../TemporalConverter/temporalconverter'

describe('koki-to-gregorian', () => {
  test('should throw error on falsy argument', () => {
    expect(() => temporalConverter.KokiToFormattedGregorian(undefined)).toThrow()
    expect(() => temporalConverter.KokiToFormattedGregorian(null)).toThrow()
  })
  test('should throw on wrong type argument', () => {
    expect(() => temporalConverter.KokiToFormattedGregorian('this is a string')).toThrow()
    expect(() => temporalConverter.KokiToFormattedGregorian(10.6)).toThrow()
    expect(() => temporalConverter.KokiToFormattedGregorian(true)).toThrow()
  })
  test('should handle gregorian year 0', () => {
    expect(temporalConverter.KokiToFormattedGregorian(660)).toBe('1 CE')
    expect(temporalConverter.KokiToFormattedGregorian(659)).toBe('1 BCE')
  })
  test('should handle negative input values', () => {
    expect(temporalConverter.KokiToFormattedGregorian(-1)).toBe('661 BCE')
    expect(temporalConverter.KokiToFormattedGregorian(-500)).toBe('1160 BCE')
  })
  test('should return BCE if passed < 660', () => {
    expect(temporalConverter.KokiToFormattedGregorian(650)).toContain('BCE')
    expect(temporalConverter.KokiToFormattedGregorian(400)).toContain('BCE')
    expect(temporalConverter.KokiToFormattedGregorian(659)).toContain('BCE')
    expect(temporalConverter.KokiToFormattedGregorian(500)).toContain('BCE')
  })
  test('should return CE if passed >= 660', () => {
    expect(temporalConverter.KokiToFormattedGregorian(660)).toContain('CE')
    expect(temporalConverter.KokiToFormattedGregorian(661)).toContain('CE')
    expect(temporalConverter.KokiToFormattedGregorian(709)).toContain('CE')
    expect(temporalConverter.KokiToFormattedGregorian(800)).toContain('CE')
  })
})
