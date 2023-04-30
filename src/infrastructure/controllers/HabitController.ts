import IHabit from '../../core/habit/entities/IHabit'
import habitUseCases from '../../core/habit/usecases'
import DTOHabit from '../DTO/DTOHabit'

class HabitController {
  async createHabit(habit: IHabit): Promise<DTOHabit> {
    return new DTOHabit(await habitUseCases.createHabit.execute(habit))
  }

  findHabit({ id }: { id: string }): DTOHabit {
    return new DTOHabit(habitUseCases.findHabit.execute({ id }))
  }

  async getHabits(): Promise<DTOHabit[]> {
    const habits = await habitUseCases.findAllHabits.execute()

    if (!habits) {
      return []
    }

    return habits.map((habit: IHabit) => new DTOHabit(habit))
  }
}

export default HabitController
