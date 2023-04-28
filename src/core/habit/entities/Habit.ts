import IHabits from './IHabit'

class Habit {
  public name: string
  public daysPerWeek: number
  public startDate: Date
  constructor({ name, startDate, daysPerWeek }: IHabits) {
    this.name = name
    this.startDate = startDate
    this.daysPerWeek = daysPerWeek
  }
}

export default Habit
