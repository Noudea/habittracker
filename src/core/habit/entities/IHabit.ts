interface IHabit {
  id?: string
  name: string
  startDate: Date
  occurrences: number
  completionDates?: Date[]
  color: string
}

export default IHabit
