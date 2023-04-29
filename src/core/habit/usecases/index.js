import CreateHabitUsecase from './createHabit/createHabitUsecase'
import repositories from '../../../data/repositories'
import FindHabitUsecase from './findHabit/FindHabitUsecase'

const habitRepository = repositories.habitRepository

const habitUseCases = {
  createHabit: new CreateHabitUsecase({
    repository: habitRepository,
  }),
  findHabit: new FindHabitUsecase({
    repository: habitRepository,
  }),
}

export default habitUseCases
