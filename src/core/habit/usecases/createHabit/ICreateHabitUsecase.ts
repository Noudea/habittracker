// Define the CreateHabit use case in the core module
import IHabit from '../../entities/IHabit'
import Habit from '../../entities/Habit'

interface CreateHabitUsecase {
  execute({ name, startDate, occurrences }: IHabit): Habit
}

export default CreateHabitUsecase
