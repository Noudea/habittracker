import IHabit from '../../core/habit/entities/IHabit'
import habitUseCases from '../../core/habit/usecases'
import DTOHabit from '../DTO/DTOHabit'

class HabitController {
  createHabit(habit: IHabit): DTOHabit {
    return new DTOHabit(habitUseCases.createHabit.execute(habit))
  }

  findHabit({ id }: { id: string }): DTOHabit {
    return new DTOHabit(habitUseCases.findHabit.execute({ id }))
  }
}

export default HabitController
