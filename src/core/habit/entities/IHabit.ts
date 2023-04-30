import ICompletionDate from './ICompletionDate'

interface IHabit {
  id?: string
  name: string
  startDate: Date
  occurrences: number
  completionDates: ICompletionDate[]
  color: string
}

export default IHabit
