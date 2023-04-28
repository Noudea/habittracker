import IHabits from './IHabit'

class Habit {
  public name: string
  public daysPerWeek: number
  public startDate: Date
  public completionDates?: Date[]
  public color: string

  constructor({
    name,
    startDate,
    daysPerWeek,
    completionDates,
    color,
  }: IHabits) {
    this.name = name
    this.startDate = startDate
    this.daysPerWeek = daysPerWeek
    this.completionDates = completionDates || []
    this.color = color
  }
}

export default Habit
