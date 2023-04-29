import Habit from '../../entities/Habit'
import IHabit from '../../entities/IHabit'

class UpdateHabitUsecase {
  private repository: any
  constructor({ repository }: any) {
    this.repository = repository
  }

  async execute(habit: IHabit): Promise<Habit> {
    return this.repository.update(habit)
  }
}

export default UpdateHabitUsecase
