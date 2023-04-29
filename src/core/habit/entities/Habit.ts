import IHabits from './IHabit'

class Habit {
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
  }: IHabits) {
    this.name = name
    this.startDate = startDate
    this.occurrences = occurrences
    this.completionDates = completionDates || []
    this.color = color
  }
}

export default Habit
