interface IHabit {
  name: string
  startDate: Date
  daysPerWeek: number
  completionDates?: Date[]
  color: string
}

export default IHabit
