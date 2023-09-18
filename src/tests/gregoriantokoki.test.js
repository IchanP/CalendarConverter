import temporalConverter from '../TemporalConverter/TemporalConverter'

// NOTE Kōki
describe('gregorianCE-to-koki', () => {
  test('should returns an emtpy string if format is wrong', () => {
    expect(temporalConverter.GregorianToFormattedKoki(1995, 'XXX')).toBe('')
    expect(temporalConverter.GregorianToFormattedKoki('xxxx', 95)).toBe('')
    expect(temporalConverter.GregorianToFormattedKoki(1400, 'BA')).toBe('')
  })
  test('should return "pre-koki" pre 661 bce/bc', () => {
    expect(temporalConverter.GregorianToFormattedKoki(662, 'BC')).toContain('Pre-Kōki')
    expect(temporalConverter.GregorianToFormattedKoki(662, 'BCE')).toContain('Pre-Kōki')
    expect(temporalConverter.GregorianToFormattedKoki(7000, 'BC')).toContain('Pre-Kōki')
  })
  test('should return "Kōki" post 660 bce/bc', () => {
    expect(temporalConverter.GregorianToFormattedKoki(660, 'BC')).toContain('Kōki')
    expect(temporalConverter.GregorianToFormattedKoki(750, 'BC')).toContain('Kōki')
    expect(temporalConverter.GregorianToFormattedKoki(1500, 'AD')).toContain('Kōki')
  })
  test('handles year formatted as string', () => {
    expect(temporalConverter.GregorianToFormattedKoki('500', 'BC')).toBe('Kōki 161')
    expect(temporalConverter.GregorianToFormattedKoki('1000', 'CE')).toBe('Kōki 1660')
    expect(temporalConverter.GregorianToFormattedKoki('661', 'BC')).toBe('Kōki 0')
  })
  test('should not accept lower case era', () => {
    expect(temporalConverter.GregorianToFormattedKoki(1000, 'bc')).toBe('')
    expect(temporalConverter.GregorianToFormattedKoki(1000, 'bce')).toBe('')
    expect(temporalConverter.GregorianToFormattedKoki(1000, 'ce')).toBe('')
    expect(temporalConverter.GregorianToFormattedKoki(1000, 'ad')).toBe('')
  })
  test('should return correct year in bc/bce', () => {
    expect(temporalConverter.GregorianToFormattedKoki(1000, 'BC')).toBe('Pre-Kōki 339')
    expect(temporalConverter.GregorianToFormattedKoki(500, 'BC')).toBe('Kōki 161')
    expect(temporalConverter.GregorianToFormattedKoki(1, 'BC')).toBe('Kōki 660')
    // Run tests again with BCE
    expect(temporalConverter.GregorianToFormattedKoki(1000, 'BCE')).toBe('Pre-Kōki 339')
    expect(temporalConverter.GregorianToFormattedKoki(500, 'BCE')).toBe('Kōki 161')
    expect(temporalConverter.GregorianToFormattedKoki(1, 'BCE')).toBe('Kōki 660')
  })
  test('should return correct year in ad/ce', () => {
    expect(temporalConverter.GregorianToFormattedKoki(1000, 'AD')).toBe('Kōki 1660')
    expect(temporalConverter.GregorianToFormattedKoki(500, 'AD')).toBe('Kōki 1160')
    expect(temporalConverter.GregorianToFormattedKoki(2023, 'AD')).toBe('Kōki 2683')
    expect(temporalConverter.GregorianToFormattedKoki(1, 'AD')).toBe('Kōki 661')
  })
})
