import temporalConverter from '../TemporalConverter/TemporalConverter'

describe('gregorian-to-jp-era', () => {
  test('should return empty string if month is invalid format', () => {
    expect(temporalConverter.GregorianToFormattedJpEra(1900, 'invalid')).toBe('')
    expect(temporalConverter.GregorianToFormattedJpEra(1900, 19.5)).toBe('')
    expect(temporalConverter.GregorianToFormattedJpEra(1900, true)).toBe('')
    expect(temporalConverter.GregorianToFormattedJpEra(1900, null)).toBe('')
  })
  test('should return non-empty string if month is omitted', () => {
    expect(temporalConverter.GregorianToFormattedJpEra(1900)).not.toBe('')
  })
  test('should return empty string if month is out of range', () => {
    expect(temporalConverter.GregorianToFormattedJpEra(1900, 0)).toBe('')
    expect(temporalConverter.GregorianToFormattedJpEra(1900, -50)).toBe('')
    expect(temporalConverter.GregorianToFormattedJpEra(1900, -100)).toBe('')
    expect(temporalConverter.GregorianToFormattedJpEra(1900, 13)).toBe('')
    expect(temporalConverter.GregorianToFormattedJpEra(1900, -1)).toBe('')
    expect(temporalConverter.GregorianToFormattedJpEra(1900, -12)).toBe('')
  })
})
