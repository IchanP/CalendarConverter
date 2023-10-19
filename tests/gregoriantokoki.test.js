import temporalConverter from '../src/TemporalConverter/temporalconverter'

// NOTE Kōki
describe('gregorianCE-to-koki', () => {
  test('should throw error if format is wrong', () => {
    expect(() => temporalConverter.KokiFromGregorian(1995, 'XXX')).toThrow()
    expect(() => temporalConverter.KokiFromGregorian('xxxx', 95)).toThrow()
    expect(() => temporalConverter.KokiFromGregorian(1400, 'BA')).toThrow()
  })
  test('should return "pre-koki" pre 661 bce/bc', () => {
    expect(temporalConverter.KokiFromGregorian(662, 'BC')).toContain('Pre-Kōki')
    expect(temporalConverter.KokiFromGregorian(662, 'BCE')).toContain('Pre-Kōki')
    expect(temporalConverter.KokiFromGregorian(7000, 'BC')).toContain('Pre-Kōki')
  })
  test('should return "Kōki" post 660 bce/bc', () => {
    expect(temporalConverter.KokiFromGregorian(660, 'BC')).toContain('Kōki')
    expect(temporalConverter.KokiFromGregorian(750, 'BC')).toContain('Kōki')
    expect(temporalConverter.KokiFromGregorian(1500, 'AD')).toContain('Kōki')
  })
  test('handles year formatted as string', () => {
    expect(temporalConverter.KokiFromGregorian('500', 'BC')).toBe('Kōki 161')
    expect(temporalConverter.KokiFromGregorian('1000', 'CE')).toBe('Kōki 1660')
    expect(temporalConverter.KokiFromGregorian('661', 'BC')).toBe('Kōki 0')
  })
  test('should throw when given lower case era', () => {
    expect(() => temporalConverter.KokiFromGregorian(1000, 'bc')).toThrow()
    expect(() => temporalConverter.KokiFromGregorian(1000, 'bce')).toThrow()
    expect(() => temporalConverter.KokiFromGregorian(1000, 'ce')).toThrow()
    expect(() => temporalConverter.KokiFromGregorian(1000, 'ad')).toThrow()
  })
  test('should return correct year in bc/bce', () => {
    expect(temporalConverter.KokiFromGregorian(1000, 'BC')).toBe('Pre-Kōki 339')
    expect(temporalConverter.KokiFromGregorian(500, 'BC')).toBe('Kōki 161')
    expect(temporalConverter.KokiFromGregorian(1, 'BC')).toBe('Kōki 660')
    // Run tests again with BCE
    expect(temporalConverter.KokiFromGregorian(1000, 'BCE')).toBe('Pre-Kōki 339')
    expect(temporalConverter.KokiFromGregorian(500, 'BCE')).toBe('Kōki 161')
    expect(temporalConverter.KokiFromGregorian(1, 'BCE')).toBe('Kōki 660')
  })
  test('should return correct year in ad/ce', () => {
    expect(temporalConverter.KokiFromGregorian(1000, 'AD')).toBe('Kōki 1660')
    expect(temporalConverter.KokiFromGregorian(500, 'AD')).toBe('Kōki 1160')
    expect(temporalConverter.KokiFromGregorian(2023, 'AD')).toBe('Kōki 2683')
    expect(temporalConverter.KokiFromGregorian(1, 'AD')).toBe('Kōki 661')
  })
  test('should throw error if year is invalid type', () => {
    expect(() => temporalConverter.KokiFromGregorian(true, 'AD')).toThrow()
  })
})
