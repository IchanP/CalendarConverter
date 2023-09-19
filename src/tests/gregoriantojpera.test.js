import temporalConverter from '../TemporalConverter/temporalconverter'

describe('gregorian-to-jp-era', () => {
  test('should throw error if month is invalid format', () => {
    expect(() => temporalConverter.GregorianToFormattedJpEra(1900, 'invalid')).toThrow()
    expect(() => temporalConverter.GregorianToFormattedJpEra(1900, 19.5)).toThrow()
    expect(() => temporalConverter.GregorianToFormattedJpEra(1900, true)).toThrow()
    expect(() => temporalConverter.GregorianToFormattedJpEra(1900, null)).toThrow()
  })
  test('should throw error if month is out of range', () => {
    expect(() => temporalConverter.GregorianToFormattedJpEra(1900, 0)).toThrow()
    expect(() => temporalConverter.GregorianToFormattedJpEra(1900, -50)).toThrow()
    expect(() => temporalConverter.GregorianToFormattedJpEra(1900, -100)).toThrow()
    expect(() => temporalConverter.GregorianToFormattedJpEra(1900, 13)).toThrow()
    expect(() => temporalConverter.GregorianToFormattedJpEra(1900, -1)).toThrow()
    expect(() => temporalConverter.GregorianToFormattedJpEra(1900, -12)).toThrow()
  })
  test('should return correct value', () => {
    expect(temporalConverter.GregorianToFormattedJpEra(645, 8)).toBe('Taika 1')
    expect(temporalConverter.GregorianToFormattedJpEra(1199, 3)).toBe('Kenkyū 10') // tests first if statement
    expect(temporalConverter.GregorianToFormattedJpEra(1232, 3)).toBe('Kangi 4')
    expect(temporalConverter.GregorianToFormattedJpEra(1232, 4)).toBe('Jōei 1') // tests second if statement
    expect(temporalConverter.GregorianToFormattedJpEra(1238, 12)).toBe('Ryakunin 1')
    expect(temporalConverter.GregorianToFormattedJpEra(1236, 10)).toBe('Katei 2') // Tests third if statement
    expect(temporalConverter.GregorianToFormattedJpEra(2023, 4)).toBe('Reiwa 5') // Tests Reiwa in already passed time
    expect(temporalConverter.GregorianToFormattedJpEra(2100, 5)).toBe('Reiwa 82') // Test Reiwa far into the future
  })
  test('should throw when no era is found', () => {
    expect(() => temporalConverter.GregorianToFormattedJpEra(100, 2)).toThrow()
    expect(() => temporalConverter.GregorianToFormattedJpEra(655, 1)).toThrow()
    expect(() => temporalConverter.GregorianToFormattedJpEra(686, 5)).toThrow()
    expect(() => temporalConverter.GregorianToFormattedJpEra(686, 10)).toThrow()
    expect(() => temporalConverter.GregorianToFormattedJpEra(-702, 2)).toThrow()
  })
})
