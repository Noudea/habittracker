import CreateHabitUsecase from './createHabit/createHabitUsecase'
import repositories from '../../../data/repositories'
import FindHabitUsecase from './findHabit/FindHabitUsecase'
import FindAllHabitsUsecase from './findAllHabits/FindAllHabitsUsecase'
import UpdateHabitUsecase from './updateHabit/UpdateHabitUsecase'
import DeleteHabitUsecase from './deleteHabit/DeleteHabitUsecase'
import AddCompletionDate from './addCompletionDateToHabit/AddCompletionDate'

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
  updateHabits: new UpdateHabitUsecase({
    repository: habitRepository,
  }),
  deleteHabits: new DeleteHabitUsecase({
    repository: habitRepository,
  }),
  addCompletionDate: new AddCompletionDate({
    repository: habitRepository,
  }),
}

export default habitUseCases
