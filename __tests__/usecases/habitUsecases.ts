import CreateHabitUsecase from '../../src/core/habit/usecases/createHabit/createHabitUsecase'
import DeleteHabitUsecase from '../../src/core/habit/usecases/deleteHabit/DeleteHabitUsecase'
import IHabit from '../../src/core/habit/entities/IHabit'
import FindHabitUsecase from '../../src/core/habit/usecases/findHabit/FindHabitUsecase'
import UpdateHabitUsecase from '../../src/core/habit/usecases/updateHabit/UpdateHabitUsecase'
import FindAllHabitsUsecase from '../../src/core/habit/usecases/findAllHabits/FindAllHabitsUsecase'
import Habit from '../../src/core/habit/entities/Habit'

describe('usecases habit', () => {
  it('CreateHabitUsecase should create an habit', async () => {
    const habitToCreate = new Habit({
      name: 'Drink water',
      occurrences: 7,
      startDate: new Date('2021-01-01'),
      color: '#000000',
    })
    const createHabitUseCase = new CreateHabitUsecase({
      repository: {
        create: (habit: IHabit) => {
          return {
            ...habitToCreate,
            completionDates: [],
          }
        },
      },
    })
    const habit = await createHabitUseCase.execute(habitToCreate)
    expect(habit).toEqual({
      ...habitToCreate,
      id: habitToCreate.id,
      completionDates: [],
    })
  })
  it('DeleteHabitUsecase should delete an habit', async () => {
    const habitToDelete = {
      id: 'db05d88c-70b8-4bca-a8ba-fa33358daa1d',
      name: 'Drink water',
      occurrences: 7,
      startDate: new Date('2022-01-01'),
      completionDates: [],
      color: '#000000',
    }
    const deleteHabitUseCase = new DeleteHabitUsecase({
      repository: {
        delete: ({ objectToDelete }: { objectToDelete: IHabit }) => {
          return habitToDelete
        },
      },
    })
    const habit = await deleteHabitUseCase.execute({
      habit: habitToDelete,
    })
    expect(habit).toEqual(habitToDelete)
  })
  it('FindHabitUsecase should find an habit', async () => {
    const habitToFind = {
      id: 'db05d88c-70b8-4bca-a8ba-fa33358daa1d',
      name: 'Drink water',
      occurrences: 7,
      startDate: new Date('2022-01-01'),
      completionDates: [],
      color: '#000000',
    }
    const findHabitUseCase = new FindHabitUsecase({
      repository: {
        find: ({ id }: { id: string }) => {
          return habitToFind
        },
      },
    })
    const habit = await findHabitUseCase.execute({
      id: habitToFind.id,
    })
    expect(habit).toEqual(habitToFind)
  })
  it('UpdateHabitUsecase should update an habit', async () => {
    const habitToUpdate = {
      id: 'db05d88c-70b8-4bca-a8ba-fa33358daa1d',
      name: 'Drink water',
      occurrences: 7,
      startDate: new Date('2022-01-01'),
      completionDates: [],
      color: '#000000',
    }

    const updatedHabitData = {
      name: 'Drink water',
      occurrences: 7,
      startDate: new Date('2022-01-01'),
      completionDates: [],
      color: '#de155a',
    }
    const updateHabitUseCase = new UpdateHabitUsecase({
      repository: {
        update: ({
          id,
          habitToUpdate,
        }: {
          id: string
          habitToUpdate: IHabit
        }) => {
          return updatedHabitData
        },
      },
    })
    const updatedHabit = await updateHabitUseCase.execute(habitToUpdate)
    expect(updatedHabitData).toEqual(updatedHabit)
  })

  it('FindAllHabitsUsecase should find all habits', async () => {
    const habitsToFind = [
      {
        id: 'db05d88c-70b8-4bca-a8ba-fa33358daa1d',
        name: 'Drink water',
        occurrences: 7,
        startDate: new Date('2022-01-01'),
        completionDates: [],
        color: '#000000',
      },
      {
        id: 'db05d88c-70b8-4bca-a8ba-fa33358daa1d',
        name: 'Drink water',
        occurrences: 7,
        startDate: new Date('2022-01-01'),
        completionDates: [],
        color: '#000000',
      },
    ]
    const findAllHabitsUseCase = new FindAllHabitsUsecase({
      repository: {
        findAll: () => {
          return habitsToFind
        },
      },
    })
    const habits = await findAllHabitsUseCase.execute()
    expect(habits).toEqual(habitsToFind)
  })
})

export {}
