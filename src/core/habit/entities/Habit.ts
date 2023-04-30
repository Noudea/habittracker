import IHabit from './IHabit'
import { v4 as uuidv4 } from 'uuid'
import ICompletionDate from './ICompletionDate'

class Habit {
  public id: string
  public name: string
  public occurrences: number
  public startDate: Date
  public completionDates: ICompletionDate[]
  public color: string

  constructor({
    id,
    name,
    startDate,
    occurrences,
    completionDates,
    color,
  }: IHabit) {
    this.id = id || uuidv4()
    this.name = name
    this.startDate = startDate
    this.occurrences = occurrences
    this.completionDates = completionDates || []
    this.color = color
  }

  public addCompletionDate(completionDate: ICompletionDate): void {
    this.completionDates.push(completionDate)
  }
}

export default Habit
