interface IHabitModel {
  _id: string
  name: string
  daysPerWeek: number
  startDate: Date
  completionDates: Date[]
  color: string
}

export default IHabitModel
