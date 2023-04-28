import ICreateHabit from './ICreateHabitUsecase'
import Habit from '../../entities/Habit'
import IHabit from '../../entities/IHabit'

class CreateHabitUsecase implements ICreateHabit {
  async execute({ name, startDate, daysPerWeek }: IHabit): Promise<Habit> {
    const habit = new Habit({ name, daysPerWeek, startDate })
    return habit
  }
}

export default CreateHabitUsecase
