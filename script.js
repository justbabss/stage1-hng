let weekDay = document.querySelector('#currentDayOfTheWeek')
let currentTime = document.querySelector('#currentUTCTime')

let days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
]
let weekday = new Date().getDay()
let curentWeekDay = days[weekday]
// console.log(curentWeekDay)
weekDay.innerHTML = curentWeekDay

setInterval(() => {
  let time = new Date()
  currentTime.innerHTML = time.toLocaleTimeString()
})