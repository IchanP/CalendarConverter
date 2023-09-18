import temporalConverter from '../TemporalConverter/TemporalConverter'

describe('gregorian-to-jp-era', () => {
  test('should return empty string if month is invalid format', () => {
    expect(temporalConverter.GregorianToFormattedJpEra(1900, 'invalid')).toBe('')
    expect(temporalConverter.GregorianToFormattedJpEra(1900, 19.5)).toBe('')
    expect(temporalConverter.GregorianToFormattedJpEra(1900, true)).toBe('')
    expect(temporalConverter.GregorianToFormattedJpEra(1900, null)).toBe('')
  })
  test('should return empty string if month is out of range', () => {
    expect(temporalConverter.GregorianToFormattedJpEra(1900, 0)).toBe('')
    expect(temporalConverter.GregorianToFormattedJpEra(1900, -50)).toBe('')
    expect(temporalConverter.GregorianToFormattedJpEra(1900, -100)).toBe('')
    expect(temporalConverter.GregorianToFormattedJpEra(1900, 13)).toBe('')
    expect(temporalConverter.GregorianToFormattedJpEra(1900, -1)).toBe('')
    expect(temporalConverter.GregorianToFormattedJpEra(1900, -12)).toBe('')
  })
  test('should return correct value', () => {
    expect(temporalConverter.GregorianToFormattedJpEra(1232, 4)).toBe('Jōei 1')
  })
})
