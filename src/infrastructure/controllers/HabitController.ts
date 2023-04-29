import IHabit from '../../core/habit/entities/IHabit'
import habitUseCases from '../../core/habit/usecases'

class HabitController {
  async createHabit(habit: IHabit): Promise<IHabit> {
    return await habitUseCases.createHabit.execute(habit)
  }

  findHabit({ id }: { id: string }): IHabit {
    return habitUseCases.findHabit.execute({ id })
  }
}

export default HabitController
