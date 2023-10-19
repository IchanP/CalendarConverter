import temporalConverter from './src/TemporalConverter/temporalconverter.js'

const kokiYear = 2000
const gregorianYear = temporalConverter.KokiToFormattedGregorian(kokiYear)
console.log(gregorianYear) //

export default temporalConverter
