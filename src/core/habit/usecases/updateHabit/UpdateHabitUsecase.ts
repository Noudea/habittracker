import Habit from '../../entities/Habit'
import IHabit from '../../entities/IHabit'

class UpdateHabitUsecase {
  private repository: any
  constructor({ repository }: any) {
    this.repository = repository
  }

  execute(habit: IHabit): Habit {
    return this.repository.update(habit)
  }
}

export default UpdateHabitUsecase
