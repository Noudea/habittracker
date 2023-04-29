import ICreateHabit from './ICreateHabitUsecase'
import Habit from '../../entities/Habit'
import IHabit from '../../entities/IHabit'

class CreateHabitUsecase implements ICreateHabit {
  private repository: any
  constructor({ repository }: any) {
    this.repository = repository
  }

  async execute({
    name,
    startDate,
    occurrences,
    color,
  }: IHabit): Promise<Habit> {
    const habit = new Habit({
      name,
      occurrences,
      startDate,
      completionDates: [],
      color,
    })

    return await this.repository.create(habit)
  }
}

export default CreateHabitUsecase
