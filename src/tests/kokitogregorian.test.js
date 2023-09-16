import temporalConverter from '../TemporalConverter/temporalconverter'

describe('koki-to-gregorian', () => {
  test('returns an empty string on falsy argument', () => {
    expect(temporalConverter.KokiToFormattedGregorian(undefined)).toBe('')
    expect(temporalConverter.KokiToFormattedGregorian(null)).toBe('')
  })
  test('returns empty string on wrong type argument', () => {
    expect(temporalConverter.KokiToFormattedGregorian('this is a string')).toBe('')
    expect(temporalConverter.KokiToFormattedGregorian(10.6)).toBe('')
  })
  test('handles gregorian year 0', () => {
    expect(temporalConverter.KokiToFormattedGregorian(660)).toBe('1 CE')
    expect(temporalConverter.KokiToFormattedGregorian(659)).toBe('1 BCE')
  })
  test('handle negative input values', () => {
    expect(temporalConverter.KokiToFormattedGregorian(-1)).toBe('661 BCE')
    expect(temporalConverter.KokiToFormattedGregorian(-500)).toBe('1160 BCE')
  })
})
