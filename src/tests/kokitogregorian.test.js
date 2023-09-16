import temporalConverter from '../TemporalConverter/temporalconverter'

describe('koki-to-gregorian', () => {
  test('returns an empty string on falsy argument', () => {
    expect(temporalConverter.KokiToFormattedGregorian(undefined)).toBe('')
    expect(temporalConverter.KokiToFormattedGregorian(null)).toBe('')
  })
  test('returns empty string on wrong type argument', () => {
    expect(temporalConverter.KokiToFormattedGregorian('this is a string')).toBe('')
    expect(temporalConverter.KokiToFormattedGregorian(10.6)).toBe('')
    expect(temporalConverter.KokiToFormattedGregorian(true)).toBe('')
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
// NOTE Kōki
describe('gregorianCE-to-koki', () => {
  test('returns an emtpy string if format is wrong', () => {
    expect(temporalConverter.GregoriantoFormattedKoki(1995, 'XXX')).toBe('')
    expect(temporalConverter.GregoriantoFormattedKoki('xxxx', 95)).toBe('')
    expect(temporalConverter.GregoriantoFormattedKoki(1400, 'BA')).toBe('')
  })
  test('return "pre-koki" pre 660 bce/bc', () => {
    expect(temporalConverter.GregoriantoFormattedKoki(661, 'BC')).toContain('Pre-Kōki')
    expect(temporalConverter.GregoriantoFormattedKoki(661, 'BCE')).toContain('Pre-Kōki')
    expect(temporalConverter.GregoriantoFormattedKoki(7000, 'BC')).toContain('Pre-Kōki')
  })
  test('return "Kōki" post 660 bce/bc', () => {
    expect(temporalConverter.GregoriantoFormattedKoki(660, 'BC')).toContain('Kōki')
    expect(temporalConverter.GregoriantoFormattedKoki(750, 'BC')).toContain('Kōki')
    expect(temporalConverter.GregoriantoFormattedKoki(1500, 'AD')).toContain('Kōki')
  })
  test('handles year formatted as string', () => {
    expect(temporalConverter.GregoriantoFormattedKoki('500', 'BC')).toBe('Kōki 160')
    expect(temporalConverter.GregoriantoFormattedKoki('1000', 'CE')).toBe('Kōki 1660')
    expect(temporalConverter.GregoriantoFormattedKoki('661', 'BC')).toBe('Pre-Kōki 1')
  })
  test('not accept lower case era', () => {
    expect(temporalConverter.GregoriantoFormattedKoki(1000, 'bc')).toBe('')
    expect(temporalConverter.GregoriantoFormattedKoki(1000, 'bce')).toBe('')
    expect(temporalConverter.GregoriantoFormattedKoki(1000, 'ce')).toBe('')
    expect(temporalConverter.GregoriantoFormattedKoki(1000, 'ad')).toBe('')
  })
  test('return correct year in bc/bce', () => {
    expect(temporalConverter.GregoriantoFormattedKoki(1000, 'BC')).toBe('Pre-Kōki 340')
    expect(temporalConverter.GregoriantoFormattedKoki(500, 'BC')).toBe('Kōki 160')
    expect(temporalConverter.GregoriantoFormattedKoki(1, 'BC')).toBe('Kōki 659')
    // Run tests again with BCE
    expect(temporalConverter.GregoriantoFormattedKoki(1000, 'BCE')).toBe('Pre-Kōki 340')
    expect(temporalConverter.GregoriantoFormattedKoki(500, 'BCE')).toBe('Kōki 160')
    expect(temporalConverter.GregoriantoFormattedKoki(1, 'BCE')).toBe('Kōki 659')
  })
  test('return correct year in ad/ce', () => {
    expect(temporalConverter.GregoriantoFormattedKoki(1000, 'AD')).toBe('Kōki 1660')
    expect(temporalConverter.GregoriantoFormattedKoki(500, 'AD')).toBe('Kōki 1160')
    expect(temporalConverter.GregoriantoFormattedKoki(1, 'AD')).toBe('Kōki 660')
  })
})
