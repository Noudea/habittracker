interface IHabitModel {
  _id: string
  name: string
  occurrences: number
  startDate: Date
  completionDates: Date[]
  color: string
}

export default IHabitModel
