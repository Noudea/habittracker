import CreateHabitUsecase from '../../src/core/habit/usecases/createHabit/createHabitUsecase'
import DeleteHabitUsecase from '../../src/core/habit/usecases/deleteHabit/DeleteHabitUsecase'
import IHabitModel from '../../src/data/models/IHabitModel'
import IHabit from '../../src/core/habit/entities/IHabit'
import FindHabitUsecase from '../../src/core/habit/usecases/findHabit/FindHabitUsecase'
import UpdateHabitUsecase from '../../src/core/habit/usecases/updateHabit/UpdateHabitUsecase'

describe('usecases habit', () => {
  it('CreateHabitUsecase should create an habit', async () => {
    const habitToCreate = {
      name: 'Drink water',
      daysPerWeek: 7,
      startDate: new Date('2021-01-01'),
      color: '#000000',
    }
    const createHabitUseCase = new CreateHabitUsecase({
      repository: {
        create: (habit: IHabit) => {
          return {
            ...habit,
            completionDates: [],
          }
        },
      },
    })
    const habit = await createHabitUseCase.execute(habitToCreate)
    expect(habit).toEqual({ ...habitToCreate, completionDates: [] })
  })
  it('DeleteHabitUsecase should delete an habit', async () => {
    const habitToDelete = {
      _id: 'db05d88c-70b8-4bca-a8ba-fa33358daa1d',
      name: 'Drink water',
      daysPerWeek: 7,
      startDate: new Date('2022-01-01'),
      completionDates: [],
      color: '#000000',
    }
    const deleteHabitUseCase = new DeleteHabitUsecase({
      repository: {
        delete: ({ objectToDelete }: { objectToDelete: IHabitModel }) => {
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
      _id: 'db05d88c-70b8-4bca-a8ba-fa33358daa1d',
      name: 'Drink water',
      daysPerWeek: 7,
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
      id: habitToFind._id,
    })
    expect(habit).toEqual(habitToFind)
  })
  it('UpdateHabitUsecase should update an habit', async () => {
    const habitToUpdate = {
      _id: 'db05d88c-70b8-4bca-a8ba-fa33358daa1d',
      name: 'Drink water',
      daysPerWeek: 7,
      startDate: new Date('2022-01-01'),
      completionDates: [],
      color: '#000000',
    }

    const updatedHabitData = {
      name: 'Drink water',
      daysPerWeek: 7,
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
          habitToUpdate: IHabitModel
        }) => {
          console.log('updatedObject', updatedHabitData)
          return updatedHabitData
        },
      },
    })
    const updatedHabit = await updateHabitUseCase.execute(habitToUpdate)
    expect(updatedHabitData).toEqual(updatedHabit)
  })
})

export {}
