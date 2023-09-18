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
  //  expect(temporalConverter.GregorianToFormattedJpEra(1199, 3)).toBe('Kenkyū 9') // tests first if statement
  //  expect(temporalConverter.GregorianToFormattedJpEra(1232, 4)).toBe('Jōei 1') // Tests second if statement
  //  expect(temporalConverter.GregorianToFormattedJpEra(1236, 10)).toBe('Katei 2') // Tests third if statement
  })
})
