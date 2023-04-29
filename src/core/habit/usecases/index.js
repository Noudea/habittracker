import CreateHabitUsecase from './createHabit/createHabitUsecase'
import repositories from '../../../data/repositories'
import FindHabitUsecase from './findHabit/FindHabitUsecase'
import FindAllHabitsUsecase from './findAllHabits/FindAllHabitsUsecase'

const habitRepository = repositories.habitRepository

const habitUseCases = {
  createHabit: new CreateHabitUsecase({
    repository: habitRepository,
  }),
  findHabit: new FindHabitUsecase({
    repository: habitRepository,
  }),
  findAllHabits: new FindAllHabitsUsecase({
    repository: habitRepository,
  }),
}

export default habitUseCases
