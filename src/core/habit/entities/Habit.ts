import IHabit from './IHabit'
import { v4 as uuidv4 } from 'uuid'

class Habit {
  public id?: string
  public name: string
  public occurrences: number
  public startDate: Date
  public completionDates?: Date[]
  public color: string

  constructor({
    name,
    startDate,
    occurrences,
    completionDates,
    color,
  }: IHabit) {
    this.id = uuidv4()
    this.name = name
    this.startDate = startDate
    this.occurrences = occurrences
    this.completionDates = completionDates || []
    this.color = color
  }
}

export default Habit
