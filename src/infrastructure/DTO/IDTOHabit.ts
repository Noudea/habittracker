import IDTOCompletionDate from './IDTOCompletionDate'

interface IDTOHabit {
  id: string
  name: string
  startDate: Date
  occurrences: number
  completionDates: IDTOCompletionDate[]
}

export default IDTOHabit
