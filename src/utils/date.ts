const getFirstLetterOfDate = (date: Date) => {
  const _date = new Date(date)
  const weekday = _date.toLocaleString('en-us', { weekday: 'long' })
  return weekday[0]
}

export { getFirstLetterOfDate }
