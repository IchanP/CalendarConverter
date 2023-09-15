import temporalConverter from '../TemporalConverter/temporalconverter'

describe('koki-to-gregorian', () => {
  test('returns NaN on falsy argument', () => {
    expect(temporalConverter.KokiToFormattedGregorian(undefined)).toBe(NaN)
    expect(temporalConverter.KokiToFormattedGregorian(null)).toBe(NaN)
  })
  test('handles gregorian year 0', () => {
    expect(temporalConverter.KokiToFormattedGregorian(660)).toBe('1 CE')
    expect(temporalConverter.KokiToFormattedGregorian(659)).toBe('1 BCE')
  })
})
