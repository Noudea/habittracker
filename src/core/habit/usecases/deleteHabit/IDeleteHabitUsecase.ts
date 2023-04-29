// Define the CreateHabit use case in the core module
import IHabit from '../../entities/IHabit'
import Habit from '../../entities/Habit'

interface DeleteHabitUsecase {
  execute(habit: IHabit): Promise<Habit>
}

export default DeleteHabitUsecase
