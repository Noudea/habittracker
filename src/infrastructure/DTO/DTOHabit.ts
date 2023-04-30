import IHabit from '../../core/habit/entities/IHabit'
import IDTOHabit from './IDTOHabit'
import IDTOCompletionDate from './IDTOCompletionDate'

class DTOHabit implements IDTOHabit {
  public id: string
  public color: string
  public name: string
  public occurrences: number
  public completionDates: IDTOCompletionDate[]
  public startDate: Date

  constructor(Habit: IHabit) {
    this.id = Habit.id
    this.name = Habit.name
    this.occurrences = Habit.occurrences
    this.startDate = Habit.startDate
    this.color = Habit.color
    this.completionDates = Habit.completionDates
  }
}

export default DTOHabit
